"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Stethoscope,
  ShieldCheck,
  Activity,
  Bone,
  GraduationCap,
  Award,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUpRight,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

/* ---------- Design tokens ----------
Base:      #FFFFFF / #FAFAF9 (off-white)
Ink:       #14171B
Muted:     #5B6470
Line:      #E6E4DF
Accent:    #1F3B57 (azul discreto / "bata clínica")
Display:   Fraunces
Body:      Inter
------------------------------------ */

const WHATSAPP = "https://wa.link/jefn18";

const consultorios = [
  {
    nombre: "Hospital MAC",
    consultorio: "Consultorio 822 · Piso 8, Torre II",
    direccion: "Periférico Sur No. 5246, Col. Pedregal de Carrasco, Alc. Coyoacán, C.P. 04700, CDMX.",
    mapa: "Hospital MAC Periférico Sur 5246 Ciudad de México",
  },
  {
    nombre: "Hospital Ángeles Universidad",
    consultorio: "Consultorio 5010",
    direccion: "Avenida Universidad No. 1080, Col. Xoco, Alc. Benito Juárez, C.P. 03339, CDMX.",
    mapa: "Hospital Ángeles Universidad Avenida Universidad 1080 Ciudad de México",
  },
];

const IMG = {
  // Foto de stock temporal para la portada: entorno médico.
  hero: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2400&q=85",
  drCuadrado: "https://vende24siete.com/images/dr_cuadrado.jpg",
  logoWhite: "https://vende24siete.com/images/logo_doctor_white_png_.png",
  logoBlue: "https://vende24siete.com/images/logo_doctor_blue_png_.png",
  s1: "https://images.unsplash.com/photo-1539815208687-a0f05e15d601?auto=format&fit=crop&w=1200&q=80",
  s2: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1200&q=80",
  s3: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=80",
  s4: "https://images.unsplash.com/photo-1579154491781-5e199df316aa?auto=format&fit=crop&w=1200&q=80",
  s5: "https://images.unsplash.com/photo-1514416309827-bfb0cf433a2d?auto=format&fit=crop&w=1200&q=80",
  s6: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&q=80",
  p1: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1000&q=80",
  p2: "https://images.unsplash.com/photo-1640876777002-badf6aee5bcc?auto=format&fit=crop&w=1000&q=80",
  p3: "https://images.unsplash.com/photo-1685997180450-242a65624238?auto=format&fit=crop&w=1000&q=80",
  cta: "https://images.unsplash.com/photo-1579154491915-611e891d3a5b?auto=format&fit=crop&w=2000&q=80",
};

// Fotos de stock temporales para las tarjetas de padecimientos.
const padecimientos = [
  {
    icon: Bone,
    img: IMG.s1,
    title: "Enfermedades degenerativas de la columna",
    text: "Hernia de disco, estenosis y espondilolistesis. Dolor de espalda o cuello que baja a piernas o brazos. La mayoría mejora sin cirugía.",
  },
  {
    icon: Activity,
    img: IMG.s2,
    title: "Deformidades de la columna",
    text: "Escoliosis, cifosis y deformidad del adulto. Opero solo cuando avanza o empieza a limitar la vida diaria.",
  },
  {
    icon: Bone,
    img: IMG.p3,
    title: "Artrosis de rodilla, cadera y hombro",
    text: "Desgaste que trae dolor, rigidez y menos movimiento. Hay tratamiento en todas las etapas, no solo al final.",
  },
  {
    icon: ShieldCheck,
    img: IMG.p1,
    title: "Fracturas, esguinces y luxaciones",
    text: "Lesión reciente o que quedó mal resuelta. Atendida a tiempo, evita años de molestias.",
  },
  {
    icon: Activity,
    img: IMG.p2,
    title: "Lesiones de ligamentos y tendones",
    text: "Ligamento cruzado anterior, manguito rotador y tendón de Aquiles. Cuando la articulación se siente insegura, casi siempre hay reparación posible.",
  },
  {
    icon: Activity,
    img: IMG.s5,
    title: "Lesiones deportivas",
    text: "Meniscos, cartílago e inestabilidad de hombro y rodilla. El plan busca que vuelvas a entrenar sin recaídas.",
  },
  {
    icon: Bone,
    img: IMG.s3,
    title: "Desgaste de cartílago",
    text: "Detectarlo pronto cambia el pronóstico y conserva la articulación muchos años.",
  },
  {
    icon: Stethoscope,
    img: IMG.s4,
    title: "Infecciones de hueso y articulación",
    text: "Antibiótico y, si el caso lo exige, limpieza quirúrgica. Atenderlas pronto evita un daño permanente.",
  },
  {
    icon: Bone,
    img: IMG.s6,
    title: "Deformidades congénitas y adquiridas",
    text: "Corrección de alteraciones del hueso que limitan el movimiento, en niños y en adultos.",
  },
];

