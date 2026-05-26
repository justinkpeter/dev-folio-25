"use client";

import { useEffect, useRef } from "react";

const CHARS =
  "!@#$%^&*()_+-=[]{}|;:,.<>?`~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const NAME = "JUSTINPETER";
const NAME_INJECTION_CHANCE = 0.15;
const FONT_SIZE = 12;
const COPPER = { r: 184, g: 115, b: 51 };
const PROXIMITY_RADIUS = 80;
const FADE_SPEED = 0.05;

interface Cell {
  char: string;
  x: number;
  y: number;
  intensity: number;
}

export default function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cellsRef = useRef<Cell[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const buildGrid = () => {
      const cols = Math.floor(canvas.width / FONT_SIZE);
      const rows = Math.floor(canvas.height / FONT_SIZE);
      const cells: Cell[] = [];
      let nameIndex = 0;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          let char: string;

          if (
            nameIndex < NAME.length &&
            Math.random() < NAME_INJECTION_CHANCE
          ) {
            char = NAME[nameIndex++];
          } else {
            char = CHARS[Math.floor(Math.random() * CHARS.length)];
          }

          cells.push({
            char,
            x: col * FONT_SIZE + FONT_SIZE / 2,
            y: row * FONT_SIZE + FONT_SIZE / 2,
            intensity: 0,
          });
        }
      }

      cellsRef.current = cells;
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      buildGrid();
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const { x: mx, y: my } = mouseRef.current;

      for (const cell of cellsRef.current) {
        const dx = cell.x - mx;
        const dy = cell.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < PROXIMITY_RADIUS) {
          cell.intensity = Math.min(
            1,
            cell.intensity + (1 - dist / PROXIMITY_RADIUS) * 0.2,
          );
        } else {
          cell.intensity = Math.max(0, cell.intensity - FADE_SPEED);
        }

        if (cell.intensity > 0) {
          const r = Math.round(COPPER.r * cell.intensity);
          const g = Math.round(COPPER.g * cell.intensity);
          const b = Math.round(COPPER.b * cell.intensity);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.3 + cell.intensity * 0.7})`;
        } else {
          ctx.fillStyle = "rgba(120, 120, 120, 0.25)";
        }

        ctx.fillText(cell.char, cell.x, cell.y);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
