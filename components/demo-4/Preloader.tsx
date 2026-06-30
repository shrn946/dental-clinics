'use client';
import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFadeOut(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 600); // matches transition time
      return () => clearTimeout(timer);
    };

    if (document.readyState === 'complete') {
      const initialTimer = setTimeout(handleLoad, 400);
      return () => clearTimeout(initialTimer);
    } else {
      window.addEventListener('load', handleLoad);
      const fallback = setTimeout(handleLoad, 1500); // safety fallback
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        transition: 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      {/* Outer spinning ring */}
      <div style={{ position: 'relative', width: '60px', height: '60px' }}>
        <div
          style={{
            boxSizing: 'border-box',
            display: 'block',
            position: 'absolute',
            width: '60px',
            height: '60px',
            border: '3px solid transparent',
            borderTopColor: '#ff5a6e',
            borderRadius: '50%',
            animation: 'spin-clockwise 1s linear infinite',
          }}
        />
        <div
          style={{
            boxSizing: 'border-box',
            display: 'block',
            position: 'absolute',
            width: '44px',
            height: '44px',
            margin: '8px',
            border: '3px solid transparent',
            borderTopColor: '#333333',
            borderRadius: '50%',
            animation: 'spin-counterclockwise 1.2s linear infinite',
          }}
        />
      </div>

      {/* Brand logo or subtle loading text */}
      <div
        style={{
          marginTop: '20px',
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontSize: '15px',
          fontWeight: 600,
          color: '#ff5a6e',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          animation: 'pulse-fade 1.5s ease-in-out infinite',
        }}
      >
        Loading
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-clockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-counterclockwise {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes pulse-fade {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}} />
    </div>
  );
}
