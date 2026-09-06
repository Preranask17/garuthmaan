'use client';

import { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 120;
const LERP_FACTOR = 0.08;

const pad3 = (i: number): string => String(i).padStart(3, '0');
const upperSrc = (i: number): string => `/Background/ezgif-frame-${pad3(i)}.png`;
const lowerSrc = (i: number): string => `/background/ezgif-frame-${pad3(i)}.png`;

export default function BackgroundSequence() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef<boolean[]>([]);
  const targetRef = useRef<number>(0);
  const currentRef = useRef<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    let cancelled = false;

    const renderFrame = (index: number) => {
      let pick = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(index)));
      if (!loadedRef.current[pick]) {
        // Nearest loaded frame fallback so scrubbing never flashes blank
        let found = -1;
        for (let d = 1; d < TOTAL_FRAMES; d++) {
          if (pick - d >= 0 && loadedRef.current[pick - d]) {
            found = pick - d;
            break;
          }
          if (pick + d < TOTAL_FRAMES && loadedRef.current[pick + d]) {
            found = pick + d;
            break;
          }
        }
        if (found === -1) return;
        pick = found;
      }
      const img = imagesRef.current[pick];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;

      // Symmetrical aspect-cover scaling (object-fit: cover math)
      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      let renderWidth = canvasWidth;
      let renderHeight = canvasHeight;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        renderHeight = canvasWidth / imgRatio;
        offsetY = (canvasHeight - renderHeight) / 2;
      } else {
        renderWidth = canvasHeight * imgRatio;
        offsetX = (canvasWidth - renderWidth) / 2;
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    };

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(currentRef.current);
    };

    // Ultra-smooth LERP loop: current glides toward target every frame
    const loop = () => {
      if (cancelled) return;
      currentRef.current += (targetRef.current - currentRef.current) * LERP_FACTOR;
      // Snap when close enough to avoid endless sub-pixel drift
      if (Math.abs(targetRef.current - currentRef.current) < 0.01) {
        currentRef.current = targetRef.current;
      }
      renderFrame(currentRef.current);
      rafId = requestAnimationFrame(loop);
    };

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      const progress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
      targetRef.current = progress * (TOTAL_FRAMES - 1);
    };

    // Preload ALL 120 frames before binding scroll — no white flashes or stutter
    const slots: (HTMLImageElement | undefined)[] = new Array(TOTAL_FRAMES);
    const loaded: boolean[] = new Array(TOTAL_FRAMES).fill(false);
    imagesRef.current = slots as HTMLImageElement[];
    loadedRef.current = loaded;
    let settled = 0;

    const finishOne = () => {
      settled += 1;
      if (settled >= TOTAL_FRAMES && !cancelled) {
        setLoading(false);
        // Bind scroll only after everything is in memory
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        rafId = requestAnimationFrame(loop);
      }
    };

    updateCanvasSize();

    // Dual-case loader: try uppercase /Background/ first, fall back to
    // lowercase /background/ on error. Logs every exact path string.
    const loadFrame = (i: number, slot: number, isFirst: boolean) => {
      const primary = upperSrc(i);
      const fallback = lowerSrc(i);
      console.log(`[BackgroundSequence] loading frame ${i} pad=${pad3(i)} try1="${primary}"`);
      const img = new Image();
      img.onload = () => {
        console.log(`[BackgroundSequence] loaded frame ${i} from "${img.src}"`);
        slots[slot] = img;
        loaded[slot] = true;
        if (isFirst) renderFrame(0);
        finishOne();
      };
      img.onerror = () => {
        console.warn(`[BackgroundSequence] 404 on try1 frame ${i}: "${primary}" — retrying "${fallback}"`);
        const retry = new Image();
        retry.onload = () => {
          console.log(`[BackgroundSequence] loaded frame ${i} from fallback "${retry.src}"`);
          slots[slot] = retry;
          loaded[slot] = true;
          if (isFirst) renderFrame(0);
          finishOne();
        };
        retry.onerror = () => {
          console.error(`[BackgroundSequence] FAILED frame ${i}: both "${primary}" and "${fallback}" 404`);
          finishOne();
        };
        retry.src = fallback;
        slots[slot] = retry;
      };
      img.src = primary;
      slots[slot] = img;
    };

    // Draw frame 1 the instant it arrives so the page is never blank
    loadFrame(1, 0, true);

    // Queue the remaining 119 without blocking initial paint
    const queueRest = () => {
      for (let i = 2; i <= TOTAL_FRAMES; i++) {
        loadFrame(i, i - 1, false);
      }
    };
    const ric = (window as unknown as { requestIdleCallback?: (cb: () => void) => void })
      .requestIdleCallback;
    if (ric) ric(queueRest);
    else setTimeout(queueRest, 0);

    window.addEventListener('resize', updateCanvasSize);

    return () => {
      cancelled = true;
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 -z-10 pointer-events-none w-screen h-screen object-cover"
      />
      <div className="fixed inset-0 -z-10 bg-black/50 pointer-events-none" />
      {loading && (
        <div className="fixed bottom-4 right-4 -z-10 pointer-events-none rounded-full bg-black/60 px-3 py-1 text-[10px] font-mono tracking-widest text-white/60">
          LOADING BG…
        </div>
      )}
    </>
  );
}