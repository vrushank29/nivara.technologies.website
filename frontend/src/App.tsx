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
  CheckCircle2,
  Send,
  PhoneCall,
  ExternalLink,
  MonitorUp,
  Cpu,
  Trash2,
  ChevronDown,
  Handshake,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Email Obfuscation Helper                                                  */
/* -------------------------------------------------------------------------- */

const EMAIL_USER = 'hello';
const EMAIL_DOMAIN = 'nivaraltd.com';
const getEmail = () => `${EMAIL_USER}@${EMAIL_DOMAIN}`;

/* -------------------------------------------------------------------------- */
/*  Brand mark                                                                */
/* -------------------------------------------------------------------------- */

const Logo = ({ inverted = false, testId = 'logo-link' }: { inverted?: boolean; testId?: string }) => (
  <a href="#services" data-testid={testId} className="inline-flex items-center gap-2.5 group">
    {/* Clean brain icon — no text in this image */}
    <img
      src="/logo%20png.png"
      alt="Nivara brain icon"
      className="h-14 w-auto object-contain flex-shrink-0 group-hover:scale-105 transition-transform"
    />
    {/* Brand text */}
    <div className="leading-none">
      <div className={`font-display font-bold text-[18px] leading-tight ${inverted ? 'text-white' : 'text-[#1D3557]'}`}>
        Nivara Ltd<span className="text-[#D90429]">.</span>
      </div>
      <div className={`text-[9px] font-semibold tracking-[0.22em] uppercase mt-0.5 ${inverted ? 'text-white/60' : 'text-[#4B5563]'}`}>
        Digital Peace of Mind
      </div>
    </div>
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
    { name: 'Services', href: '#services' },
    { name: 'Business Referral Offer', href: '#referral' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      data-testid="primary-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-[#E5E7EB] py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <Logo testId="nav-logo-link" />

        <div className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              data-testid={`nav-link-${l.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-[14px] font-medium text-[#1D3557]/80 hover:text-[#D90429] transition-colors"
            >
              {l.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`mailto:${getEmail()}`}
            data-testid="nav-email"
            className="flex items-center gap-2 text-[13px] font-semibold text-[#1D3557] hover:text-[#D90429] transition-colors"
          >
            <Mail size={15} className="text-[#D90429]" />
            {getEmail()}
          </a>
          <a
            href="tel:07480506197"
            data-testid="nav-phone"
            className="flex items-center gap-2 text-[13px] font-semibold text-[#1D3557] hover:text-[#D90429] transition-colors"
          >
            <PhoneCall size={15} className="text-[#D90429]" />
            074 8050 6197
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
                  data-testid={`mobile-nav-link-${l.name.toLowerCase().replace(/\s+/g, '-')}`}
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
/*  Services                                                                  */
/* -------------------------------------------------------------------------- */

const SERVICES = [
  {
    id: 'kaspersky',
    icon: ShieldCheck,
    badge: 'Authorized Reseller',
    badgeBg: 'bg-teal-50 border-teal-500/20 text-teal-700',
    badgeDot: 'bg-teal-500',
    iconBg: 'bg-teal-50 text-teal-600',
    gradient: 'from-teal-500/10 to-[#D90429]/5',
    title: 'Kaspersky Authorized Reseller',
    desc: 'Lowest price guaranteed on genuine Kaspersky antivirus, VPN, and security suites for home and business.',
    bullets: [
      'Inauguration pricing from £10.98',
      'Authorized UK partner',
      'Genuine product guarantee',
    ],
    ctaText: 'View Prices & Compare',
    isFeatured: true,
  },
  {
    id: 'windows',
    icon: MonitorUp,
    badge: 'OS Upgrade',
    badgeBg: 'bg-blue-50 border-blue-500/20 text-blue-700',
    badgeDot: 'bg-blue-500',
    iconBg: 'bg-blue-50 text-blue-600',
    gradient: 'from-blue-500/10 to-[#D90429]/5',
    title: 'Upgrade to Windows 11 before it is too late',
    desc: 'Upgrade your systems to Windows 11 safely and securely. We analyze compatibility, backup your critical data, and ensure a smooth migration with zero downtime.',
    bullets: [
      'Hardware compatibility audit',
      'Safe data migration',
      'Zero-downtime transition',
    ],
    details: [
      "Microsoft has stopped supporting Windows 10 since 14th October last year.",
      "What does this mean is your Windows 10 computer now has become easier to hack, will crash more often, and will not work properly with newer apps and devices.",
      "At Nivara Ltd., I can check if your current Windows 10 computer can run/ can be upgraded to run Windows 11.",
      "If not, I can help you move your data to Windows 11 computer with as little stress as possible and reset the old one to avoid data theft before scrapping it.",
      "The goal is simple: You use your computer with confidence, while the technical is taken care of by us, so you have a Digital Peace of Mind. Contact us today to get a quote for your Digital Peace of Mind."
    ],
    image: '/windows11_upgrade.jpg',
    ctaText: 'Book Upgrade',
    isFeatured: false,
  },
  {
    id: 'ram',
    icon: Cpu,
    badge: 'Hardware Upgrade',
    badgeBg: 'bg-purple-50 border-purple-500/20 text-purple-700',
    badgeDot: 'bg-purple-500',
    iconBg: 'bg-purple-50 text-purple-600',
    gradient: 'from-purple-500/10 to-[#D90429]/5',
    title: 'RAM & Storage Upgrades',
    desc: 'Supercharge your slow laptops and desktop PCs. We supply and install premium RAM and ultra-fast SSD storage upgrades to extend your hardware lifespans by years.',
    bullets: [
      'Extends hardware lifespan',
      'High-performance SSDs & RAM',
      'Free physical cleaning included',
    ],
    details: [
      "Supercharge your slow laptops and desktop PCs. We supply and install premium RAM and ultra-fast SSD storage upgrades to extend your hardware lifespans by years.",
      "A sluggish computer doesn't mean you need to buy a brand new one. Upgrading your RAM allows you to run multiple apps smoothly, while an SSD upgrade will make your system boot up in seconds and load files instantly.",
      "At Nivara Ltd., we analyze your device's upgrade potential, install high-quality parts, and completely clean your hardware's internal cooling system of dust to prevent overheating."
    ],
    image: '/ram_upgrade.jpg',
    ctaText: 'Book Hardware Upgrade',
    isFeatured: false,
  },
  {
    id: 'wiping',
    icon: Trash2,
    badge: 'Data Security',
    badgeBg: 'bg-rose-50 border-rose-500/20 text-rose-700',
    badgeDot: 'bg-rose-500',
    iconBg: 'bg-rose-50 text-rose-600',
    gradient: 'from-rose-500/10 to-[#D90429]/5',
    title: 'Certified Data Wiping',
    desc: 'Protect your identity and privacy before discarding old computers. We perform military-grade, certified data destruction that makes recovered data impossible.',
    bullets: [
      'Certified military-grade wipe',
      'Protects personal & business IP',
      'Certificate of erasure provided',
    ],
    details: [
      "Protect your identity and privacy before discarding or recycling old computers. We perform military-grade, certified data destruction that makes recovered data impossible.",
      "Simply deleting files or performing a standard factory reset does not erase your data. Specialized data recovery tools can easily extract photos, passwords, and sensitive documents.",
      "At Nivara Ltd., we use industry-leading sanitization standards to overwrite your storage drives completely. You will receive an official Certificate of Destruction, giving you complete confidence that your data is gone forever."
    ],
    image: '/data_wiping.jpg',
    ctaText: 'Book Data Wipe',
    isFeatured: false,
  },
];

interface KasperskyProduct {
  id: string;
  name: string;
  ourPrice: string;
  devices: string;
  link: string;
  linkText: string;
}

const KASPERSKY_PRODUCTS: KasperskyProduct[] = [
  {
    id: 'premium',
    name: 'Kaspersky Premium',
    ourPrice: '£16.79',
    devices: '1 Device',
    link: 'https://www.kaspersky.co.uk/premium',
    linkText: 'Kaspersky Premium Antivirus with unlimited VPN | Kaspersky',
  },
  {
    id: 'plus',
    name: 'Kaspersky Plus',
    ourPrice: '£16.00',
    devices: '1 Device',
    link: 'https://www.kaspersky.co.uk/plus',
    linkText: 'Kaspersky Plus Antivirus - Advanced Internet Security Software | Kaspersky',
  },
  {
    id: 'standard',
    name: 'Kaspersky Standard',
    ourPrice: '£12.80',
    devices: '1 Device',
    link: 'https://www.kaspersky.co.uk/standard',
    linkText: 'Kaspersky Standard – Antivirus Software Special Offer | Kaspersky',
  },
  {
    id: 'vpn',
    name: 'Kaspersky VPN Secure Connection',
    ourPrice: '£18.47',
    devices: '5 Devices',
    link: 'https://www.kaspersky.co.uk/vpn-secure-connection',
    linkText: 'Kaspersky VPN Secure Connection – Protect Your Online Privacy | Kaspersky',
  },
  {
    id: 'safe-kids',
    name: 'Kaspersky Safe Kids',
    ourPrice: '£12.32',
    devices: '1 user',
    link: 'https://www.kaspersky.co.uk/safe-kids',
    linkText: 'Kaspersky Safe Kids | Parental Control Software | Kaspersky',
  },
  {
    id: 'password-manager',
    name: 'Kaspersky Password Manager',
    ourPrice: '£10.98',
    devices: '1 user',
    link: 'https://www.kaspersky.co.uk/password-manager',
    linkText: 'Kaspersky Password Manager | Kaspersky',
  },
  {
    id: 'small-office',
    name: 'Kaspersky Small Office Security',
    ourPrice: '£100.12',
    devices: '5 users',
    link: 'https://www.kaspersky.co.uk/small-office-security',
    linkText: 'Kaspersky Small Office Security - Business Antivirus Solution | Kaspersky',
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const closeAndScroll = () => {
    setSelectedService(null);
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedService]);

  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative min-h-screen flex flex-col justify-center pt-36 pb-28 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />
      <RedWaveBackdrop />
      {/* Floating blobs */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#D90429]/8 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[380px] h-[380px] rounded-full bg-[#1D3557]/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#D90429]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#D90429]">
              Partnerships & Services
            </span>
          </div>
        </div>

        {/* 2x2 Grid of All 4 Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {SERVICES.map((service) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                data-testid={`service-card-${service.id}`}
                className="relative bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB] hover:border-[#D90429]/30 hover:shadow-soft-lg transition-all overflow-hidden flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedService(service.id)}
              >
                {/* Dynamic corner gradient accent based on service styling */}
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${service.gradient} rounded-bl-[120px] group-hover:scale-110 transition-transform`} />

                <div className="relative flex flex-col justify-between h-full flex-1">
                  <div>
                    {/* Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 border ${service.badgeBg}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${service.badgeDot} animate-pulse`} />
                      {service.badge}
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#1D3557] tracking-tight group-hover:text-[#D90429] transition-colors mb-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#4B5563] text-[16px] leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    {/* Bullets */}
                    <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-[#1D3557]/80 font-medium">
                          <CheckCircle2 size={16} className="text-teal-600 flex-shrink-0" />
                          <span className="truncate">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Bottom Bar */}
                  <div className="pt-6 border-t border-[#F5F5F5] flex items-center justify-between mt-auto">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-sm ${service.iconBg}`}>
                      <ServiceIcon size={24} />
                    </div>
                    <button
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D90429] text-white font-semibold text-sm shadow-red-glow hover:bg-[#B30321] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (service.id === 'kaspersky') {
                          setSelectedService(service.id);
                        } else {
                          scrollToContact();
                        }
                      }}
                    >
                      {service.ctaText}
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#1D3557]/60 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            />

            {/* Modal Card */}
            {selectedService === 'kaspersky' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="relative bg-white rounded-3xl shadow-soft-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#E5E7EB] flex flex-col z-10"
              >
                {/* Sticky Modal Header */}
                <div className="sticky top-0 bg-white/95 backdrop-blur z-20 px-6 sm:px-10 py-5 border-b border-[#E5E7EB] flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">Official Partner Offer</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-[#1D3557] tracking-tight">
                      Kaspersky Security Solutions
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-10 h-10 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center text-[#1D3557] hover:text-[#D90429] transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Modal Scroll Content */}
                <div className="px-6 sm:px-10 py-6 space-y-8 flex-1">
                  {/* Intro */}
                  <div className="bg-teal-50/55 border border-teal-500/10 rounded-2xl p-5 sm:p-6 text-sm text-[#4B5563] leading-relaxed">
                    <p className="font-semibold text-[#1D3557] mb-2 text-base">We are an Authorized UK reseller of Kaspersky security products.</p>
                    <p className="mb-4">
                      Providing top-tier security licenses for home users and small/medium businesses. Explore our business inauguration rates below. Click on any product link to compare features or find details on the official Kaspersky site.
                    </p>
                    <div className="text-[12px] font-medium text-teal-800 bg-teal-50 border border-teal-500/15 rounded-lg px-3 py-2 inline-block">
                      Lowest Price Guaranteed; We beat standard pricing & guarantee the lowest rates on renewals.
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className="space-y-4">
                    <h4 className="font-display font-bold text-lg text-[#1D3557] border-b border-[#E5E7EB] pb-2">
                      Inauguration Price List
                    </h4>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {KASPERSKY_PRODUCTS.map((prod) => (
                        <div
                          key={prod.id}
                          className="bg-white border border-[#E5E7EB] rounded-2xl p-5 hover:border-teal-500/20 hover:shadow-soft transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex justify-between items-start gap-2 mb-2">
                              <span className="font-display font-bold text-base text-[#1D3557]">
                                {prod.name}
                              </span>
                            </div>
                            <span className="text-xs font-medium text-[#4B5563] bg-[#F5F5F5] rounded-full px-2.5 py-0.5 inline-block mb-4">
                              {prod.devices}
                            </span>
                          </div>

                          <div className="mt-4 pt-4 border-t border-[#F5F5F5]">
                            <div className="flex items-baseline gap-2 mb-4">
                              <span className="text-lg font-bold text-[#D90429]">
                                Our Price {prod.ourPrice} *
                              </span>
                            </div>

                            <a
                              href={prod.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-teal-600 hover:text-teal-800 hover:underline transition-colors leading-tight"
                            >
                              <ExternalLink size={13} />
                              Official Specs & Compare
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer notes */}
                  <div className="border-t border-[#E5E7EB] pt-6 space-y-4 text-xs text-[#4B5563] leading-relaxed">
                    <p>
                      We provide these products for all requirements, ranging from individual home installations (1 to 5 devices) to small and medium enterprises (5 to 50 employees).
                    </p>
                    <p className="bg-[#F5F5F5] p-4 rounded-xl border border-[#E5E7EB] italic">
                      * Our prices may change from time to time, so please check with us for the latest offers. But even with that, the lowest prices are guaranteed. You won’t find a better deal anywhere else for genuine products. And if you are happy for a year, I could renew/offer the product at the same price for another year.
                    </p>
                  </div>
                </div>

                {/* Sticky Modal Footer */}
                <div className="sticky bottom-0 bg-white/95 backdrop-blur z-20 px-6 sm:px-10 py-5 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-[#1D3557]">
                    Ready to secure your devices?
                  </span>

                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="flex-1 sm:flex-none px-6 py-3 rounded-full border border-[#E5E7EB] font-semibold text-sm text-[#1D3557] hover:bg-[#F5F5F5] transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={closeAndScroll}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D90429] text-white font-semibold text-sm shadow-red-glow hover:bg-[#B30321] transition-colors"
                    >
                      Contact Us to Grab Deal
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              // Service Modal for Windows Upgrade, RAM Upgrade, Data Wiping
              (() => {
                const service = SERVICES.find(s => s.id === selectedService);
                if (!service) return null;
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 15 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    className="relative bg-white rounded-3xl shadow-soft-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E5E7EB] flex flex-col z-10"
                  >
                    {/* Floating Close button */}
                    <div className="absolute top-4 right-4 z-30">
                      <button
                        onClick={() => setSelectedService(null)}
                        className="w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur text-white hover:bg-black/60 transition-colors flex items-center justify-center cursor-pointer"
                        aria-label="Close modal"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    {/* Image Showcase */}
                    <div className="h-64 sm:h-80 w-full relative bg-slate-950">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border border-white/20 backdrop-blur bg-black/40 text-white">
                          <span className={`w-1.5 h-1.5 rounded-full ${service.badgeDot} animate-pulse`} />
                          {service.badge}
                        </div>
                        <h3 className="font-display font-bold text-2xl tracking-tight leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Modal Content */}
                    <div className="p-6 sm:p-8 space-y-6">
                      <div>
                        <h4 className="font-display font-semibold text-lg text-[#1D3557] mb-2">Service Overview</h4>
                        <div className="space-y-4">
                          {service.details ? (
                            service.details.map((para, idx) => (
                              <p key={idx} className="text-[#4B5563] text-sm leading-relaxed">
                                {para}
                              </p>
                            ))
                          ) : (
                            <p className="text-[#4B5563] text-sm leading-relaxed">
                              {service.desc}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="bg-[#F5F5F5] rounded-2xl p-5 border border-[#E5E7EB]">
                        <h4 className="font-display font-semibold text-sm text-[#1D3557] mb-3">Key Benefits & Features:</h4>
                        <ul className="space-y-3">
                          {service.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-center gap-2.5 text-sm text-[#1D3557] font-medium">
                              <CheckCircle2 size={16} className="text-teal-600 flex-shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="text-xs text-[#4B5563] leading-relaxed border-t border-[#E5E7EB] pt-4">
                        * All software and hardware upgrades are performed by fully certified IT professionals. Inquire today for a custom assessment of your devices.
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="sticky bottom-0 bg-white/95 backdrop-blur px-6 sm:px-8 py-5 border-t border-[#E5E7EB] flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-[#1D3557]">Ready to book?</span>
                      <button
                        onClick={() => {
                          setSelectedService(null);
                          setTimeout(() => {
                            scrollToContact();
                          }, 150);
                        }}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D90429] text-white font-semibold text-sm shadow-red-glow hover:bg-[#B30321] transition-colors cursor-pointer"
                      >
                        Contact Us to Book
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </motion.div>
                );
              })()
            )}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  Business Referral Offer                                                   */
/* -------------------------------------------------------------------------- */

const REFERRAL_KASPERSKY_COMMISSION = [
  { product: 'Kaspersky Premium', commission: '8%' },
  { product: 'Kaspersky Plus', commission: '8%' },
  { product: 'Kaspersky Standard', commission: '8%' },
  { product: 'Kaspersky VPN', commission: '20%' },
  { product: 'Kaspersky Safe Kids', commission: '15%' },
  { product: 'Kaspersky Password Manager', commission: '12.5%' },
  { product: 'Kaspersky Small Office Security', commission: '20%' },
];

const REFERRAL_LABOUR_COMMISSION = [
  {
    title: 'Windows 11 Upgrade',
    icon: MonitorUp,
    commission: '10%',
    basis: 'of the labour charge only',
    labour: '£50',
    note: 'Hardware supplied as part of the upgrade is excluded from commission.',
  },
  {
    title: 'Hardware Upgrades (RAM & Storage)',
    icon: Cpu,
    commission: '15%',
    basis: 'of the labour charge only',
    labour: '£80',
    note: 'The cost of RAM, SSDs or other hardware is excluded from commission.',
  },
  {
    title: 'Secure Data Wiping',
    icon: Trash2,
    commission: '20%',
    basis: 'of the labour charge',
    labour: '£110',
    note: null,
  },
];

type ReferralTerm = { title: string; intro?: string[]; items?: (string | { label: string; items: string[] })[]; outro?: string[] };

const REFERRAL_TERMS: ReferralTerm[] = [
  {
    title: 'Eligibility Requirements',
    items: [
      'Be a non-IT business with an established customer base.',
      'Be actively trading.',
      'Be registered with Companies House (where applicable).',
      'Provide Company Registration Number.',
      'Provide VAT Registration Number (if applicable).',
      'Provide Registered Office Address.',
      'Provide the names of Directors or business owners.',
      'Have at least five genuine customers likely to purchase our products or services.',
      'Agree to all Referral Partner Programme Terms and Conditions.',
    ],
  },
  {
    title: "Offer's General Rules",
    items: [
      "Referral Partners must not advertise prices below Nivara Ltd's approved selling prices.",
      'Referral Partners must not modify or reproduce Nivara Ltd branding or marketing material without written permission.',
      'Referral Partners must not represent themselves as employees or authorised technical engineers of Nivara Ltd.',
      'Referral Partners must not collect payments from customers on behalf of Nivara Ltd.',
      'Referral Partners must not issue quotations or invoices using the Nivara Ltd name.',
      {
        label: 'Referral Partners must not disclose confidential information including:',
        items: ['Wholesale prices', 'Reseller discounts', 'Internal documents', 'Commercial pricing', 'Commission structure'],
      },
      'Referral Partners are responsible for their own Corporation Tax, Income Tax and VAT obligations.',
      'Nivara Ltd reserves the right to amend products, services, prices, commission rates and programme rules by providing reasonable notice.',
      {
        label: 'You are not expected to:',
        items: [
          'Provide technical advice.',
          'Recommend specific products.',
          'Prepare quotations.',
          'Issue invoices.',
          'Collect payments.',
          'Install products.',
          'Provide after sale technical support.',
          'Handle complaints or warranty issues.',
        ],
      },
      'Referral commission does not create any employment, agency or partnership relationship between the parties.',
      'Referral Partners operate independent businesses.',
      'Participation in the Referral Partner offer does not grant exclusive rights within any geographical area or customer sector.',
    ],
  },
  {
    title: 'Your Role as a Referral Partner',
    items: [
      'Identify customers who may benefit from our products and services.',
      'Introduce/promote Nivara Ltd to them using our approved marketing material.',
      'Encourage interested customers to contact us directly or arrange an introduction via telephone, email or face-to-face meetings.',
      'Allow Nivara Ltd to handle all technical and commercial discussions.',
      {
        label: 'Once the customer has been introduced, Nivara Ltd will manage the entire sales process, including:',
        items: [
          'Product recommendations',
          'Consultations',
          'Quotations',
          'Billing and invoicing',
          'Payment collection',
          'Product supply',
          'Installation',
          'After sale technical support',
        ],
      },
    ],
  },
  {
    title: 'Commission Payment Conditions',
    intro: [
      'Referral commission becomes payable only after all of the following conditions have been satisfied with respect to the products and/or services offered to your customers by Nivara Ltd.',
    ],
    items: [
      { label: 'Kaspersky Products', items: ['Customer has paid in full.', 'Licence has been supplied.', 'Installation (where purchased) has been completed.'] },
      { label: 'Windows 11 Upgrade', items: ['Upgrade completed successfully.', 'Computer tested.'] },
      { label: 'Hardware Upgrade', items: ['Hardware installed successfully.', 'System operating correctly.'] },
      {
        label: 'Secure Data Wiping',
        items: [
          'Data wiping completed.',
          'Certificate of Data Destruction or written confirmation issued (where applicable).',
          'Service completed.',
        ],
      },
    ],
    outro: [
      'No commission is payable on cancelled or fraudulent orders.',
      'If a customer cancels an order before making a full payment, the associated referral commission will not be payable.',
    ],
  },
  {
    title: 'Payment of Referral Commission',
    items: [
      "Referral commission is paid only to the Referral Partner's registered business bank account.",
      'Payments will not be made to personal bank accounts unless otherwise agreed.',
      'Commission is paid only after all payment conditions have been met.',
      'Nivara Ltd reserves the right to offset any overpayments or incorrect commission payments.',
    ],
  },
  {
    title: 'Customer Payment Policy',
    items: [
      'All quotations and invoices will be issued by Nivara Ltd.',
      'Customers must pay Nivara Ltd directly.',
      'Referral Partners must never collect customer payments.',
      'Customers remain customers of Nivara Ltd throughout the engagement.',
    ],
  },
  {
    title: 'Termination of Partnership',
    items: [
      "Either party may terminate the Referral Partnership by giving at least one week's written notice.",
      {
        label: 'Termination will not affect:',
        items: [
          'Products already purchased with full payment.',
          'Services already scheduled.',
          'Commission already earned on completed qualifying sales.',
        ],
      },
    ],
  },
];

const ReferralBullets: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex gap-2.5 text-[#4B5563] text-[15px] leading-relaxed">
        <CheckCircle2 size={16} className="text-teal-600 shrink-0 mt-1" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Referral = () => {
  const [openTerm, setOpenTerm] = useState<number | null>(0);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="referral"
      data-testid="referral-section"
      className="relative py-28 bg-[#FAFAFA] overflow-hidden border-t border-[#E5E7EB]"
    >
      <div className="absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full bg-[#D90429]/6 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#D90429]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#D90429]">
              Business Referral Offer
            </span>
            <span className="h-px w-10 bg-[#D90429]" />
          </div>
          <h2 className="font-display font-bold text-[#1D3557] text-4xl sm:text-5xl tracking-tight leading-[1.08]">
            Win-Win-Win <span className="text-[#D90429]">(WWW)</span>
          </h2>
          <p className="mt-5 text-[#4B5563] text-lg leading-relaxed">
            Nivara Ltd is proud to introduce a referral partner offer called WWW or Win-Win-Win,
            where everyone is a winner, whether it is you, your customers or us.
          </p>
        </div>

        {/* Services covered */}
        <div className="mb-16">
          <h3 className="font-display font-bold text-2xl text-[#1D3557] mb-2">Business Services Covered</h3>
          <p className="text-[#4B5563] mb-6">The Referral Partner Offer currently applies to the following services:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Kaspersky Authorised Reseller', icon: ShieldCheck },
              { name: 'Windows 11 Upgrade', icon: MonitorUp },
              { name: 'Hardware Upgrades (RAM & Storage)', icon: Cpu },
              { name: 'Secure Data Wiping', icon: Trash2 },
            ].map(({ name, icon: Icon }, i) => (
              <div
                key={name}
                className="flex items-center gap-3 bg-white border border-[#E5E7EB] rounded-2xl p-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D90429]/10 text-[#D90429] flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>
                <span className="font-semibold text-[#1D3557] text-sm leading-snug">
                  {i + 1}. {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Commission schedule */}
        <div className="mb-16">
          <h3 className="font-display font-bold text-2xl text-[#1D3557] mb-6">Referral Commission Schedule*</h3>

          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <ShieldCheck size={20} className="text-[#D90429]" />
                <h4 className="font-display font-bold text-lg text-[#1D3557]">1. Kaspersky Products</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[15px]">
                  <thead>
                    <tr className="border-b border-[#E5E7EB] text-xs uppercase tracking-wider text-[#4B5563]">
                      <th className="py-2.5 pr-4 font-semibold">Product</th>
                      <th className="py-2.5 font-semibold text-right">Referral Commission</th>
                    </tr>
                  </thead>
                  <tbody>
                    {REFERRAL_KASPERSKY_COMMISSION.map((row) => (
                      <tr key={row.product} className="border-b border-[#F5F5F5] last:border-0">
                        <td className="py-3 pr-4 font-medium text-[#1D3557]">{row.product}</td>
                        <td className="py-3 text-right text-[#4B5563]">
                          <span className="font-bold text-[#D90429]">{row.commission}</span> of the total
                          selling price
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-4">
              {REFERRAL_LABOUR_COMMISSION.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <div key={svc.title} className="bg-white border border-[#E5E7EB] rounded-3xl p-6 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={18} className="text-[#D90429]" />
                      <h4 className="font-display font-bold text-[#1D3557]">
                        {i + 2}. {svc.title}
                      </h4>
                    </div>
                    <p className="text-[#4B5563] text-[15px]">
                      <span className="text-2xl font-bold text-[#D90429]">{svc.commission}</span>{' '}
                      <span className="font-semibold text-[#1D3557]">{svc.basis}</span>
                    </p>
                    <p className="text-sm text-[#4B5563] mt-1">
                      Current labour charge: <span className="font-bold text-[#1D3557]">{svc.labour}</span>
                    </p>
                    {svc.note && <p className="text-xs text-[#4B5563]/80 mt-2">({svc.note})</p>}
                  </div>
                );
              })}
            </div>
          </div>

          <p className="mt-6 text-sm text-[#4B5563] leading-relaxed max-w-4xl">
            *Ts&Cs apply. For all Ts&Cs please refer to the <strong>Controlling Factors</strong> section
            below. Although commission on an individual sale may appear modest, it can become a valuable
            source of recurring income as the number of successful referrals grows.
          </p>
        </div>

        {/* Controlling factors */}
        <div className="mb-14">
          <h3 className="font-display font-bold text-2xl text-[#1D3557] mb-6">Controlling Factors</h3>
          <div className="space-y-3">
            {REFERRAL_TERMS.map((term, i) => {
              const isOpen = openTerm === i;
              return (
                <div key={term.title} className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenTerm(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    data-testid={`referral-term-${i + 1}`}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-[#FAFAFA] transition-colors"
                  >
                    <span className="font-display font-bold text-[#1D3557]">
                      {i + 1}. {term.title}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-[#D90429] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 space-y-4">
                          {term.intro && <ReferralBullets items={term.intro} />}
                          {term.items?.map((item) =>
                            typeof item === 'string' ? (
                              <ReferralBullets key={item} items={[item]} />
                            ) : (
                              <div key={item.label}>
                                <p className="font-semibold text-[#1D3557] text-[15px] mb-2">{item.label}</p>
                                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 pl-1">
                                  {item.items.map((sub) => (
                                    <li key={sub} className="flex gap-2 text-[#4B5563] text-sm">
                                      <span className="w-1.5 h-1.5 rounded-sm bg-[#D90429] shrink-0 mt-2" />
                                      {sub}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ),
                          )}
                          {term.outro && <ReferralBullets items={term.outro} />}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#1D3557] rounded-3xl px-8 py-7">
          <div className="flex items-center gap-4 text-white">
            <Handshake size={32} className="text-[#D90429] shrink-0 hidden sm:block" />
            <p className="font-display font-bold text-lg sm:text-xl">Interested in becoming a Referral Partner?</p>
          </div>
          <button
            type="button"
            onClick={scrollToContact}
            data-testid="referral-cta"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#D90429] hover:bg-[#B30321] text-white rounded-full font-semibold transition-colors whitespace-nowrap"
          >
            Contact Us <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  Contact                                                                   */
/* -------------------------------------------------------------------------- */

const Contact = () => {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-28 bg-white overflow-hidden"
    >
      <div className="absolute -top-1 inset-x-0 h-16 rotate-180 pointer-events-none opacity-70">
        <RedRibbon className="w-full h-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#D90429]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#D90429]">
              Get in touch
            </span>
            <span className="h-px w-10 bg-[#D90429]" />
          </div>
          <h2 className="font-display font-bold text-[#1D3557] text-4xl sm:text-5xl tracking-tight leading-[1.08]">
            Let's bring some peace to your IT.
          </h2>
          <p className="mt-5 text-[#4B5563] text-lg leading-relaxed">
            Book a free, no-obligation consultation. We'll listen, take notes and come back with a
            clear, costed plan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="tel:07480506197"
            data-testid="contact-phone"
            className="flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-[#F5F5F5] hover:bg-white hover:shadow-soft-lg border border-transparent hover:border-[#D90429]/20 transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#D90429] text-white flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 transition-all shadow-md">
              <Phone size={24} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest font-semibold text-[#4B5563] mb-2">
                Call us
              </div>
              <div className="font-display font-bold text-[#1D3557] text-xl">
                074 8050 6197
              </div>
            </div>
          </a>

          <a
            href={`mailto:${getEmail()}`}
            data-testid="contact-email"
            className="flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-[#F5F5F5] hover:bg-white hover:shadow-soft-lg border border-transparent hover:border-[#1D3557]/20 transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#1D3557] text-white flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 transition-all shadow-md">
              <Mail size={24} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest font-semibold text-[#4B5563] mb-2">
                Email us
              </div>
              <div className="font-display font-bold text-[#1D3557] text-xl">
                {getEmail()}
              </div>
            </div>
          </a>

          <div className="flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-[#F5F5F5] border border-transparent hover:bg-white hover:shadow-soft-lg hover:border-teal-500/20 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-soft text-teal-600 flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 transition-all">
              <MapPin size={24} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest font-semibold text-[#4B5563] mb-2">
                Location
              </div>
              <div className="font-display font-bold text-[#1D3557] text-xl">
                Serving Hertfordshire
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */

const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="relative bg-white text-[#1D3557] pt-24 pb-10 overflow-hidden border-t border-[#E5E7EB]"
    >
      <div className="absolute -top-1 inset-x-0 h-20 opacity-90 pointer-events-none">
        <RedRibbon className="w-full h-full" />
      </div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#D90429]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 pb-12 border-b border-[#E5E7EB]">
          <div className="lg:col-span-6">
            <Logo testId="footer-logo-link" />
            <p className="mt-5 text-[#1D3557] max-w-sm leading-relaxed">
              UK-based IT consultancy delivering peace, dependable technology for ambitious
              businesses. Digital peace of mind, every day.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <a
                href="tel:07480506197"
                className="inline-flex items-center gap-2 text-[#1D3557] hover:text-[#D90429] transition-colors"
              >
                <Phone size={15} className="text-[#D90429]" /> 074 8050 6197
              </a>
              <a
                href={`mailto:${getEmail()}`}
                className="inline-flex items-center gap-2 text-[#1D3557] hover:text-[#D90429] transition-colors"
              >
                <Mail size={15} className="text-[#D90429]" /> {getEmail()}
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.28em] font-semibold text-[#D90429] mb-5">
              Services
            </div>
            <ul className="space-y-3 text-[#1D3557]">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="hover:text-[#D90429] transition-colors text-sm">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-[#1D3557]">
            © {new Date().getFullYear()} Nivara Ltd. All rights reserved.
          </p>
          <p className="text-[#1D3557] italic">Digital peace of mind, delivered daily.</p>
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
      <Services />
      <Referral />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
