'use client';
import { useEffect, useRef } from 'react';
import { useLang } from '@/context/LangContext';

const projects = {
  es: [
    { num: '01', title: 'Cosmos UI Kit', desc: 'Sistema de diseño glassmorphism para aplicaciones espaciales con más de 60 componentes React.', tags: ['React', 'TypeScript', 'Figma'], color: '#00df81', link: '#' },
    { num: '02', title: 'Neon Runner', desc: 'Videojuego de acción en 3D desarrollado en Unity con mecánicas de plataforma y gráficos retrofuturistas.', tags: ['Unity', 'C#', 'Blender'], color: '#00b4d8', link: '#' },
    { num: '03', title: 'Pulse Dashboard', desc: 'Dashboard analítico con visualizaciones interactivas y modo oscuro. Integrado con APIs REST y PostgreSQL.', tags: ['Next.js', 'Laravel', 'PostgreSQL'], color: '#00df81', link: '#' },
    { num: '04', title: 'Morphic — Motion Reel', desc: 'Showreel de motion graphics y animación 3D. Composición en After Effects + Blender Cycles.', tags: ['After Effects', 'Blender', 'Cinema 4D'], color: '#00b4d8', link: '#' },
  ],
  en: [
    { num: '01', title: 'Cosmos UI Kit', desc: 'Glassmorphism design system for space apps with 60+ React components.', tags: ['React', 'TypeScript', 'Figma'], color: '#00df81', link: '#' },
    { num: '02', title: 'Neon Runner', desc: '3D action game built in Unity with platformer mechanics and retro-futuristic graphics.', tags: ['Unity', 'C#', 'Blender'], color: '#00b4d8', link: '#' },
    { num: '03', title: 'Pulse Dashboard', desc: 'Analytical dashboard with interactive visualizations and dark mode. Integrated with REST APIs and PostgreSQL.', tags: ['Next.js', 'Laravel', 'PostgreSQL'], color: '#00df81', link: '#' },
    { num: '04', title: 'Morphic — Motion Reel', desc: 'Motion graphics and 3D animation showreel. Composed in After Effects + Blender Cycles.', tags: ['After Effects', 'Blender', 'Cinema 4D'], color: '#00b4d8', link: '#' },
  ],
};

const tx = {
  es: { num: '03', section: 'Proyectos', heading: 'Cosas que he', accent: 'construido', sub: 'Un registro de proyectos donde la creatividad se encuentra con la ingeniería.' },
  en: { num: '03', section: 'Projects', heading: 'Things I have', accent: 'built', sub: 'A record of projects where creativity meets engineering.' },
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const { lang } = useLang();

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const tx_ = tx[lang];
  const ps = projects[lang];

  return (
    <section id="projects" ref={ref} style={{ padding: '120px 4rem', position: 'relative' }}>
      <div className="grad-blob" style={{ width: 450, height: 450, background: 'rgba(0,180,216,0.07)', top: '30%', right: '-10%' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-num" style={{ marginBottom: '1rem' }}>{tx_.num} — {tx_.section}</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.1 }}>
            {tx_.heading}<br />
            <span style={{ color: 'var(--accent)' }}>{tx_.accent}</span>
          </h2>
          <div className="sep" />
          <p style={{ color: 'var(--muted)', maxWidth: 500 }}>{tx_.sub}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '1.5rem' }}>
          {ps.map(p => (
            <a
              key={p.num}
              href={p.link}
              className="reveal project-card glass"
              style={{ display: 'block', padding: '2.5rem', borderRadius: 8, textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: p.color, letterSpacing: '0.1em' }}>{p.num}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--muted)', transform: 'rotate(-45deg)' }}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                {p.title}
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {p.tags.map(t => (
                  <span key={t} className="tag" style={{ borderColor: `${p.color}40`, color: p.color }}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
