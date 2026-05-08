/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  ArrowRight,
  ArrowUp,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Cloud,
  HeadphonesIcon,
  Server,
  Lightbulb,
  DatabaseBackup,
  Clock,
  Lock,
  Zap,
  Sparkles,
  Quote,
  CheckCircle2,
  Users,
  Send,
  PhoneCall,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Brand mark                                                                */
/* -------------------------------------------------------------------------- */

const Logo = ({ inverted = false }: { inverted?: boolean }) => (
  <a href="#home" data-testid="logo-link" className="flex items-center gap-2.5 group">
    <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#D90429] shadow-red-glow group-hover:scale-105 transition-transform">
      <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FF1A3F] to-[#B30321]" />
      <span className="relative font-display font-extrabold text-white text-xl italic tracking-tight">N</span>
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-1 rounded-full bg-white/40 blur-[1px]" />
    </span>
    <span className="flex flex-col leading-none">
      <span
        className={`font-display font-bold text-[17px] tracking-tight ${
          inverted ? 'text-white' : 'text-[#1D3557]'
        }`}
      >
        Nivara<span className="text-[#D90429]">.</span>
      </span>
      <span
        className={`text-[10px] uppercase tracking-[0.22em] font-semibold mt-0.5 ${
          inverted ? 'text-white/50' : 'text-[#4B5563]/70'
        }`}
      >
        Digital peace of mind
      </span>
    </span>
  </a>
);

/* -------------------------------------------------------------------------- */
/*  Reusable red wave SVG                                                     */
/* -------------------------------------------------------------------------- */

const RedWaveBackdrop = () => (
  <svg
    viewBox="0 0 1440 600"
    fill="none"
    preserveAspectRatio="none"
    className="absolute inset-0 w-full h-full pointer-events-none"
    aria-hidden
  >
    <defs>
      <linearGradient id="waveA" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#D90429" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#FF3354" stopOpacity="0.85" />
      </linearGradient>
      <linearGradient id="waveB" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#1D3557" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#1D3557" stopOpacity="0.5" />
      </linearGradient>
    </defs>
    {/* Soft red ribbon top-right */}
    <path
      d="M1440 0 L1440 220 C1240 260, 1080 120, 880 180 C700 234, 600 340, 380 290 C200 248, 80 350, 0 320 L0 0 Z"
      fill="url(#waveA)"
      opacity="0.08"
    />
    {/* Bottom big red curve */}
    <path
      d="M0 540 C220 420, 460 600, 740 500 C980 414, 1180 540, 1440 460 L1440 600 L0 600 Z"
      fill="url(#waveA)"
      opacity="0.13"
    />
    {/* Mid navy curve */}
    <path
      d="M0 380 C260 320, 480 460, 760 420 C1000 386, 1220 460, 1440 410 L1440 440 C1180 500, 980 410, 760 460 C480 506, 260 360, 0 420 Z"
      fill="url(#waveB)"
      opacity="0.05"
    />
  </svg>
);

