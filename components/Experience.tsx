'use client';
import { useEffect, useRef } from 'react';
import { useLang } from '@/context/LangContext';

const tx = {
  es: {
    num: '04', section: 'Experiencia', heading: 'Donde he', accent: 'contribuido',
    job: {
      title: 'Diseñador & Desarrollador Web',
      company: 'Jussi Pizza',
      date: '2015 — presente',
      desc: 'Responsable del diseño y desarrollo del sitio web y materiales digitales de la marca. Creación de menús visuales, banners para redes sociales, sistema de identidad digital coherente y experiencia de usuario optimizada para móvil.',
    },
    edu: {
      title: 'Ingeniería Multimedia',
      institution: 'Universidad en formación',
      date: '2023 — presente',
      desc: 'Carrera enfocada en el cruce entre tecnología, diseño y medios digitales. Áreas de profundización: desarrollo web, diseño 3D, videojuegos, motion graphics y UX/UI.',
    },
  },
  en: {
    num: '04', section: 'Experience', heading: 'Where I have', accent: 'contributed',
    job: {
      title: 'Designer & Web Developer',
      company: 'Jussi Pizza',
      date: '2015 — present',
      desc: 'Responsible for the design and development of the brand\'s website and digital materials. Creation of visual menus, social media banners, a coherent digital identity system, and mobile-optimized user experience.',
    },
    edu: {
      title: 'Multimedia Engineering',
      institution: 'University (in progress)',
      date: '2023 — present',
      desc: 'Degree focused on the intersection of technology, design, and digital media. Areas of focus: web development, 3D design, video games, motion graphics, and UX/UI.',
    },
  },
};

export default function Experience() {
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

  return (
    <section id="experience" ref={ref} style={{ padding: 'clamp(80px, 10vw, 120px) clamp(1.5rem, 5vw, 4rem)', position: 'relative' }}>
      <div className="grad-blob" style={{ width: 300, height: 300, background: 'rgba(124,92,191,0.10)', bottom: '10%', left: '-5%' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <p className="section-num" style={{ marginBottom: '1rem' }}>{tx_.num} — {tx_.section}</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.1 }}>
            {tx_.heading}<br />
            <span style={{ color: 'var(--accent)' }}>{tx_.accent}</span>
          </h2>
          <div className="sep" />
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, background: 'var(--border)' }} />

          {/* Work entry */}
          <div className="reveal" style={{ position: 'relative', paddingBottom: '4rem' }}>
            <div style={{ position: 'absolute', left: '-2.35rem', top: '0.35rem', width: 10, height: 10, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 12px var(--accent)' }} />
            <div className="glass" style={{ padding: '2.5rem', borderRadius: 8, maxWidth: 720 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)' }}>{tx_.job.title}</h3>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.8rem', color: 'var(--accent)', letterSpacing: '0.05em', marginTop: '0.25rem' }}>{tx_.job.company}</p>
                </div>
                <span className="tag">{tx_.job.date}</span>
              </div>
              <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>{tx_.job.desc}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['UI Design', 'HTML/CSS', 'Figma', 'Branding', 'Social Media'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Education entry */}
          <div className="reveal" style={{ position: 'relative', paddingBottom: '2rem' }}>
            <div style={{ position: 'absolute', left: '-2.35rem', top: '0.35rem', width: 10, height: 10, borderRadius: '50%', background: 'var(--accent2)', boxShadow: '0 0 12px var(--accent2)' }} />
            <div className="glass" style={{ padding: '2.5rem', borderRadius: 8, maxWidth: 720 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)' }}>{tx_.edu.title}</h3>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.8rem', color: 'var(--accent2)', letterSpacing: '0.05em', marginTop: '0.25rem' }}>{tx_.edu.institution}</p>
                </div>
                <span className="tag">{tx_.edu.date}</span>
              </div>
              <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>{tx_.edu.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
