import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas({ currentTheme = 'rose' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Mouse coordinates for particle repulsion
    let mouse = { x: -1000, y: -1000, radius: 120 };
    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Rose Petal / Glowing Embers System
    const particleCount = Math.min(width < 768 ? 28 : 55, 60);
    const particles = [];

    // Color definitions based on current active theme
    const getColors = (theme) => {
      switch (theme) {
        case 'violet': // Music / Singing Telegram
          return ['#a855f7', '#c084fc', '#818cf8', '#6366f1', '#e879f9'];
        case 'emerald': // Sacred Altar & Memorials
          return ['#10b981', '#34d399', '#6ee7b7', '#d4af37', '#f59e0b'];
        case 'coral': // Romance & Designer Bags
          return ['#fb7185', '#f43f5e', '#fda4af', '#facc15', '#f472b6'];
        case 'gold': // Chicago Heritage
          return ['#f59e0b', '#d97706', '#fbbf24', '#fde68a', '#e11d48'];
        case 'rose':
        default: // Hero & General
          return ['#f43f5e', '#e11d48', '#be123c', '#fb7185', '#d4af37'];
      }
    };

    class PetalParticle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -20;
        this.size = Math.random() * 8 + 5;
        this.speedX = Math.random() * 1.2 - 0.6;
        this.speedY = Math.random() * 0.9 + 0.5;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.03;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.isGlow = Math.random() > 0.6;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.04 + 0.01;
      }

      update(colors) {
        this.wobble += this.wobbleSpeed;
        this.x += this.speedX + Math.sin(this.wobble) * 0.5;
        this.y += this.speedY;
        this.rotation += this.rotSpeed;

        // Mouse avoidance / gentle swirl
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          this.x -= (dx / distance) * force * 5;
          this.y -= (dy / distance) * force * 5;
        }

        // Reset if drifted past bottom or sides
        if (this.y > height + 20 || this.x < -30 || this.x > width + 30) {
          this.reset();
        }
      }

      draw(colors) {
        const color = colors[Math.floor(this.x + this.y) % colors.length];
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;

        if (this.isGlow) {
          // Shimmering Golden/Rose Light Mote
          ctx.beginPath();
          ctx.arc(0, 0, this.size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.shadowColor = color;
          ctx.shadowBlur = 10;
          ctx.fill();
        } else {
          // Floating Organic Rose Petal Shape
          ctx.beginPath();
          ctx.moveTo(0, -this.size);
          ctx.bezierCurveTo(this.size * 0.8, -this.size * 0.5, this.size * 0.7, this.size * 0.8, 0, this.size);
          ctx.bezierCurveTo(-this.size * 0.7, this.size * 0.8, -this.size * 0.8, -this.size * 0.5, 0, -this.size);
          ctx.fillStyle = color;
          ctx.shadowColor = color;
          ctx.shadowBlur = 4;
          ctx.fill();
        }

        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new PetalParticle());
    }

    // Animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const activeColors = getColors(currentTheme);

      particles.forEach((p) => {
        p.update(activeColors);
        p.draw(activeColors);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70 transition-opacity duration-1000"
    />
  );
}
