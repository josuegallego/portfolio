'use client';
import { useEffect, useRef } from 'react';
import { useLang } from '@/context/LangContext';

// ─── INSTRUCCIONES PARA IMÁGENES ────────────────────────────────────────────
// Guarda tus screenshots en /public/projects/ con los nombres indicados.
// Tamaño recomendado: 900×500 px (ratio 16:9).
// Mientras no exista el archivo, se muestra un placeholder animado.
// ────────────────────────────────────────────────────────────────────────────

const projects = {
  es: [
    {
      num: '01',
      title: 'BarberSaaS — Panel de Barbería',
      desc: 'Dashboard administrativo full-stack para gestión de barbería. Backend Laravel 13 + PostgreSQL con API RESTful y autenticación Sanctum. Frontend React + Vite con diseño dark glassmorphism, módulos de citas, clientes y servicios.',
      tags: ['Laravel', 'React', 'PostgreSQL'],
      color: '#00df81',
      link: 'https://github.com/josuegallego/dashboard-barberia',
      image: '/projects/barber-saas.png',
      live: 'https://dashboard-barberia.vercel.app/',
    },
    {
      num: '02',
      title: 'Cali Turismo — App de Turismo',
      desc: 'Aplicación web de turismo para Santiago de Cali con mapa interactivo Leaflet, galería de fotos por atracción, filtros por categoría y panel de detalles. Construida con Next.js 15, Tailwind CSS y shadcn/ui.',
      tags: ['Next.js', 'TypeScript', 'Leaflet'],
      color: '#00b4d8',
      link: 'https://github.com/josuegallego/Cali-Turismo',
      image: '/projects/cali-turismo.png',
      live: 'https://cali-turismo.vercel.app/',
    },
    {
      num: '03',
      title: 'Jussi Pizza — Web + App de Pedidos',
      desc: 'Sitio web y PWA para pizzería local en Jamundí. Carrusel de galería, mapa de sedes, flujo completo de pedido (pizza/bebidas/lasaña), cálculo de domicilio por barrio y checkout directo por WhatsApp.',
      tags: ['Next.js', 'React', 'WhatsApp API'],
      color: '#00df81',
      link: 'https://github.com/josuegallego/JussiPizza',
      image: '/projects/jussi-pizza.png',
      live: 'https://jussipizza.com/',
    },
    {
      num: '04',
      title: 'Mobile Wallet — App Financiera',
      desc: 'App móvil multiplataforma de billetera personal. Registro e inicio de sesión con Clerk: autenticación OAuth, creación de cuenta con verificación por código de email. Transacciones por categoría, resumen de ingresos/gastos y sincronización con API REST en Express + Neon PostgreSQL.',
      tags: ['React Native', 'Expo', 'Clerk', 'PostgreSQL'],
      color: '#00b4d8',
      link: 'https://github.com/josuegallego/react-native-wallet',
      image: '/projects/mobile-wallet.png',
      live: 'https://youtu.be/WfUSwv-mPHc',
    },
    {
      num: '05',
      title: 'Video Interactivo — Reto Narrativo',
      desc: 'Experiencia de video interactivo con árbol de decisiones de 11 ramas. El espectador elige el rumbo de la historia en tiempo real mediante un controlador de estados personalizado en JavaScript vanilla.',
      tags: ['JavaScript', 'HTML5 Video', 'CSS3', 'Pro Tools', 'Adobe Premiere and After Effects'],
      color: '#00df81',
      link: 'https://github.com/josuegallego/video-interactivo-uao',
      image: '/projects/video-interactivo.png',
      live: 'https://video-interactivo-uao.vercel.app/',
    },
    {
      num: '06',
      title: 'ARtmosphere Interactive — Portafolio AR/VR',
      desc: 'Sitio web de portafolio para empresa especializada en experiencias de Realidad Aumentada y Realidad Virtual. Exhibe proyectos de AR para empresas (advergames, tarjetas de presentación AR, apps educativas) y servicios inmersivos a medida. Incluye quiz interactivo como demo de producto.',
      tags: ['AR/VR', 'JavaScript', 'Advergames'],
      color: '#00b4d8',
      link: 'https://github.com/josuegallego/ARtmosphere',
      image: '/projects/artmosphere-quiz.png',
      live: 'https://a-rtmosphere.vercel.app/',
    },
  ],
  en: [
    {
      num: '01',
      title: 'BarberSaaS — Barbershop Dashboard',
      desc: 'Full-stack admin dashboard for barbershop management. Laravel 13 + PostgreSQL RESTful API with Sanctum auth. React + Vite frontend with dark glassmorphism design, and appointments, clients, and services modules.',
      tags: ['Laravel', 'React', 'PostgreSQL'],
      color: '#00df81',
      link: 'https://github.com/josuegallego/dashboard-barberia',
      image: '/projects/barber-saas.png',
      live: 'https://dashboard-barberia.vercel.app/',
    },
    {
      num: '02',
      title: 'Cali Turismo — Tourism App',
      desc: 'Tourism web app for Santiago de Cali with an interactive Leaflet map, per-attraction photo gallery, category filters, and a details panel. Built with Next.js 15, Tailwind CSS, and shadcn/ui.',
      tags: ['Next.js', 'TypeScript', 'Leaflet'],
      color: '#00b4d8',
      link: 'https://github.com/josuegallego/Cali-Turismo',
      image: '/projects/cali-turismo.png',
      live: 'https://cali-turismo.vercel.app/',
    },
    {
      num: '03',
      title: 'Jussi Pizza — Website + Order App',
      desc: 'Website and PWA for a local pizzeria in Jamundí. Gallery carousel, store map, full order flow (pizza/drinks/lasagna), neighborhood delivery cost calculator, and direct WhatsApp checkout.',
      tags: ['Next.js', 'React', 'WhatsApp API'],
      color: '#00df81',
      link: 'https://github.com/josuegallego/JussiPizza',
      image: '/projects/jussi-pizza.png',
      live: 'https://jussipizza.com/',
    },
    {
      num: '04',
      title: 'Mobile Wallet — Finance App',
      desc: 'Cross-platform personal wallet app. Sign-up and login powered by Clerk: OAuth auth and account creation with email verification code. Category-based transaction tracking, income/expense summary, and sync with a REST API backed by Express + Neon PostgreSQL.',
      tags: ['React Native', 'Expo', 'Clerk', 'PostgreSQL'],
      color: '#00b4d8',
      link: 'https://github.com/josuegallego/react-native-wallet',
      image: '/projects/mobile-wallet.png',
      live: null,
    },
    {
      num: '05',
      title: 'Interactive Video — Narrative Challenge',
      desc: '11-branch interactive video decision tree where the viewer shapes the story in real time. Built in vanilla JavaScript with a custom state controller and the HTML5 video API.',
      tags: ['JavaScript', 'HTML5 Video', 'CSS3'],
      color: '#00df81',
      link: 'https://github.com/josuegallego/video-interactivo-uao',
      image: '/projects/video-interactivo.png',
      live: 'https://video-interactivo-uao.vercel.app/',
    },
    {
      num: '06',
      title: 'ARtmosphere Interactive — AR/VR Portfolio',
      desc: 'Portfolio website for a company specializing in Augmented and Virtual Reality experiences. Showcases AR projects for businesses (advergames, AR business cards, educational apps) and custom immersive services. Includes an interactive quiz as a product demo.',
      tags: ['AR/VR', 'JavaScript', 'Advergames'],
      color: '#00b4d8',
      link: 'https://github.com/josuegallego/ARtmosphere',
      image: '/projects/artmosphere-quiz.png',
      live: 'https://a-rtmosphere.vercel.app/',
    },
  ],
};

