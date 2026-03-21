'use client';
import { useEffect, useRef } from 'react';
import { useLang } from '@/context/LangContext';

const skills = [
  // Frontend
  { name: 'React / Next.js', level: 0.75, cat: 'Frontend' },
  { name: 'JavaScript / TypeScript', level: 0.80, cat: 'Frontend' },
  { name: 'HTML / CSS / Tailwind', level: 0.90, cat: 'Frontend' },
  { name: 'React Native', level: 0.68, cat: 'Frontend' },
  // Backend
  { name: 'Laravel / PHP', level: 0.60, cat: 'Backend' },
  { name: 'Node.js / Express', level: 0.68, cat: 'Backend' },
  { name: 'PostgreSQL', level: 0.62, cat: 'Backend' },
  { name: 'MySQL', level: 0.55, cat: 'Backend' },
  // 3D & Motion
  { name: 'Blender 3D', level: 0.70, cat: '3D & Motion' },
  { name: 'After Effects', level: 0.75, cat: '3D & Motion' },
  { name: 'Unity', level: 0.90, cat: '3D & Motion' },
  { name: 'Spline / Three.js', level: 0.65, cat: '3D & Motion' },
  // Design & Tools
  { name: 'Figma / UI Design', level: 0.80, cat: 'Design & Tools' },
  { name: 'Git / GitHub', level: 0.85, cat: 'Design & Tools' },
  { name: 'Pro Tools', level: 0.92, cat: 'Design & Tools' },
  { name: 'Postman / REST APIs', level: 0.68, cat: 'Design & Tools' },
];

const categories = ['Frontend', 'Backend', '3D & Motion', 'Design & Tools'];

const marqueeItems = [
  'React', 'Next.js', 'React Native',
  'Laravel', 'Node.js', 'PostgreSQL', 'MySQL', 'Blender',
  'Unity', 'After Effects', 'Figma', 'Git', 'Pro Tools', 'Spline',
];

const tx = {
  es: { num: '02', label: 'Skills', heading: 'Herramientas de mi', accent: 'arsenal creativo' },
  en: { num: '02', label: 'Skills', heading: 'Tools in my', accent: 'creative arsenal' },
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const { lang } = useLang();

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          e.target.querySelectorAll('.skill-bar-fill').forEach((bar: Element) => {
            (bar as HTMLElement).classList.add('animate');
          });
        }
      });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const tx_ = tx[lang];

  return (
    <section id="skills" ref={ref} style={{ padding: 'clamp(80px, 10vw, 120px) clamp(1.5rem, 5vw, 4rem)', position: 'relative' }}>
      <div className="grad-blob" style={{ width: 400, height: 400, background: 'rgba(124,92,191,0.10)', bottom: 0, left: '-5%' }} />

      {/* Marquee */}
      <div style={{ overflow: 'hidden', marginBottom: '80px', opacity: 0.3 }}>
        <div className="marquee-track" style={{ gap: '3rem' }}>
          {[...marqueeItems, ...marqueeItems].map((t, i) => (
            <span key={i} style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', whiteSpace: 'nowrap', letterSpacing: '0.05em' }}>
              {t} <span style={{ color: 'var(--accent)', marginLeft: '1rem' }}>·</span>
            </span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-num" style={{ marginBottom: '1rem' }}>{tx_.num} — {tx_.label}</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.1 }}>
            {tx_.heading}<br />
            <span style={{ color: 'var(--accent)' }}>{tx_.accent}</span>
          </h2>
          <div className="sep" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: '2rem' }}>
          {categories.map(cat => {
            const catSkills = skills.filter(s => s.cat === cat);
            return (
              <div key={cat} className="reveal glass" style={{ padding: '2rem', borderRadius: 8 }}>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                  {cat}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {catSkills.map(skill => (
                    <div key={skill.name}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{skill.name}</span>
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: 'var(--muted)' }}>
                          {Math.round(skill.level * 100)}%
                        </span>
                      </div>
                      <div className="skill-bar-bg">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${skill.level * 100}%`, transitionDelay: `${catSkills.indexOf(skill) * 0.1}s` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
