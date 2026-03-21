'use client';
import { useEffect, useRef } from 'react';
import { useLang } from '@/context/LangContext';

const tx = {
  es: {
    num: '01',
    section: 'Sobre mí',
    heading: 'Un creador que',
    accent: 'nunca deja de explorar',
    p1: 'Soy estudiante de Ingeniería Multimedia con pasión por construir experiencias digitales que mezclan tecnología y arte. Me muevo entre el código limpio, el diseño intuitivo y el mundo 3D.',
    p2: 'Desde desarrollo web con React y Next.js hasta modelado en Blender y motion graphics en After Effects — busco siempre la intersección entre lo funcional y lo visualmente impactante.',
    stats: [
      { num: '10+', label: 'Proyectos completados' },
      { num: '3+', label: 'Años de estudio' },
      { num: '12+', label: 'Tecnologías dominadas' },
      { num: '∞', label: 'Curiosidad disponible' },
    ],
  },
  en: {
    num: '01',
    section: 'About me',
    heading: 'A creator who',
    accent: 'never stops exploring',
    p1: 'I am a Multimedia Engineering student passionate about building digital experiences that blend technology and art. I move fluidly between clean code, intuitive design, and the 3D world.',
    p2: 'From web development with React and Next.js to modeling in Blender and motion graphics in After Effects — I always seek the intersection of functional and visually impactful.',
    stats: [
      { num: '10+', label: 'Completed projects' },
      { num: '3+', label: 'Years of study' },
      { num: '12+', label: 'Technologies mastered' },
      { num: '∞', label: 'Curiosity available' },
    ],
  },
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { lang } = useLang();
  const tx_ = tx[lang];

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{ padding: '120px 4rem', position: 'relative', overflow: 'hidden' }}>
      <div className="grad-blob" style={{ width: 350, height: 350, background: 'rgba(201,125,58,0.08)', top: '20%', right: '-5%' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
        {/* Left */}
        <div>
          <p className="section-num reveal" style={{ marginBottom: '1rem' }}>{tx_.num} — {tx_.section}</p>
          <h2 className="reveal" style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.5rem' }}>
            {tx_.heading}<br />
            <span style={{ color: 'var(--accent)' }}>{tx_.accent}</span>
          </h2>
          <div className="sep reveal" />
          <p className="reveal" style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            {tx_.p1}
          </p>
          <p className="reveal" style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '2.5rem' }}>
            {tx_.p2}
          </p>
          <div className="reveal flex flex-wrap gap-2">
            {['Next.js', 'React', 'React Native', 'Laravel', 'PostgreSQL', 'Blender', 'Unity', 'After Effects', 'Figma'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Right - Stats */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {tx_.stats.map((s, i) => (
            <div key={i} className="glass" style={{ padding: '2rem 1.5rem', borderRadius: 8 }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: i % 2 === 0 ? '#00df81' : '#00b4d8', lineHeight: 1, marginBottom: '0.5rem' }}>
                {s.num}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