const tx = {
  es: {
    num: '03',
    section: 'Proyectos',
    heading: 'Algunas cosas que he',
    accent: 'construido',
    sub: 'Un registro de proyectos donde la creatividad se encuentra con la ingeniería.',
    codeLabel: 'Código',
    liveLabel: 'Ver en vivo',
    imgAlt: 'Screenshot del proyecto',
    imgPlaceholder: 'Imagen próximamente',
  },
  en: {
    num: '03',
    section: 'Projects',
    heading: 'Some things I have',
    accent: 'built',
    sub: 'A record of projects where creativity meets engineering.',
    codeLabel: 'Code',
    liveLabel: 'Live demo',
    imgAlt: 'Project screenshot',
    imgPlaceholder: 'Image coming soon',
  },
};

const imageStyles = `
  .proj-img-wrap {
    position: relative;
    width: calc(100% + 5rem);
    height: 200px;
    border-radius: 6px 6px 0 0;
    overflow: hidden;
    margin: -2.5rem -2.5rem 1.75rem -2.5rem;
  }
  .proj-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
    filter: brightness(0.85) saturate(0.9);
  }
  .project-card:hover .proj-img-wrap img {
    transform: scale(1.04);
    filter: brightness(1) saturate(1.1);
  }
  .proj-img-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.07) 100%);
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .proj-img-placeholder span {
    font-family: 'Space Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.12em;
    opacity: 0.35;
  }
  .proj-img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 40%, rgba(10,15,20,0.75) 100%);
    pointer-events: none;
  }
  .proj-actions {
    display: flex;
    gap: 0.75rem;
    margin-top: 1.5rem;
    padding-top: 1.25rem;
    border-top: 1px solid rgba(255,255,255,0.06);
  }
  .proj-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.45rem 0.9rem;
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
  }
  .proj-btn-code {
    border: 1px solid rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.55);
    background: transparent;
  }
  .proj-btn-code:hover {
    border-color: rgba(255,255,255,0.25);
    color: rgba(255,255,255,0.85);
    background: rgba(255,255,255,0.04);
  }
  .proj-btn-live {
    border: 1px solid;
    background: transparent;
  }
  .proj-btn-live:hover {
    background: currentColor;
  }
  .proj-btn-live:hover span {
    color: #0a0f14 !important;
  }
`;

