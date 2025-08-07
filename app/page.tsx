'use client';
import Hero from '@/components/Hero';
import MoodSelector from '@/components/MoodSelector';
import { useState } from 'react';
import Player from '@/components/Player';

export default function Home() {
  const [mood, setMood] = useState<string>('Cozy Vibes');
  const [url, setUrl] = useState<string | null>(null);

  return (
    <main className="flex flex-col items-center gap-8 p-6 text-center">
      <Hero />
      <MoodSelector mood={mood} setMood={setMood} />

      <button
        onClick={async () => {
          const res = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mood }),
          });
          const { audioUrl } = await res.json();
          setUrl(audioUrl);
        }}
        className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl backdrop-blur-md">
        Listen Now
      </button>

      {url && <Player src={url} />}
    </main>
  );
}