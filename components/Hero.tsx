'use client';
import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { useLang } from '@/context/LangContext';

const ROLES = {
  es: ['Ingeniero Multimedia en formación', 'Desarrollador Web Jr.', 'UI/UX Explorer', 'Artista 3D & Animador'],
  en: ['Multimedia Engineer in training', 'Junior Web Developer', 'UI/UX Explorer', '3D Artist & Animator'],
};

const t = {
  es: {
    greeting: '¡Hola! 👋',
    name: 'Soy Josu',
    desc: 'Un explorador en el mundo del diseño multimedia.\nCon curiosidad infinita y una pasión inquebrantable por crear experiencias que impactan.',
    cta: 'Ver proyectos →',
  },
  en: {
    greeting: 'Hey there! 👋',
    name: "I'm Josu",
    desc: 'An explorer in the world of multimedia design.\nWith infinite curiosity and an unbreakable passion for creating impactful experiences.',
    cta: 'View projects →',
  },
};

export default function Hero() {
  const { lang } = useLang();
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const splineWrapperRef = useRef<HTMLDivElement>(null);

  // Reset typewriter on lang change
  useEffect(() => {
    setRoleIdx(0);
    setDisplayed('');
    setTyping(true);
  }, [lang]);

  // Enable pointer events on canvas only (so hover works), wrappers stay none (so buttons aren't blocked)
  useEffect(() => {
    const wrapper = splineWrapperRef.current;
    if (!wrapper) return;
    const timeout = setTimeout(() => {
      const canvas = wrapper.querySelector('canvas');
      if (!canvas) return;
      // Allow hover on the canvas itself for Spline interactivity
      (canvas as HTMLElement).style.pointerEvents = 'auto';
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  // Typewriter
  useEffect(() => {
    const roles = ROLES[lang];
    const target = roles[roleIdx % roles.length];
    let i = typing ? displayed.length : displayed.length - 1;
    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx(prev => (prev + 1) % ROLES[lang].length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx, lang]);

  const tx = t[lang];

  return (
    <section
      id="hero"
      style={{ minHeight: '100vh', display: 'flex', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}
    >
      <div className="grad-blob" style={{ width: 500, height: 500, background: 'rgba(0,223,129,0.12)', top: '10%', left: '-10%' }} />
      <div className="grad-blob" style={{ width: 400, height: 400, background: 'rgba(0,180,216,0.08)', bottom: '10%', right: '5%' }} />

      {/* Left text */}
      <div
        ref={containerRef}
        style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 4rem', position: 'relative', zIndex: 30, maxWidth: '52%', pointerEvents: 'auto' }}
        className="hero-left"
      >
        <p className="fade-in-up" style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem', animationDelay: '0.1s' }}>
          {tx.greeting}
        </p>

        <h1 className="fade-in-up" style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: '0.5rem', animationDelay: '0.2s' }}>
          {tx.name}<br />
          <span style={{ background: 'linear-gradient(90deg, #00df81, #00b4d8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Gallego
          </span>
        </h1>

        <div className="sep fade-in-up" style={{ animationDelay: '0.3s' }} />

        <h2 className="fade-in-up" style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(0.85rem, 1.5vw, 1rem)', color: 'var(--text)', marginBottom: '1.5rem', animationDelay: '0.4s', minHeight: '1.6em' }}>
          {displayed}<span className="blink">_</span>
        </h2>

        <p className="fade-in-up" style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, maxWidth: '480px', marginBottom: '3rem', animationDelay: '0.5s', whiteSpace: 'pre-line' }}>
          {tx.desc}
        </p>

        <div className="fade-in-up flex flex-wrap items-center gap-3" style={{ animationDelay: '0.6s', position: 'relative', zIndex: 30 }}>
          <a href="#projects" className="nav-btn" style={{ padding: '0.75rem 2rem', fontSize: '0.75rem', position: 'relative', zIndex: 30 }}>{tx.cta}</a>
          {[
            { title: 'GitHub', href: 'https://github.com/josuegallego', svg: <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /> },
            { title: 'LinkedIn', href: 'https://www.linkedin.com/in/josu-gallego-/', svg: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
            { title: 'Email', href: 'mailto:josue.gallego@uao.edu.co', svg: <><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" /><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" /></> },
          ].map(s => (
            <a key={s.title} href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon" title={s.title} style={{ position: 'relative', zIndex: 30 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">{s.svg}</svg>
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Spline */}
      <div style={{ flex: '0 0 55%', position: 'relative', zIndex: 10, minHeight: '100%', pointerEvents: 'none' }} className="hidden lg:flex">
        <div
          ref={splineWrapperRef}
          style={{ position: 'absolute', top: '-35vh', left: '-10%', width: '130%', height: '150vh', pointerEvents: 'none' }}
        >
          <Spline scene="https://prod.spline.design/kXk5PDEG55GgLkDS/scene.splinecode" />
        </div>
      </div>

      {/* Mobile Spline */}
      <div className="lg:hidden" style={{ position: 'absolute', inset: 0, opacity: 0.3, zIndex: 0 }}>
        <Spline scene="https://prod.spline.design/kXk5PDEG55GgLkDS/scene.splinecode" />
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to top, var(--bg), transparent)', zIndex: 15 }} />
    </section>
  );
}