function ProjectImage({
  src,
  alt,
  color,
  placeholder,
}: {
  src: string;
  alt: string;
  color: string;
  placeholder: string;
}) {
  return (
    <div className="proj-img-wrap">
      <img
        src={src}
        alt={alt}
        onError={(e) => {
          const wrap = (e.target as HTMLElement).parentElement!;
          (e.target as HTMLElement).style.display = 'none';
          const ph = wrap.querySelector('.proj-img-placeholder') as HTMLElement;
          if (ph) ph.style.display = 'flex';
        }}
      />
      <div className="proj-img-placeholder" style={{ display: 'none' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1" opacity="0.3">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span style={{ color }}>{placeholder}</span>
      </div>
      <div className="proj-img-overlay" />
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const { lang } = useLang();

  useEffect(() => {
    if (!document.getElementById('projects-styles')) {
      const style = document.createElement('style');
      style.id = 'projects-styles';
      style.textContent = imageStyles;
      document.head.appendChild(style);
    }
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const tx_ = tx[lang];
  const ps = projects[lang];

  return (
    <section id="projects" ref={ref} style={{ padding: 'clamp(80px, 10vw, 120px) clamp(1.5rem, 5vw, 4rem)', position: 'relative' }}>
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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '1.5rem' }}>
          {ps.map((p) => (
            <div
              key={p.num}
              className="reveal project-card glass"
              style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem', borderRadius: 8, overflow: 'hidden', position: 'relative' }}
            >
              <ProjectImage src={p.image} alt={`${p.title} — ${tx_.imgAlt}`} color={p.color} placeholder={tx_.imgPlaceholder} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: p.color, letterSpacing: '0.1em' }}>{p.num}</span>
                <a
                  href={p.link} target="_blank" rel="noopener noreferrer" aria-label="Ver repositorio"
                  style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = p.color)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--muted)')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ transform: 'rotate(-45deg)' }}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                {p.title}
              </h3>

              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem', flexGrow: 1 }}>
                {p.desc}
              </p>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {p.tags.map((t) => (
                  <span key={t} className="tag" style={{ borderColor: `${p.color}40`, color: p.color }}>{t}</span>
                ))}
              </div>

              <div className="proj-actions">
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="proj-btn proj-btn-code">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  {tx_.codeLabel}
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-btn proj-btn-live" style={{ borderColor: `${p.color}60`, color: p.color }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    <span style={{ color: p.color }}>{tx_.liveLabel}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}