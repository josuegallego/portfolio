'use client';
import { useEffect, useRef } from 'react';
import { useLang } from '@/context/LangContext';

const tx = {
  es: {
    num: '05', section: 'Contacto',
    heading: 'Hablemos de', accent: 'algo grande',
    sub: '¿Tienes un proyecto interesante? ¿Quieres colaborar? ¿O simplemente quieres decir hola? Estoy abierto a conversaciones.',
    footer: '© 2026 JOSUÉ GALLEGO — INGENIERO MULTIMEDIA EN FORMACIÓN',
  },
  en: {
    num: '05', section: 'Contact',
    heading: "Let's talk about", accent: 'something big',
    sub: 'Do you have an interesting project? Want to collaborate? Or just want to say hello? I\'m open to conversations.',
    footer: '© 2026 JOSUÉ GALLEGO — MULTIMEDIA ENGINEER IN TRAINING',
  },
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { lang } = useLang();
  const tx_ = tx[lang];

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const socials = [
    {
      label: 'GitHub', handle: '@josuegallego', href: 'https://github.com/josuegallego',
      icon: <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />,
    },
    {
      label: 'LinkedIn', handle: 'Josué Gallego', href: 'https://www.linkedin.com/in/josu-gallego-/',
      icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
    },
    {
      label: 'Email', handle: 'josue.gallego@uao.edu.co', href: 'mailto:josue.gallego@uao.edu.co',
      icon: <><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" /><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" /></>,
    },
  ];

  return (
    <section id="contact" ref={ref} style={{ padding: '120px 4rem 80px', position: 'relative', overflow: 'hidden' }}>
      <div className="grad-blob" style={{ width: 500, height: 500, background: 'rgba(124,92,191,0.12)', top: '0%', left: '50%', transform: 'translateX(-50%)' }} />

      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <p className="section-num reveal" style={{ marginBottom: '1rem', display: 'block' }}>{tx_.num} — {tx_.section}</p>

        <h2 className="reveal" style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.0, marginBottom: '1.5rem' }}>
          {tx_.heading}<br />
          <span style={{ background: 'linear-gradient(90deg, #00df81, #00b4d8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {tx_.accent}
          </span>
        </h2>

        <p className="reveal" style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 560, margin: '0 auto 3rem' }}>
          {tx_.sub}
        </p>

        <a
          href="mailto:josue.gallego@uao.edu.co"
          className="reveal"
          style={{
            display: 'inline-block', fontFamily: "'Space Mono', monospace", fontSize: '0.85rem',
            letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text)',
            padding: '1rem 3rem', border: '1px solid var(--accent)', background: 'rgba(124,92,191,0.1)',
            textDecoration: 'none', transition: 'background 0.3s, transform 0.3s', marginBottom: '4rem',
          }}
          onMouseEnter={e => { (e.target as HTMLElement).style.background = 'rgba(124,92,191,0.25)'; }}
          onMouseLeave={e => { (e.target as HTMLElement).style.background = 'rgba(124,92,191,0.1)'; }}
        >
          HEY! ↗
        </a>

        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              className="glass"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.9rem 1.5rem', borderRadius: 6, textDecoration: 'none', transition: 'border-color 0.3s, transform 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,92,191,0.5)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--accent)', flexShrink: 0 }}>{s.icon}</svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text)', marginTop: '0.1rem' }}>{s.handle}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid var(--border)', marginTop: '5rem', paddingTop: '2rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>
          {tx_.footer}
        </p>
      </div>
    </section>
  );
}
