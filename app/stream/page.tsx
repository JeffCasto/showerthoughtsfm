'use client';
import Player from '@/components/Player';
import useSWR from 'swr';
const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function StreamPage() {
  const { data } = useSWR('/api/generate?mode=stream', fetcher, {
    refreshInterval: 30000, // pull a new thought every 30 sec
  });
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 p-4">
      <h1 className="text-4xl font-bold animate-pulse">∞ Stream Mode</h1>
      {data?.audioUrl && <Player src={data.audioUrl} autoplay loop />}
    </main>
  );
}