import { useEffect, useRef } from 'react';
interface Props {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
}
export default function Player({ src, autoplay = true, loop = false }: Props) {
  const ref = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (autoplay) ref.current?.play().catch(() => {/* autoplay policy */});
  }, [src]);
  return (
    <audio ref={ref} src={src} controls loop={loop} className="w-full max-w-md" />
  );
}