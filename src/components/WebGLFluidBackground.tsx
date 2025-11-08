'use client';

import { useEffect, useRef } from 'react';

export default function WebGLFluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Prevent duplicate script loading
    if (scriptLoadedRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Add a unique identifier to ensure the script finds our canvas
    canvas.id = 'webgl-fluid-canvas';

    // Function to load and initialize the WebGL fluid script
    const loadScript = () => {
      // Check if script already exists
      const existingScript = document.querySelector('script[src="/webgl-fluid.js"]');
      if (existingScript) {
        console.log('✅ WebGL Fluid script already loaded');
        scriptLoadedRef.current = true;
        return;
      }

      const script = document.createElement('script');
      script.src = '/webgl-fluid.js';
      script.async = false; // Load synchronously to ensure canvas is ready
      
      script.onload = () => {
        scriptLoadedRef.current = true;
        console.log('✅ WebGL Fluid Background loaded and initialized');
      };

      script.onerror = () => {
        console.error('❌ Failed to load WebGL Fluid Background script');
      };

      document.body.appendChild(script);
    };

    // Small delay to ensure canvas is in DOM
    const timer = setTimeout(loadScript, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      const script = document.querySelector('script[src="/webgl-fluid.js"]');
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      scriptLoadedRef.current = false;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'auto',
        touchAction: 'none',
        display: 'block',
      }}
    />
  );
}
