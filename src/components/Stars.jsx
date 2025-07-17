import React, { useRef, useEffect } from "react";

const STAR_COUNT = 80;
const STAR_COLORS = ["#fff", "#b9f2ff", "#e0e0e0", "#a7ffe7"];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const Stars = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    function createStars() {
      stars.current = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height * 0.6,
        r: randomBetween(0.7, 1.8),
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
        speed: randomBetween(0.02, 0.08),
        twinkle: Math.random() * Math.PI * 2,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let star of stars.current) {
        ctx.save();
        ctx.globalAlpha = 0.7 + 0.3 * Math.sin(star.twinkle);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = star.color;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
        // Animate
        star.y += star.speed;
        if (star.y > height * 0.6) {
          star.y = -2;
          star.x = Math.random() * width;
        }
        star.twinkle += randomBetween(0.02, 0.06);
      }
      requestAnimationFrame(draw);
    }

    createStars();
    draw();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      createStars();
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
};

export default Stars; 