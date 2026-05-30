import React, { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const maxParticles = 60;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      glow: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Slow drifting velocities
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
        // Cyber punk colors
        const colors = [
          'rgba(0, 243, 255, 0.4)',  // cyan
          'rgba(255, 0, 230, 0.4)',  // pink/magenta
          'rgba(188, 19, 254, 0.4)', // purple
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.glow = Math.random();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce or wrap around
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.shadowColor = this.color;
        c.shadowBlur = 10 * this.glow;
        c.fill();
        c.shadowColor = 'transparent';
        c.shadowBlur = 0;
      }
    }

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    const drawGrid = (c: CanvasRenderingContext2D) => {
      // Perspective and normal overlay grid (very faint)
      c.strokeStyle = 'rgba(6, 182, 212, 0.03)';
      c.lineWidth = 1;
      const gridSize = 80;

      // Vertical lines
      for (let x = 0; x < width; x += gridSize) {
        c.beginPath();
        c.moveTo(x, 0);
        c.lineTo(x, height);
        c.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < height; y += gridSize) {
        c.beginPath();
        c.moveTo(0, y);
        c.lineTo(width, y);
        c.stroke();
      }
    };

    const animate = () => {
      // Clear with dark, slightly translucent shade to create smooth trails
      ctx.fillStyle = 'rgba(5, 5, 8, 0.15)';
      ctx.fillRect(0, 0, width, height);

      drawGrid(ctx);

      // Update and draw particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      // Draw faint connections (cyber link webs)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect if particles are close
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = `rgba(0, 243, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Listen to resize
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      className="fixed inset-0 w-full h-full pointer-events-none -z-20 bg-[#050508]"
    />
  );
}
