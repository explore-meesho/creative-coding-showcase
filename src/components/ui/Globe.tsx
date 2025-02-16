"use client";

import createGlobe from "cobe";
import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    // India - NIT Kurukshetra
    { location: [29.9495, 76.8183], size: 0.1 },
    // Other tech hubs
    { location: [37.7749, -122.4194], size: 0.05 }, // San Francisco
    { location: [40.7128, -74.0060], size: 0.05 }, // New York
    { location: [51.5074, -0.1278], size: 0.05 }, // London
    { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
    { location: [28.6139, 77.2090], size: 0.05 }, // Delhi
  ],
};

export function Globe({
  className,
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  let phi = 0;
  let width = 0;

  const onResize = useCallback(() => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...GLOBE_CONFIG,
      width: width * 2,
      height: width * 2,
      onRender: (state: any) => {
        if (!pointerInteracting.current) {
          phi += 0.005;
        }
        state.phi = phi + pointerInteractionMovement.current;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = '1';
      }
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  return (
    <div className={cn("relative aspect-square w-full max-w-[600px]", className)}>
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-0 transition-opacity duration-500"
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grabbing';
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab';
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab';
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.005;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.005;
          }
        }}
      />
    </div>
  );
}