const procedimientos = [
  {
    title: "Columna",
    items: [
      "Cirugía de columna para tratar el dolor y recuperar la movilidad en enfermedad degenerativa y trauma.",
      "Cirugía de mínima invasión, percutánea o tubular.",
      "Microdiscectomía y descompresión de nervios.",
      "Fusión vertebral.",
      "Corrección de deformidades.",
      "Cirugía de fracturas de columna.",
    ],
  },
  {
    title: "Articulaciones",
    items: [
      "Reemplazo articular.",
      "Prótesis de rodilla, cadera y hombro.",
      "Artroscopía de rodilla, hombro, cadera y tobillo.",
      "Cirugía de codo, mano y muñeca.",
      "Reconstrucción de ligamentos (cruzado anterior).",
      "Reparación de tendones (manguito rotador, tendón de Aquiles).",
      "Cirugía de meniscos y cartílago.",
    ],
  },
  {
    title: "Trauma y reconstrucción",
    items: [
      "Cirugía de fracturas con placas, clavos y tornillos.",
      "Corrección de fracturas mal soldadas o no soldadas.",
      "Infecciones de hueso/articulación.",
      "Corrección de deformidades.",
      "Cirugía asistida por navegación y robótica.",
    ],
  },
  {
    title: "Tratamiento sin cirugía",
    items: [
      "Infiltraciones y bloqueos para el dolor.",
      "Manejo con medicamento.",
      "Inmovilización y férulas.",
      "Rehabilitación coordinada.",
    ],
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.9,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function DemoDrDiegoBuendia() {
  const privacyDialog = useRef<HTMLDialogElement>(null);
  const privacyTrigger = useRef<HTMLButtonElement>(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  useEffect(() => {
    if (!privacyOpen) return;
    const dialog = privacyDialog.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      privacyTrigger.current?.focus();
    };
  }, [privacyOpen]);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    "Inicio",
    "Biografía",
    "Padecimientos",
    "Procedimientos",
    "Consultorios",
    "Contacto",
  ];

  return (
    <div className="w-full min-h-screen relative bg-white text-ink font-sans selection:bg-accent selection:text-white">
      
      {/* WhatsApp Flotante (Glassmorphism) */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 p-3 sm:px-5 sm:py-3.5 rounded-full bg-white/70 backdrop-blur-md border border-white/40 shadow-2xl hover:bg-white/90 transition-all duration-300 group"
        aria-label="Contactar por WhatsApp"
      >
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white group-hover:scale-105 transition-transform duration-300">
          <MessageCircle size={20} />
          {/* Ping animation suave */}
          <span className="absolute inset-0 rounded-full bg-accent opacity-40 animate-ping"></span>
        </div>
        <span className="hidden sm:block text-accent font-medium text-[14px]">
          Atención rápida
        </span>
      </a>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 pt-4">
        <nav
          className="w-full max-w-6xl flex items-center justify-between rounded-full px-5 sm:px-7 py-3 transition-all duration-500 border"
          style={{
            background: scrolled
              ? "rgba(255,255,255,0.85)"
              : "rgba(255,255,255,0.15)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderColor: scrolled ? "#E6E4DF" : "rgba(255,255,255,0.2)",
            boxShadow: scrolled
              ? "0 8px 30px -12px rgba(20,23,27,0.12)"
              : "none",
          }}
        >
          <div className="flex items-center gap-3">
             <img src={IMG.logoBlue} alt="Logo" className={`h-8 w-auto transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 hidden sm:block'}`} />
             {!scrolled && (
                <span className="font-display text-[18px] text-white tracking-wide drop-shadow-md">
                  Dr. Diego Buendía
                </span>
             )}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className={`text-[13px] tracking-wide uppercase hover:opacity-60 transition-opacity font-medium ${scrolled ? 'text-ink' : 'text-white drop-shadow-md'}`}
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex items-center gap-1 rounded-full px-6 py-2.5 text-[13px] font-medium text-white bg-accent hover:bg-accent/90 transition-colors"
          >
            Agendar cita
          </a>

          <button
            className={`lg:hidden ${scrolled ? 'text-ink' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="lg:hidden absolute top-20 left-4 right-4 rounded-3xl p-6 flex flex-col gap-4 z-50 bg-white/95 backdrop-blur-xl border border-line shadow-2xl">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-ink"
              >
                {item}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="text-center rounded-full py-3.5 text-sm font-medium text-white bg-accent"
            >
              Agendar cita
            </a>
          </div>
        )}
      </header>

      {/* PORTADA (HERO) */}
      <section
        id="inicio"
        className="relative w-full min-h-screen flex items-end overflow-hidden bg-ink"
      >
        {/* Imagen de respaldo detrás del video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <img
            className="w-full h-full object-cover opacity-50"
            src={IMG.hero}
            alt=""
            fetchPriority="high"
          />
        </div>

        {/* El contenedor recorta el video 16:9 para cubrir la portada. */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ containerType: "size" }} aria-hidden="true">
          <iframe
            title="Video de fondo de la portada"
            src="https://www.youtube.com/embed/eH6Rl-GKjXw?autoplay=1&mute=1&loop=1&playlist=eH6Rl-GKjXw&controls=0&showinfo=0&rel=0&playsinline=1"
            allow="autoplay; encrypted-media"
            tabIndex={-1}
            className="absolute left-1/2 top-1/2 w-[max(100cqw,177.78cqh)] h-[max(100cqh,56.25cqw)] -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none"
          />
        </div>
        <div className="absolute inset-0 bg-slate-900/60 pointer-events-none" />

        {/* Gradients para asegurar la legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 pt-32 sm:pt-40 pb-16 sm:pb-20">
          <Reveal>
            <p className="text-[12px] sm:text-[13px] uppercase mb-5 text-white/80 tracking-[0.18em] font-medium">
              Ortopedia · Traumatología · Cirugía de columna — Ciudad de México
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1
              className="text-white leading-[1.02] font-display font-normal"
              style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", maxWidth: 900 }}
            >
              Si el dolor no cede,
              <br />
              hay que revisarlo.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-white/80 font-light">
              Un dolor que dura semanas rara vez se resuelve solo. Llevo más de
              veinte años atendiendo problemas de huesos, articulaciones y
              columna. Te escucho, reviso tu caso con calma y te explico qué está
              pasando.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white bg-accent hover:bg-accent/90 transition-colors"
              >
                Agendar consulta <ArrowUpRight size={16} />
              </a>
              <a
                href="#padecimientos"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white border border-white/35 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                Ver padecimientos
              </a>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              {[
                "Cirugía de mínima invasión",
                "Cirugía artroscópica",
                "Cirugía de reemplazo articular",
                "Cirugía asistida",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <div className="w-[5px] h-[5px] rounded-full bg-white" />
                  <span className="text-[13px] text-white/85 font-normal">
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECCIÓN BIOGRAFÍA (NUEVA) */}
      <section id="biografía" className="py-24 sm:py-36 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <Reveal>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl aspect-square">
              <img
                src={IMG.drCuadrado}
                alt="Dr. Diego Buendía en consulta"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-[12px] uppercase mb-4 text-accent tracking-[0.2em] font-semibold">
                Dr. Diego Eduardo Buendía Valdez
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display font-normal text-[clamp(2rem,4vw,3rem)] leading-tight text-ink">
                Mi propósito es mejorar tu calidad de vida.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-col gap-5 text-[16px] leading-relaxed text-muted font-light">
                <p>
                  Soy Diego Buendía, ortopedista y cirujano de columna. Estudié
                  Medicina en la UNAM, donde también hice la especialidad en
                  Ortopedia y la alta especialidad en Cirugía de Columna.
                  Completé mi formación en cirugía de columna en el IMSS.
                </p>
                <p>
                  Un problema de movilidad no se queda en el consultorio. Cansa,
                  desanima y pesa también en quien te acompaña. Por eso el
                  tratamiento lo decidimos juntos, con tiempos reales y sin
                  promesas de más.
                </p>
                <p className="text-ink font-medium">
                  Trabajo con un equipo de expertos que te acompaña desde la
                  primera consulta hasta que vuelves a tu rutina.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <ul className="mt-8 space-y-4 border-t border-line pt-6 text-[14px] leading-relaxed text-muted">
                <li className="flex items-start gap-3">
                  <ShieldCheck size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>Certificación del Consejo Mexicano de Ortopedia y Traumatología.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>Miembro de la North American Spine Society.</span>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>Maestría en Bioética y maestría en Administración de Instituciones de Salud.</span>
                </li>
              </ul>
               <img src={IMG.logoBlue} alt="Firma Dr. Buendía" className="h-12 w-auto mt-10 opacity-80" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* PADECIMIENTOS */}
      <section
        id="padecimientos"
        className="relative py-24 sm:py-32 px-6 sm:px-8 bg-off"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <Reveal>
                <p className="text-[12px] uppercase mb-4 text-accent tracking-[0.18em] font-semibold">
                  Áreas de atención
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-display font-normal max-w-xl text-[clamp(1.9rem,3.6vw,3rem)] leading-tight">
                  Padecimientos que atiendo.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200}>
               <p className="max-w-md text-muted font-light text-[15px]">
                 Cuando algo duele o deja de moverse, la incertidumbre pesa tanto como la molestia. Casi todo lo que ves aquí tiene tratamiento.
               </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {padecimientos.map((e, i) => (
              <Reveal key={e.title} delay={i * 90}>
                <div className="group rounded-[2rem] overflow-hidden h-full flex flex-col bg-white border border-line hover:shadow-xl transition-all duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={e.img}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                    <div className="absolute bottom-5 left-5 flex items-center justify-center rounded-full w-12 h-12 bg-white/95 shadow-sm">
                      <e.icon size={22} className="text-accent" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-[18px] mb-3 font-display font-medium text-ink">
                      {e.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-muted font-light">
                      {e.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCEDIMIENTOS */}
      <section id="procedimientos" className="py-24 sm:py-32 px-6 sm:px-8 bg-off">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[12px] uppercase mb-4 text-accent tracking-[0.18em] font-semibold text-center">
              Procedimientos
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display font-normal text-[clamp(1.9rem,3.6vw,3rem)] text-center max-w-2xl mx-auto">
              Cirugías y tratamientos que realizo.
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 mb-12 max-w-2xl mx-auto text-center text-[16px] leading-relaxed text-muted font-light">
              No toda lesión necesita cirugía, y te lo diré con honestidad.
              Cuando sí hace falta, prefiero las técnicas de mínima invasión,
              con menos dolor y una recuperación más corta.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {procedimientos.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="h-full rounded-[2rem] border border-transparent bg-white p-6 sm:p-8 shadow-sm hover:scale-[1.02] hover:shadow-md hover:border-blue-200 transition-all duration-300 motion-reduce:transform-none motion-reduce:transition-none">
                  <h3 className="text-[24px] mb-6 font-sans font-bold text-accent">
                    {p.title}
                  </h3>
                  <ul className="space-y-4 text-[15px] leading-relaxed text-muted font-light">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <ChevronRight size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTORIOS */}
      <section id="consultorios" className="scroll-mt-28 py-24 sm:py-32 px-6 sm:px-8 bg-off">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[12px] uppercase mb-4 text-accent tracking-[0.18em] font-semibold">Consultorios</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] mb-12">Dónde te atiendo.</h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {consultorios.map((consultorio, i) => (
              <Reveal key={consultorio.nombre} delay={i * 100}>
                <article className="h-full flex flex-col overflow-hidden rounded-[2rem] border border-line bg-white">
                  <div className="p-6 sm:p-8 flex-1">
                    <h3 className="font-display text-2xl text-accent">{consultorio.nombre}</h3>
                    <p className="mt-3 font-medium">{consultorio.consultorio}</p>
                    <address className="mt-3 text-muted text-[15px] leading-relaxed not-italic">{consultorio.direccion}</address>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(consultorio.mapa)}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent underline underline-offset-4">
                      Abrir en Google Maps <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                  <iframe
                    title={`Mapa de ${consultorio.nombre}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(consultorio.mapa)}&output=embed`}
                    className="w-full h-72 border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO Y LLAMADA A LA ACCIÓN */}
      <section id="contacto" className="relative isolate overflow-hidden scroll-mt-28 py-20 sm:py-28 px-6 sm:px-8 bg-accent text-white">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <img src={IMG.cta} alt="" loading="lazy" className="w-full h-full object-cover mix-blend-overlay opacity-20" />
        </div>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="font-display font-normal text-[clamp(2rem,4.5vw,3.8rem)] leading-tight">Da el primer paso hacia una vida sin dolor.</h2>
              <p className="mt-6 text-[16px] sm:text-[18px] text-white/80 font-light max-w-2xl mx-auto">Agenda tu consulta hoy mismo y diseñemos juntos el plan de tratamiento adecuado para ti.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 hover:-translate-y-1 hover:shadow-xl hover:bg-white/[0.15] hover:border-white/40 focus-within:shadow-xl transition-all duration-300 motion-reduce:transform-none motion-reduce:transition-none">
              <Phone size={24} aria-hidden="true" />
              <h3 className="font-display text-2xl mt-5 mb-4">Citas</h3>
              <a href="tel:+525551996805" className="block w-fit py-2 underline underline-offset-4">55 5199 6805</a>
              <a href="tel:+525543307969" className="block w-fit py-2 underline underline-offset-4">55 4330 7969</a>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 hover:-translate-y-1 hover:shadow-xl hover:bg-white/[0.15] hover:border-white/40 focus-within:shadow-xl transition-all duration-300 motion-reduce:transform-none motion-reduce:transition-none">
              <MessageCircle size={24} aria-hidden="true" />
              <h3 className="font-display text-2xl mt-5 mb-4">Urgencias</h3>
              <p>55 1048 9471</p>
              <a href="https://wa.me/525510489471" target="_blank" rel="noreferrer" className="inline-flex mt-5 rounded-full bg-white text-accent px-5 py-3 text-sm font-medium">Escribir por WhatsApp</a>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 hover:-translate-y-1 hover:shadow-xl hover:bg-white/[0.15] hover:border-white/40 focus-within:shadow-xl transition-all duration-300 motion-reduce:transform-none motion-reduce:transition-none min-w-0">
              <ArrowUpRight size={24} aria-hidden="true" />
              <h3 className="font-display text-2xl mt-5 mb-4">Correo</h3>
              <p className="break-words">drdiegobuendia@gmail.com</p>
              <a href="mailto:drdiegobuendia@gmail.com" className="inline-flex mt-5 rounded-full bg-white text-accent px-5 py-3 text-sm font-medium">Enviar correo</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 sm:px-8 pt-20 pb-10 bg-ink text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <img src={IMG.logoWhite} alt="Dr. Diego Buendía Logo" className="h-12 w-auto mb-6" />
            <p className="text-[14px] text-white/60 font-light leading-relaxed mb-8">
              Especialista en Ortopedia, Traumatología y Cirugía de Columna. Devolviendo movilidad y calidad de vida con un enfoque humano y tecnología de punta.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white/80"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white/80"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white/80"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Nav Col */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[12px] uppercase tracking-[0.15em] text-white/40 mb-6 font-semibold">Navegación</h4>
            <ul className="flex flex-col gap-4 text-[14px] text-white/70 font-light">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#biografía" className="hover:text-white transition-colors">Sobre el Doctor</a></li>
              <li><a href="#padecimientos" className="hover:text-white transition-colors">Padecimientos</a></li>
              <li><a href="#procedimientos" className="hover:text-white transition-colors">Procedimientos</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4 lg:col-start-9">
            <h4 className="text-[12px] uppercase tracking-[0.15em] text-white/40 mb-6 font-semibold">Contacto y Citas</h4>
            <div className="flex flex-col gap-5 text-[14px] text-white/70 font-light">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-white/40 mt-0.5" />
                <div>
                  <p className="text-white font-medium mb-1">Consultorio</p>
                  <a href="tel:+525551996805" className="block">55 5199 6805</a>
                  <a href="tel:+525543307969" className="block">55 4330 7969</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Activity size={18} className="text-white/40 mt-0.5" />
                <div>
                  <p className="text-white font-medium mb-1">Urgencias</p>
                  <a href="https://wa.me/525510489471" target="_blank" rel="noreferrer">55 1048 9471</a>
                </div>
              </div>
              <a 
                href={WHATSAPP} 
                target="_blank" 
                rel="noreferrer"
                className="mt-2 inline-block text-center rounded-full py-3 px-6 text-sm font-medium text-ink bg-white hover:bg-white/90 transition-colors w-fit"
              >
                Escribir mensaje
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] text-white/40 font-light">
          <p>© {new Date().getFullYear()} Dr. Diego Buendía. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <button ref={privacyTrigger} type="button" onClick={() => setPrivacyOpen(true)} aria-haspopup="dialog" className="hover:text-white transition-colors underline underline-offset-4">Aviso de Privacidad</button>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </footer>

      <dialog
        ref={privacyDialog}
        aria-labelledby="privacy-title"
        onCancel={() => setPrivacyOpen(false)}
        onClose={() => setPrivacyOpen(false)}
        className="m-auto w-[calc(100%-2rem)] max-w-2xl max-h-[85dvh] overflow-y-auto rounded-3xl p-0 bg-white text-ink shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      >
        <div className="sticky top-0 flex items-center justify-between gap-4 border-b border-line bg-white px-6 py-5">
          <h2 id="privacy-title" className="font-display text-2xl">Aviso de Privacidad</h2>
          <button type="button" autoFocus onClick={() => setPrivacyOpen(false)} aria-label="Cerrar aviso de privacidad" className="rounded-full p-3 hover:bg-off focus-visible:outline-accent">
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <div className="p-6 sm:p-8 space-y-5 text-[15px] leading-relaxed text-muted">
          <p><strong className="text-ink">Responsable:</strong> El Dr. Diego Eduardo Buendía Valdez, con consultorio en Periférico Sur 5246, Coyoacán, CDMX.</p>
          <p><strong className="text-ink">Datos recabados:</strong> Para agendar cita y atención médica (nombre, teléfono, correo) y datos sensibles de salud.</p>
          <p><strong className="text-ink">Uso:</strong> Expediente clínico, diagnóstico, tratamiento y contacto.</p>
          <p><strong className="text-ink">Con quién se comparten:</strong> Hospitales, autoridades sanitarias y aseguradoras a petición del paciente.</p>
          <p><strong className="text-ink">Tus derechos (ARCO):</strong> Solicitar corrección o eliminación al correo <a href="mailto:drdiegobuendia@gmail.com" className="break-words underline">drdiegobuendia@gmail.com</a> o teléfono <a href="tel:+525551996805" className="underline">55 5199 6805</a>.</p>
          <p><strong className="text-ink">Uso de cookies:</strong> Este sitio usa cookies de medición; puedes deshabilitarlas en tu navegador.</p>
        </div>
      </dialog>
    </div>
  );
}
