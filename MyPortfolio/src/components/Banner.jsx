

import React, { useEffect, useRef } from 'react';


const Banner = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Star properties
    const stars = [];
    const starCount = 25;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 20 ,
        speed: Math.random() ,
        opacity: Math.random()
      });
    }

    const draw = () => {
      // Create trailing effect by using a semi-transparent clear
      ctx.fillStyle = 'rgba(10, 10, 15, 0.2)'; // Dark background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'grey';
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';

      stars.forEach(star => {
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x, star.y + star.length);
        ctx.stroke();

        // Move star down
        star.y += star.speed;

        // Reset star to top if it goes off screen
        if (star.y > canvas.height) {
          star.y = -star.length;
          star.x = Math.random() * canvas.width;
          star.speed = Math.random() * 1 + 2;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
       
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Places it behind your content
        background: '#0a0a0f' // Fallback color
      }}
    />
    
    </>
  );
};

export default Banner;