"use client";

import dynamic from 'next/dynamic';

const FlyingPaperPlane = dynamic(
  () => import('./FlyingPaperPlane'),
  { ssr: false }
);

export default function PaperPlaneWrapper() {
  return <FlyingPaperPlane/>;
}