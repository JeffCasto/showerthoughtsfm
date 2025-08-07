import { NextRequest, NextResponse } from 'next/server';
import { getRandomThought } from '@/lib/showerThoughts';
import { synthesize } from '@/lib/voice';
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const { mood } = await req.json();
  const thought = await getRandomThought();
  const id = crypto.randomUUID();

  // 1) synthesize voice
  const speech = await synthesize(thought);

  // 2) pick a local beat matching mood
  const beatPath = `/loops/${mood.toLowerCase().replace(/\s+/g, '-')}.mp3`;
  const beat = await fs.readFile(path.join(process.cwd(), 'public', beatPath));

  // 3) naïve mix – concatenate buffers (placeholder; use ffmpeg for real mix)
  const audioBuffer = Buffer.concat([beat, speech]);
  const fileName = `${id}.mp3`;
  const filePath = path.join('/tmp', fileName);
  await fs.writeFile(filePath, audioBuffer);

  return NextResponse.json({ audioUrl: `/api/generate/${fileName}` });
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url!);
  const parts = url.pathname.split('/');
  const file = parts.at(-1)!;
  const filePath = path.join('/tmp', file);
  const data = await fs.readFile(filePath);
  return new NextResponse(data, {
    headers: {
      'Content-Type': 'audio/mpeg',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}