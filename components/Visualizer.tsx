'use client';
import dynamic from 'next/dynamic';

import type { SketchProps } from 'react-p5';

const Sketch = dynamic<SketchProps>(
  () => import('react-p5').then((m) => m.default),
  { ssr: false },
);

export default function Visualizer() {
  const setup = (p5: any, canvasParentRef: any) => {
    p5.createCanvas(window.innerWidth, 200).parent(canvasParentRef);
  };
  const draw = (p5: any) => {
    p5.background(0, 0, 0, 5);
    p5.fill(255);
    p5.ellipse(p5.frameCount % p5.width, 100, 20, 20);
  };
  return <Sketch setup={setup} draw={draw} />;
}