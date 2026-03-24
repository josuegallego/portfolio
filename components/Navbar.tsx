'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLang } from '@/context/LangContext';

const navLinks = {
  es: [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Contacto', href: '#contact' },
  ],
  en: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggle } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = navLinks[lang];

  return (
    <nav
      style={{
        background: scrolled ? 'rgba(8,8,16,0.85)' : 'transparent',
        borderBottomColor: scrolled ? 'rgba(255,255,255,0.06)' : 'transparent',
        transition: 'background 0.4s, border-color 0.4s',
      }}
    >
      {/* Logo / Sticker */}
      <div className="flex items-center gap-3">
        <Image
          src="/sticker.png"
          alt="Josué Gallego sticker"
          width={42}
          height={42}
          style={{
            objectFit: 'contain',
            borderRadius: 4,
            display: 'block',
          }}
        />
        {/* Fallback cuadro JG — se oculta si hay sticker */}
        <div
          style={{
            width: 42, height: 42,
            background: 'linear-gradient(135deg, #00df81, #00b4d8)',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
          }}
        >
          <span style={{ fontFamily: "var(--space-mono)", fontSize: '0.8rem', color: '#fff', fontWeight: 700 }}>JG</span>
        </div>
        <span className="hidden min-[380px]:inline-block" style={{ fontFamily: "var(--syne)", fontSize: '0.9rem', letterSpacing: '0.05em', color: 'var(--muted)' }}>
          josué gallego
        </span>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map(l => (
          <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
        ))}
      </div>

      {/* Right actions */}
      {/* 🛠️ AQUI PUEDES AJUSTAR EL ESPACIO ENTRE EL BOTON 'EN' Y 'CV'. Cambia gap: '0.5rem' */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.01rem' }}>
        {/* Language toggle */}
        <button
          onClick={toggle}
          id="lang-toggle-btn"
          style={{
            fontFamily: "var(--space-mono)",
            fontSize: '0.7rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text)',
            /* 🛠️ AQUI PUEDES AJUSTAR EL PADDING INTERNO DEL BOTÓN 'EN'. Ej: '0.5rem 0.7rem' */
            padding: '0.5rem 0.7rem',
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(255,255,255,0.04)',
            borderRadius: 4,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            transition: 'all 0.25s',
            backdropFilter: 'blur(8px)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
            (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
            (e.currentTarget as HTMLElement).style.color = 'var(--text)';
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          </svg>
          {lang === 'es' ? 'EN' : 'ES'}
        </button>

        {/* Download CV */}
        <a
          href="/cv-josue-gallego.pdf"
          download="CV JosueGallego 2026.pdf"
          className="nav-btn"
          id="download-cv-btn"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span className="hidden sm:inline">{lang === 'es' ? 'Descargar CV' : 'Download CV'}</span>
          <span className="sm:hidden">CV</span>
        </a>
      </div>
    </nav>
  );
}