/* Ribbon SVG (organic flowing ribbon used at section dividers + hero corner) */
const RedRibbon = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 800 200"
    fill="none"
    preserveAspectRatio="none"
    className={className}
    aria-hidden
  >
    <defs>
      <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#FF3354" />
        <stop offset="60%" stopColor="#D90429" />
        <stop offset="100%" stopColor="#B30321" />
      </linearGradient>
    </defs>
    <path
      d="M0 120 C150 40, 320 180, 500 110 C660 50, 760 140, 800 90 L800 200 L0 200 Z"
      fill="url(#ribbon)"
    />
    <path
      d="M0 140 C160 70, 340 200, 520 130 C680 70, 770 160, 800 110 L800 200 L0 200 Z"
      fill="#D90429"
      opacity="0.5"
    />
  </svg>
);

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      data-testid="primary-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-[#E5E7EB] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <Logo />

        <div className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              data-testid={`nav-link-${l.name.toLowerCase().replace(' ', '-')}`}
              className="text-[14px] font-medium text-[#1D3557]/80 hover:text-[#D90429] transition-colors"
            >
              {l.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:07480506197"
            data-testid="nav-phone"
            className="flex items-center gap-2 text-[13px] font-semibold text-[#1D3557] hover:text-[#D90429] transition-colors"
          >
            <PhoneCall size={15} className="text-[#D90429]" />
            074 8050 6197
          </a>
          <a
            href="#contact"
            data-testid="nav-cta-book"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D90429] text-white text-[13px] font-semibold shadow-red-glow hover:bg-[#B30321] hover:-translate-y-0.5 transition-all"
          >
            Book Consultation
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden w-10 h-10 rounded-lg bg-white/80 border border-[#E5E7EB] flex items-center justify-center text-[#1D3557]"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            data-testid="mobile-menu"
            className="lg:hidden absolute top-full inset-x-0 bg-white border-b border-[#E5E7EB] shadow-soft px-6 py-6"
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-link-${l.name.toLowerCase().replace(' ', '-')}`}
                  className="py-3 px-2 text-[#1D3557] font-medium border-b border-[#F5F5F5]"
                >
                  {l.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                data-testid="mobile-cta-book"
                className="mt-4 py-3 px-4 bg-[#D90429] text-white text-center rounded-full font-semibold"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

const Hero = () => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-[100vh] flex items-center pt-32 pb-32 overflow-hidden bg-white"
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-70 pointer-events-none" />
      <RedWaveBackdrop />

      {/* Floating soft red blobs */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#D90429]/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[380px] h-[380px] rounded-full bg-[#1D3557]/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE4E7] border border-[#D90429]/15 text-[#D90429] text-[12px] font-semibold tracking-wide mb-7">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#D90429] opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D90429]" />
            </span>
            UK based · Trusted IT consultancy
          </div>

          <h1 className="font-display font-bold text-[#1D3557] tracking-tight text-balance text-5xl sm:text-6xl lg:text-[78px] leading-[1.02]">
            Digital{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Peace</span>
              <svg
                viewBox="0 0 220 24"
                className="absolute left-0 right-0 -bottom-2 w-full"
                aria-hidden
              >
                <path
                  d="M2 18 C 60 4, 140 28, 218 10"
                  stroke="#D90429"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{' '}
            <br className="hidden sm:block" />
            of Mind.
          </h1>

          <p className="mt-7 text-lg text-[#4B5563] max-w-xl leading-relaxed">
            Nivara Ltd delivers calm, dependable IT consulting and managed support for ambitious
            businesses — so you can stop worrying about technology and get back to growth.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              data-testid="hero-cta-book"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#D90429] text-white font-semibold shadow-red-glow hover:bg-[#B30321] hover:-translate-y-0.5 transition-all"
            >
              Book Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              data-testid="hero-cta-support"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-[#1D3557] font-semibold border border-[#E5E7EB] hover:border-[#1D3557] hover:bg-[#F5F5F5] transition-all"
            >
              <HeadphonesIcon size={18} className="text-[#D90429]" />
              Get IT Support
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-[#4B5563]">
            {[
              { icon: <ShieldCheck size={16} className="text-[#D90429]" />, label: 'GDPR & Cyber Essentials aligned' },
              { icon: <Clock size={16} className="text-[#D90429]" />, label: 'Avg. 15 min response' },
              { icon: <Users size={16} className="text-[#D90429]" />, label: '120+ businesses supported' },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2 font-medium">
                {t.icon}
                {t.label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-[28px] overflow-hidden shadow-soft-lg border border-[#E5E7EB] bg-white">
            <img
              src="https://images.unsplash.com/photo-1757405939046-7658d7426026?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBJVCUyMGNvbnN1bHRpbmclMjB0ZWFtJTIwcHJvZmVzc2lvbmFsc3xlbnwwfHx8fDE3NzgyNzM3MDZ8MA&ixlib=rb-4.1.0&q=85"
              alt="Nivara IT consultants collaborating"
              className="w-full aspect-[4/5] object-cover"
            />
            {/* Floating status card */}
            <div className="absolute top-6 left-6 px-4 py-3 bg-white/95 backdrop-blur rounded-2xl shadow-soft flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <div className="leading-tight">
                <div className="text-[11px] uppercase tracking-widest font-semibold text-[#4B5563]">
                  Helpdesk
                </div>
                <div className="text-sm font-bold text-[#1D3557]">Online · 24 / 7</div>
              </div>
            </div>

            {/* Floating support card */}
            <div className="absolute bottom-6 right-6 max-w-[230px] px-4 py-4 bg-white/95 backdrop-blur rounded-2xl shadow-soft border border-[#E5E7EB]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#FFE4E7] text-[#D90429] flex items-center justify-center">
                  <Zap size={16} />
                </div>
                <div className="text-sm font-bold text-[#1D3557]">Issue resolved</div>
              </div>
              <p className="text-xs text-[#4B5563]">
                "Network back online in 12 minutes. Brilliant team."
              </p>
            </div>
          </div>

          {/* Floating decorative ribbon under image */}
          <div className="absolute -bottom-8 -left-6 w-[60%] h-20 opacity-95">
            <RedRibbon className="w-full h-full" />
          </div>
        </motion.div>
      </div>

      {/* Bottom edge soft red ribbon */}
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-full"
          aria-hidden
        >
          <path
            d="M0 80 C 240 20, 520 130, 800 70 C 1060 18, 1240 100, 1440 50 L1440 120 L0 120 Z"
            fill="#D90429"
            opacity="0.08"
          />
          <path
            d="M0 95 C 280 50, 560 120, 840 80 C 1120 42, 1300 110, 1440 80 L1440 120 L0 120 Z"
            fill="#D90429"
            opacity="0.18"
          />
        </svg>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  Logo strip                                                                */
/* -------------------------------------------------------------------------- */

const LogoStrip = () => {
  const items = [
    'Halcyon Health',
    'Northwind & Co',
    'Brookline Legal',
    'Verdant Retail',
    'Stratford Studios',
    'Cobalt Logistics',
    'Foundry Architects',
    'Meridian Finance',
  ];
  return (
    <section data-testid="logo-strip" className="py-12 border-y border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-[#4B5563] mb-8">
          Trusted by SMEs and growing teams across the UK
        </p>
        <div className="relative overflow-hidden scrollbar-hide">
          <div className="flex gap-14 animate-marquee whitespace-nowrap">
            {[...items, ...items].map((it, i) => (
              <span
                key={`${it}-${i}`}
                className="font-display font-semibold text-2xl text-[#1D3557]/45 tracking-tight"
              >
                {it}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  About                                                                     */
/* -------------------------------------------------------------------------- */

const About = () => {
  return (
    <section id="about" data-testid="about-section" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute right-0 top-0 w-[40%] h-[40%] bg-dot-grid opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-12 gap-14 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-[28px] overflow-hidden shadow-soft-lg">
            <img
              src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBJVCUyMGNvbnN1bHRpbmclMjB0ZWFtJTIwcHJvZmVzc2lvbmFsc3xlbnwwfHx8fDE3NzgyNzM3MDZ8MA&ixlib=rb-4.1.0&q=85"
              alt="Nivara team"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          {/* Floating stats card */}
          <div className="absolute -bottom-8 -right-4 sm:-right-10 px-6 py-5 bg-white rounded-2xl shadow-soft-lg border border-[#E5E7EB] flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1D3557] text-white flex items-center justify-center">
              <Sparkles size={20} />
            </div>
            <div>
              <div className="font-display font-bold text-2xl text-[#1D3557] leading-none">10+ yrs</div>
              <div className="text-xs text-[#4B5563] mt-1">helping UK businesses thrive</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#D90429]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#D90429]">
              About Nivara
            </span>
          </div>
          <h2 className="font-display font-bold text-[#1D3557] text-4xl sm:text-5xl tracking-tight leading-[1.08]">
            Calm, considered IT — looked after by a team you can actually call.
          </h2>
          <p className="mt-6 text-[#4B5563] text-lg leading-relaxed">
            Nivara Ltd is a UK-based IT consultancy built around one idea: technology should give
            your business confidence, not anxiety. We pair friendly, on-the-ground support with
            modern cloud and security expertise — so your systems just work, day after day.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { icon: <ShieldCheck className="text-[#D90429]" size={20} />, title: 'Trustworthy', desc: 'Plain-English advice. No jargon, no surprise invoices.' },
              { icon: <Zap className="text-[#D90429]" size={20} />, title: 'Responsive', desc: 'Real humans answer the phone — quickly.' },
              { icon: <Lock className="text-[#D90429]" size={20} />, title: 'Secure', desc: 'Modern cyber hygiene baked into every engagement.' },
              { icon: <Users className="text-[#D90429]" size={20} />, title: 'Personal', desc: 'A dedicated engineer who learns your business.' },
            ].map((b) => (
              <div
                key={b.title}
                data-testid={`about-pillar-${b.title.toLowerCase()}`}
                className="p-5 rounded-2xl bg-[#F5F5F5] hover:bg-white hover:shadow-soft transition-all border border-transparent hover:border-[#E5E7EB]"
              >
                <div className="w-10 h-10 rounded-lg bg-white shadow-soft flex items-center justify-center mb-3">
                  {b.icon}
                </div>
                <div className="font-display font-semibold text-[#1D3557] text-base">{b.title}</div>
                <p className="text-sm text-[#4B5563] mt-1 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              data-testid="about-cta-services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1D3557] text-white text-sm font-semibold hover:bg-[#0F1B2D] transition-all"
            >
              Explore our services
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              data-testid="about-cta-talk"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1D3557] text-sm font-semibold border border-[#E5E7EB] hover:border-[#D90429] hover:text-[#D90429] transition-all"
            >
              Talk to a consultant
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  Services                                                                  */
/* -------------------------------------------------------------------------- */

const SERVICES = [
  {
    icon: Lightbulb,
    title: 'IT Consulting',
    desc: 'Strategic technology guidance to align your systems with where your business is going next.',
    bullets: ['Roadmaps & audits', 'Vendor selection', 'Digital transformation'],
  },
  {
    icon: HeadphonesIcon,
    title: 'Managed IT Support',
    desc: 'Friendly, fast helpdesk and on-site engineers acting as your dedicated, outsourced IT department.',
    bullets: ['24/7 helpdesk', 'On-site visits', 'Proactive monitoring'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    desc: 'Migration, optimisation and management of Microsoft 365, Azure and modern cloud workloads.',
    bullets: ['M365 & Azure', 'Cloud migration', 'Cost optimisation'],
  },
  {
    icon: ShieldCheck,
    title: 'Cyber Security',
    desc: 'Layered defences and ongoing vigilance to protect your data, your team and your reputation.',
    bullets: ['Cyber Essentials', 'Endpoint protection', 'Phishing simulation'],
  },
  {
    icon: Server,
    title: 'Remote Assistance',
    desc: 'Secure remote support that fixes most issues in minutes — wherever your team is working from.',
    bullets: ['Instant remote help', 'Software setup', 'User training'],
  },
  {
    icon: DatabaseBackup,
    title: 'Backup & Recovery',
    desc: 'Resilient backup, business continuity and disaster recovery plans you can actually rely on.',
    bullets: ['Automated backups', 'DR planning', 'Ransomware recovery'],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-28 bg-[#F5F5F5] overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />
      {/* Top ribbon divider */}
      <div className="absolute -top-1 inset-x-0 h-16 rotate-180 pointer-events-none">
        <RedRibbon className="w-full h-full opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#D90429]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#D90429]">
              What we do
            </span>
          </div>
          <h2 className="font-display font-bold text-[#1D3557] text-4xl sm:text-5xl tracking-tight leading-[1.08]">
            A complete IT department, without the overhead.
          </h2>
          <p className="mt-5 text-[#4B5563] text-lg leading-relaxed">
            Whether you need strategic advice, day-to-day support or a complete cloud migration —
            we tailor every engagement to your team, your budget and your ambitions.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                data-testid={`service-card-${s.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                className="group relative bg-white rounded-3xl p-8 border border-[#E5E7EB] hover:border-[#D90429]/30 hover:shadow-soft-lg transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#D90429]/0 group-hover:bg-[#D90429]/5 transition-colors rounded-bl-[100px]" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[#FFE4E7] text-[#D90429] flex items-center justify-center mb-6 group-hover:bg-[#D90429] group-hover:text-white transition-all">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-[#1D3557] tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[#4B5563] text-[15px] leading-relaxed">{s.desc}</p>

                  <ul className="mt-6 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-[#1D3557]/80">
                        <CheckCircle2 size={15} className="text-[#D90429]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  Why Choose Us                                                             */
/* -------------------------------------------------------------------------- */

const WHY = [
  {
    icon: Clock,
    stat: '15 min',
    label: 'Average response time',
    desc: 'Real engineers, real fast. No call-centre handoffs, no scripted run-around.',
  },
  {
    icon: Lock,
    stat: '99.9%',
    label: 'Uptime across managed clients',
    desc: 'Proactive monitoring catches issues before they ever interrupt your team.',
  },
  {
    icon: Sparkles,
    stat: '4.9 / 5',
    label: 'Average client satisfaction',
    desc: 'Friendly, plain-English support consistently rated outstanding.',
  },
  {
    icon: ShieldCheck,
    stat: '0',
    label: 'Successful breaches',
    desc: 'Hardened, layered defences across every endpoint, account and inbox we manage.',
  },
];

const WhyUs = () => {
  return (
    <section
      id="why"
      data-testid="why-section"
      className="relative py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#D90429]" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#D90429]">
                Why Nivara
              </span>
            </div>
            <h2 className="font-display font-bold text-[#1D3557] text-4xl sm:text-5xl tracking-tight leading-[1.08]">
              Reliable. Responsive. <span className="text-[#D90429]">Refreshingly human.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[#4B5563] text-lg leading-relaxed">
            We're not the biggest IT firm — and that's the point. You get senior engineers, direct
            relationships and a service that actually feels personal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY.map((w, i) => {
            const Icon = w.icon;
            return (
              <motion.div
                key={w.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`why-card-${i}`}
                className="relative p-7 rounded-3xl bg-[#F5F5F5] hover:bg-white hover:shadow-soft-lg border border-transparent hover:border-[#E5E7EB] transition-all overflow-hidden group"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#D90429]/5 group-hover:bg-[#D90429]/10 transition-colors" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-white shadow-soft flex items-center justify-center mb-6">
                    <Icon size={20} className="text-[#D90429]" />
                  </div>
                  <div className="font-display font-bold text-4xl text-[#1D3557] tracking-tight">
                    {w.stat}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-[#1D3557]/80">{w.label}</div>
                  <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">{w.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process strip */}
        <div className="mt-20 p-10 sm:p-14 rounded-[32px] bg-[#1D3557] text-white relative overflow-hidden">
          <div className="absolute -bottom-1 inset-x-0 h-24 opacity-40">
            <RedRibbon className="w-full h-full" />
          </div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#D90429]/15 blur-[100px] rounded-full" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#D90429] mb-3">
                How we work
              </div>
              <h3 className="font-display font-bold text-3xl sm:text-4xl tracking-tight leading-tight">
                A simple, structured way to bring calm to your IT.
              </h3>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-5">
              {[
                { n: '01', t: 'Discover', d: 'Free audit of your current setup, risks and goals.' },
                { n: '02', t: 'Design', d: 'A clear, costed roadmap tailored to your business.' },
                { n: '03', t: 'Deliver', d: 'Smooth onboarding and ongoing care — measured monthly.' },
              ].map((p) => (
                <div
                  key={p.n}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
                >
                  <div className="text-[#D90429] font-display font-bold text-lg">{p.n}</div>
                  <div className="font-display font-semibold text-lg mt-1">{p.t}</div>
                  <p className="text-white/65 text-sm mt-2 leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                              */
/* -------------------------------------------------------------------------- */

const TESTIMONIALS = [
  {
    quote:
      'Nivara took the chaos out of our IT. The response is always within minutes and they explain things in language our team actually understands.',
    name: 'Priya Sharma',
    role: 'Operations Director, Halcyon Health',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'They migrated us to Microsoft 365 with zero downtime over a weekend. Genuinely the smoothest IT project we have ever run.',
    name: 'James Whitcombe',
    role: 'Managing Partner, Brookline Legal',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'Calm, knowledgeable, and quietly excellent. After two bad providers, working with Nivara has felt like a breath of fresh air.',
    name: 'Amelia Carter',
    role: 'Founder, Verdant Retail',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative py-28 bg-[#F5F5F5] overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-grid-light opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#D90429]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#D90429]">
              Client Stories
            </span>
          </div>
          <h2 className="font-display font-bold text-[#1D3557] text-4xl sm:text-5xl tracking-tight leading-[1.08]">
            What people say after switching to Nivara.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-testid={`testimonial-card-${i}`}
              className={`relative p-8 rounded-3xl border border-[#E5E7EB] shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg ${
                i === 1 ? 'bg-[#1D3557] text-white' : 'bg-white text-[#1D3557]'
              }`}
            >
              <Quote
                size={28}
                className={i === 1 ? 'text-[#D90429]' : 'text-[#D90429]'}
              />
              <p
                className={`mt-5 text-[15px] leading-relaxed ${
                  i === 1 ? 'text-white/85' : 'text-[#4B5563]'
                }`}
              >
                "{t.quote}"
              </p>
              <div className="mt-7 flex items-center gap-3 pt-5 border-t border-dashed border-current/15">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <div
                    className={`font-display font-semibold text-sm ${
                      i === 1 ? 'text-white' : 'text-[#1D3557]'
                    }`}
                  >
                    {t.name}
                  </div>
                  <div
                    className={`text-xs ${
                      i === 1 ? 'text-white/55' : 'text-[#4B5563]'
                    }`}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  Contact                                                                   */
/* -------------------------------------------------------------------------- */

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    // No backend - direct mailto fallback
    const subject = encodeURIComponent(`New enquiry from ${form.name || 'website'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`,
    );
    window.location.href = `mailto:nivaraltd.dpm@outlook.com?subject=${subject}&body=${body}`;
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-28 bg-white overflow-hidden"
    >
      <div className="absolute -top-1 inset-x-0 h-16 rotate-180 pointer-events-none opacity-70">
        <RedRibbon className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 grid lg:grid-cols-12 gap-12">
        {/* Left: Info */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#D90429]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#D90429]">
              Get in touch
            </span>
          </div>
          <h2 className="font-display font-bold text-[#1D3557] text-4xl sm:text-5xl tracking-tight leading-[1.08]">
            Let's bring some calm to your IT.
          </h2>
          <p className="mt-5 text-[#4B5563] text-lg leading-relaxed">
            Book a free, no-obligation consultation — we'll listen, take notes and come back with a
            clear, costed plan.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href="tel:07480506197"
              data-testid="contact-phone"
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#F5F5F5] hover:bg-white hover:shadow-soft border border-transparent hover:border-[#E5E7EB] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#D90429] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest font-semibold text-[#4B5563]">
                  Call us
                </div>
                <div className="font-display font-semibold text-[#1D3557] text-lg">
                  074 8050 6197
                </div>
              </div>
            </a>

            <a
              href="mailto:nivaraltd.dpm@outlook.com"
              data-testid="contact-email"
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#F5F5F5] hover:bg-white hover:shadow-soft border border-transparent hover:border-[#E5E7EB] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1D3557] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <Mail size={20} />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest font-semibold text-[#4B5563]">
                  Email us
                </div>
                <div className="font-display font-semibold text-[#1D3557] text-lg truncate">
                  nivaraltd.dpm@outlook.com
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#F5F5F5] border border-transparent">
              <div className="w-12 h-12 rounded-xl bg-white shadow-soft text-[#D90429] flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest font-semibold text-[#4B5563]">
                  Location
                </div>
                <div className="font-display font-semibold text-[#1D3557] text-lg">
                  Serving the United Kingdom
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-[#1D3557] text-white relative overflow-hidden">
            <div className="absolute -bottom-1 inset-x-0 h-12 opacity-40">
              <RedRibbon className="w-full h-full" />
            </div>
            <div className="relative">
              <div className="text-xs uppercase tracking-widest font-semibold text-[#D90429]">
                Working hours
              </div>
              <div className="mt-2 font-display font-semibold text-lg">
                Mon – Fri · 8:00am – 6:00pm
              </div>
              <p className="text-white/60 text-sm mt-1">
                Emergency out-of-hours support available for managed clients.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={submit}
            data-testid="contact-form"
            className="relative p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E7EB] shadow-soft-lg"
          >
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-[#D90429]/10 rounded-full blur-2xl" />

            <h3 className="font-display font-semibold text-2xl text-[#1D3557]">
              Send us a message
            </h3>
            <p className="text-[#4B5563] text-sm mt-2">
              We respond to every enquiry within one working day.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <Field
                id="name"
                label="Full name"
                required
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Jane Doe"
              />
              <Field
                id="email"
                label="Email"
                type="email"
                required
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="jane@company.co.uk"
              />
              <Field
                id="phone"
                label="Phone"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                placeholder="07700 900000"
                className="sm:col-span-2"
              />
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#1D3557] mb-2"
                >
                  How can we help?
                </label>
                <textarea
                  id="message"
                  data-testid="contact-input-message"
                  required
                  rows={5}
                  placeholder="Tell us a bit about your business and what you need help with..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-[#F5F5F5] border border-transparent focus:border-[#D90429] focus:bg-white focus:ring-4 focus:ring-[#D90429]/10 outline-none transition-all resize-none text-[#1D3557] placeholder:text-[#4B5563]/60"
                />
              </div>
            </div>

            <button
              type="submit"
              data-testid="contact-submit"
              className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#D90429] text-white font-semibold shadow-red-glow hover:bg-[#B30321] hover:-translate-y-0.5 transition-all disabled:opacity-60"
            >
              {status === 'sent' ? (
                <>
                  <CheckCircle2 size={18} /> Message ready in your email client
                </>
              ) : (
                <>
                  Send message
                  <Send size={16} />
                </>
              )}
            </button>

            <p className="text-xs text-[#4B5563] mt-4">
              By submitting, you agree to be contacted by Nivara Ltd regarding your enquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
  className = '',
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  className?: string;
}) => (
  <div className={className}>
    <label
      htmlFor={id}
      className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#1D3557] mb-2"
    >
      {label}
    </label>
    <input
      id={id}
      data-testid={`contact-input-${id}`}
      type={type}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-5 py-4 rounded-2xl bg-[#F5F5F5] border border-transparent focus:border-[#D90429] focus:bg-white focus:ring-4 focus:ring-[#D90429]/10 outline-none transition-all text-[#1D3557] placeholder:text-[#4B5563]/60"
    />
  </div>
);

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */

const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="relative bg-[#1D3557] text-white pt-24 pb-10 overflow-hidden"
    >
      <div className="absolute -top-1 inset-x-0 h-20 opacity-90 pointer-events-none">
        <RedRibbon className="w-full h-full" />
      </div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#D90429]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          <div className="lg:col-span-5">
            <Logo inverted />
            <p className="mt-5 text-white/65 max-w-sm leading-relaxed">
              UK-based IT consultancy delivering calm, dependable technology for ambitious
              businesses. Digital peace of mind, every day.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <a
                href="tel:07480506197"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Phone size={15} className="text-[#D90429]" /> 074 8050 6197
              </a>
              <a
                href="mailto:nivaraltd.dpm@outlook.com"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Mail size={15} className="text-[#D90429]" /> nivaraltd.dpm@outlook.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.28em] font-semibold text-[#D90429] mb-5">
              Services
            </div>
            <ul className="space-y-3 text-white/70">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="hover:text-white transition-colors text-sm">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.28em] font-semibold text-[#D90429] mb-5">
              Company
            </div>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#why" className="hover:text-white">Why Us</a></li>
              <li><a href="#testimonials" className="hover:text-white">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.28em] font-semibold text-[#D90429] mb-5">
              Legal
            </div>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-white/50">
            © {new Date().getFullYear()} Nivara Ltd. All rights reserved.
          </p>
          <p className="text-white/40 italic">Digital peace of mind, delivered daily.</p>
        </div>
      </div>
    </footer>
  );
};

/* -------------------------------------------------------------------------- */
/*  Back to top                                                               */
/* -------------------------------------------------------------------------- */

const BackToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-testid="back-to-top"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#D90429] text-white shadow-red-glow flex items-center justify-center hover:bg-[#B30321] hover:-translate-y-0.5 transition-all"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

/* -------------------------------------------------------------------------- */
/*  App                                                                       */
/* -------------------------------------------------------------------------- */

export default function App() {
  return (
    <div data-testid="nivara-landing-root" className="relative bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoStrip />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
