import { notFound } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Building2,
  Factory,
  Gauge,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { prospects, prospectSlugs } from "../../lib/prospects";

export function generateStaticParams() {
  return prospectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = prospects[slug];
  if (!data) return {};
  return {
    title: `${data.company} — propuesta de rediseño`,
    description: `Preview conceptual de rediseño web para ${data.company}, desarrollado por NexoDG.`,
    robots: { index: false, follow: false },
  };
}

function Logo({ data }) {
  return (
    <div className="brand">
      <span className="brand-symbol" aria-hidden="true">
        <i />
        <b />
      </span>
      <span>
        <strong>{data.short}</strong>
        <small>{data.descriptor}</small>
      </span>
    </div>
  );
}

function Visual({ data, variant = "hero" }) {
  return (
    <div className={`industrial-visual ${variant} visual-${data.slug}`} aria-hidden="true">
      <span className="visual-grid" />
      <span className="visual-glow" />
      <span className="shape shape-a" />
      <span className="shape shape-b" />
      <span className="shape shape-c" />
      <span className="shape shape-d" />
    </div>
  );
}

export default async function ProspectPage({ params }) {
  const { slug } = await params;
  const data = prospects[slug];
  if (!data) notFound();

  return (
    <main className={`preview theme-${data.theme}`}>
      <div className="concept-bar">
        <span><Sparkles size={14} /> Propuesta conceptual de rediseño</span>
        <span>Desarrollada por NexoDG</span>
      </div>

      <header className="site-header">
        <Logo data={data} />
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#empresa">Empresa</a>
          <a href="#soluciones">Soluciones</a>
          <a href="#capacidades">Capacidades</a>
          <a href="#sectores">Sectores</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <button className="menu-button" aria-label="Abrir menú"><Menu size={22} /></button>
      </header>

      <section className="hero" id="empresa">
        <Visual data={data} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">{data.eyebrow}</p>
          <h1>{data.title}</h1>
          <p className="hero-copy">{data.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#contacto">
              {data.primaryCta} <ArrowRight size={17} />
            </a>
            <a className="button secondary" href="#capacidades">{data.secondaryCta}</a>
          </div>
          <div className="hero-stats">
            {data.stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-pair" id="soluciones">
        {data.features.map(([label, title, copy], index) => (
          <article className="feature-card" key={title}>
            <div className="feature-art">
              <Visual data={data} variant={index === 0 ? "detail-a" : "detail-b"} />
              <span className="feature-number">0{index + 1}</span>
            </div>
            <div className="feature-body">
              <p className="section-kicker">{label}</p>
              <h2>{title}</h2>
              <p>{copy}</p>
              <a href="#contacto">Conocé más <ArrowRight size={15} /></a>
            </div>
          </article>
        ))}
      </section>

      <section className="section shell" id="capacidades">
        <div className="section-heading">
          <div>
            <p className="section-kicker">CAPACIDADES</p>
            <h2>Una web que explica mejor el valor de la empresa</h2>
          </div>
          <p>
            La propuesta reorganiza la información para que un potencial cliente
            entienda en pocos segundos qué hace la empresa, para quién trabaja y
            cómo iniciar una consulta.
          </p>
        </div>

        <div className="capability-grid">
          {data.capabilities.map(([title, copy], index) => {
            const icons = [Factory, Gauge, Wrench, ShieldCheck];
            const Icon = icons[index % icons.length];
            return (
              <article className="capability-card" key={title}>
                <div className="icon-box"><Icon size={24} /></div>
                <span className="card-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <a href="#contacto">Ver solución <ArrowRight size={14} /></a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="process-band">
        <div className="process-copy">
          <p className="section-kicker">PRESENCIA INDUSTRIAL 2026</p>
          <h2>Más claridad, más confianza, mejor conversión.</h2>
          <p>
            Diseño responsive, jerarquía de contenidos, contacto visible,
            presentación de capacidades y una estética alineada al nivel real de
            la compañía.
          </p>
        </div>
        <div className="process-points">
          <span><BadgeCheck size={20} /> Arquitectura comercial</span>
          <span><Boxes size={20} /> Catálogo y servicios ordenados</span>
          <span><Building2 size={20} /> Escala e infraestructura visibles</span>
        </div>
      </section>

      <section className="section shell" id="sectores">
        <div className="section-heading compact">
          <div>
            <p className="section-kicker">MERCADOS</p>
            <h2>Sectores y clientes</h2>
          </div>
        </div>
        <div className="sector-row">
          {data.sectors.map((sector) => <span key={sector}>{sector}</span>)}
        </div>
      </section>

      <section className="trust-grid shell">
        {data.trust.map(([title, copy], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <section className="cta-section" id="contacto">
        <div>
          <p className="section-kicker">HABLEMOS DE UN PROYECTO</p>
          <h2>Una presencia digital a la altura de la empresa.</h2>
          <p>
            Esta pieza es un concepto inicial. El desarrollo definitivo puede
            adaptarse al contenido, catálogo, fotografías y objetivos comerciales
            reales de {data.company}.
          </p>
        </div>
        <div className="contact-card">
          <Logo data={data} />
          <a href={`mailto:${data.email}`}><Mail size={18} /> {data.email}</a>
          <span><Phone size={18} /> {data.phone}</span>
          <span><MapPin size={18} /> {data.location}</span>
          <a className="button primary full" href={`mailto:${data.email}`}>
            Iniciar conversación <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <Logo data={data} />
        <p>
          Preview conceptual · La información institucional fue reorganizada con
          fines de demostración. No es el sitio oficial de {data.company}.
        </p>
        <a href={data.original} target="_blank" rel="noreferrer">
          Ver sitio actual <ArrowRight size={14} />
        </a>
      </footer>
    </main>
  );
}
