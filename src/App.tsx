/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Server, 
  BarChart3, 
  Headset, 
  CheckCircle2, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Users2,
  ExternalLink,
  Award,
  Globe
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-white flex items-center gap-2">
          <div className="w-10 h-10 bg-electric rounded-lg flex items-center justify-center font-black italic">N</div>
          <span>Nivara Ltd</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white/80 hover:text-white font-medium transition-colors text-sm uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-electric hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-electric/30 active:scale-95"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-navy border-t border-white/10 p-6 md:hidden flex flex-col gap-4 text-center"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white py-3 text-lg font-medium border-b border-white/5 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-electric text-white py-4 rounded-xl font-bold mt-2"
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-electric/20" />
        <div className="absolute inset-0 bg-grid-white opacity-20" />
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-electric/10 border border-electric/20 rounded-full text-electric text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric"></span>
            </span>
            Expert IT Consultancy
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            Smart IT Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-blue-400">Modern Businesses</span>
          </h1>
          <p className="text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
            Bridging the gap between complex technology and strategic business growth with high-end consultancy and managed services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-4 bg-electric hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-xl shadow-electric/20 transition-all flex items-center justify-center gap-2 group">
              Get in Touch <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-xl font-bold text-lg transition-all text-center backdrop-blur-sm">
              Our Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" 
              alt="Team collaborating" 
              className="w-full opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-electric/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-electric"></div>
            <span className="text-electric font-bold tracking-widest text-xs uppercase">Precision & Excellence</span>
          </div>
          <h2 className="text-4xl font-bold text-navy">Our Core Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Custom Software Development */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-xl transition-all"
          >
            <div className="p-10 flex flex-col justify-between md:w-3/5">
              <div>
                <div className="flex gap-2 mb-6">
                  <Code2 className="text-electric" size={24} />
                  <div className="w-1.5 h-1.5 rounded-full bg-electric/20 self-center"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-electric/20 self-center"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-navy">Custom Software Development</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Tailored application architecture designed to streamline your unique business workflows and boost operational efficiency.
                </p>
              </div>
              <a href="#contact" className="text-electric font-bold flex items-center gap-2 group text-sm uppercase tracking-wider">
                Learn More <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="md:w-2/5 relative min-h-[250px] p-6 bg-slate-100 flex items-center">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/20">
                <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=600" alt="Code" />
              </div>
              <div className="absolute inset-0 bg-dot-pattern opacity-10" />
            </div>
          </motion.div>

          {/* Infrastructure & Hardware */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-navy rounded-2xl p-10 flex flex-col justify-between text-white shadow-xl"
          >
            <div>
              <Server className="text-white mb-8" size={32} />
              <h3 className="text-2xl font-bold mb-4">Infrastructure & Hardware</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Robust server solutions and network architecture that provide the backbone for your digital enterprise.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '65%' }}
                  className="h-full bg-electric"
                />
              </div>
              <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-white/40">
                <span>Operational</span>
                <span>Tier 3+ Ready</span>
              </div>
            </div>
          </motion.div>

          {/* Strategic Consultancy */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl border border-slate-200 p-10 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-8">
              <BarChart3 className="text-electric" size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-navy">Strategic Consultancy</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Expert advisory services to align your technology roadmap with long-term business objectives and digital transformation.
            </p>
          </motion.div>

          {/* Managed IT Support */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-electric rounded-2xl p-10 text-white flex flex-col md:flex-row items-center gap-10 shadow-xl"
          >
            <div className="md:w-3/5">
              <div className="inline-block px-3 py-1 bg-white/10 rounded-md text-[10px] font-bold uppercase tracking-widest mb-6 border border-white/20">
                Live 24/7
              </div>
              <h3 className="text-3xl font-bold mb-4">24/7 Managed IT Support</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Proactive monitoring and rapid response support to ensure your business remains operational around the clock without interruption.
              </p>
              <a href="#contact" className="inline-block px-6 py-2.5 bg-white text-electric rounded-lg font-bold text-sm shadow-lg hover:shadow-white/20 transition-all">
                View Support Plans
              </a>
            </div>
            <div className="md:w-2/5">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-sm">
                <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600" alt="Support" className="rounded-lg" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ReliabilitySection = () => {
  const stats = [
    { value: "99.9%", label: "Uptime SLA", detail: "Guaranteed availability" },
    { value: "15m", label: "Avg. Response", detail: "Market-leading speed" },
    { value: "500+", label: "Projects Delivered", detail: "Proven track record" },
    { value: "15+", label: "Years Expertise", detail: "Industry veterans" }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-electric"></div>
              <span className="text-electric font-bold tracking-widest text-xs uppercase">Unwavering Reliability</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              Why Global Enterprises Trust Nivara
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-xl">
              We don't just fix problems; we engineer resilience. Our team of certified experts brings decades of experience in the UK IT landscape to your specific challenges.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-electric/10 text-electric rounded-lg flex items-center justify-center shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1 text-sm uppercase tracking-wider">ISO 27001 Certified</h4>
                  <p className="text-slate-500 text-xs italic">Meeting the highest international standards for information security management.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-electric/10 text-electric rounded-lg flex items-center justify-center shrink-0">
                  <Users2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1 text-sm uppercase tracking-wider">Dedicated Account Managers</h4>
                  <p className="text-slate-500 text-xs">A single point of contact who understands your business as well as you do.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-electric/20 hover:shadow-lg transition-all text-center"
              >
                <div className="text-4xl font-bold text-electric mb-2 tracking-tight">{stat.value}</div>
                <div className="font-bold text-navy text-xs uppercase tracking-widest mb-2">{stat.label}</div>
                <div className="text-slate-400 text-[10px] uppercase font-medium">{stat.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StrategicFramework = () => {
  const steps = [
    {
      title: "Discovery & Audit",
      desc: "A forensic analysis of existing infrastructure to identify bottlenecks and optimization pathways for high-stakes enterprise environments.",
      icon: <Globe className="text-electric" size={20} />
    },
    {
      title: "Precision Architecture",
      desc: "Designing resilient, future-proof systems that leverage modern cloud-native principles and rigorous security protocols.",
      icon: <ShieldCheck className="text-electric" size={20} />
    },
    {
      title: "Seamless Integration",
      desc: "Executing deployment with minimal disruption, ensuring new solutions integrate perfectly with existing mission-critical operations.",
      icon: <Users2 className="text-electric" size={20} />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-electric"></div>
            <span className="text-electric font-bold tracking-widest text-xs uppercase">Our Methodology</span>
          </div>
          <h2 className="text-4xl font-bold text-navy">The Nivara Strategic Framework</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-slate-50 rounded-2xl border border-slate-100 relative group hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-electric/10 transition-colors">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-navy">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const team = [
    { name: "Jameson Thorne", role: "Managing Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
    { name: "Sarah Wickham", role: "Chief Technology Officer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Marcus Sterling", role: "Head of Infrastructure", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { name: "Eleanor Vance", role: "Strategy Director", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-electric"></div>
              <span className="text-electric font-bold tracking-widest text-xs uppercase">Elite Professionals</span>
            </div>
            <h2 className="text-4xl font-bold text-navy">The Minds Behind Nivara</h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm leading-relaxed">
            Our team is comprised of senior architects and domain experts with a shared commitment to technical discipline and professional integrity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-lg group-hover:shadow-electric/20 transition-all">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-xl font-bold text-navy group-hover:text-electric transition-colors">{member.name}</h4>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-navy rounded-3xl relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <ShieldCheck size={120} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-6 z-10 max-w-2xl">Ready to elevate your technical standards?</h3>
          <p className="text-white/60 mb-10 z-10 max-w-xl italic">Partner with Nivara for unparalleled technical consultancy and architectural precision. Let's discuss your next mission-critical objective.</p>
          <div className="flex flex-wrap justify-center gap-4 z-10 w-full">
             <a href="#contact" className="px-10 py-4 bg-electric hover:bg-blue-700 text-white rounded-xl font-bold text transition-all shadow-xl shadow-electric/20">
              Schedule a Consultation
            </a>
            <button className="px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-xl font-bold transition-all backdrop-blur-sm">
              Download Capability Statement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-bold text-navy mb-8">Connect with Our Experts.</h2>
            <p className="text-slate-600 mb-12 text-lg leading-relaxed">
              Nivara Ltd provides high-end IT consultancy for technical stakeholders and C-suite executives. Reach out today to discuss your digital transformation journey.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-navy uppercase mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-electric/20 focus:border-electric transition-all outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy uppercase mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-electric/20 focus:border-electric transition-all outline-none" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-navy uppercase mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+44 (0) 20 7946 0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-electric/20 focus:border-electric transition-all outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy uppercase mb-2">Message</label>
                <textarea 
                  rows={4} 
                  required
                  placeholder="How can our consultancy help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-electric/20 focus:border-electric transition-all outline-none resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={submitted}
                className={`w-full py-5 rounded-xl font-bold text-lg transition-all shadow-xl ${submitted ? 'bg-green-500 text-white shadow-green-200' : 'bg-electric hover:bg-blue-700 text-white shadow-electric/20 hover:-translate-y-1 active:scale-[0.98]'}`}
              >
                {submitted ? 'Inquiry Sent Successfully!' : 'Submit Inquiry'}
              </button>
            </form>
          </div>

          <div className="space-y-12 lg:pl-12">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">Direct Contact</h3>
              <div className="space-y-4">
                <a href="mailto:hello@nivaraltd.com" className="flex items-center gap-4 text-slate-600 hover:text-electric transition-colors">
                  <div className="w-10 h-10 bg-electric/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-electric" />
                  </div>
                  hello@nivaraltd.com
                </a>
                <a href="tel:+442079460000" className="flex items-center gap-4 text-slate-600 hover:text-electric transition-colors">
                  <div className="w-10 h-10 bg-electric/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-electric" />
                  </div>
                  +44 (0) 20 7946 0000
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy mb-6 text-center lg:text-left">Headquarters</h3>
              <div className="flex items-start gap-4 text-slate-600">
                <div className="w-10 h-10 bg-electric/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-electric" />
                </div>
                <p className="leading-relaxed">
                  Level 42, The Shard<br />
                  32 London Bridge St<br />
                  London SE1 9SG<br />
                  United Kingdom
                </p>
              </div>
              <div className="mt-8 relative rounded-2xl overflow-hidden h-64 border border-slate-200 shadow-sm bg-slate-100 group">
                <div className="absolute inset-0 bg-dot-pattern opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-4 bg-white rounded-xl shadow-xl border border-slate-100 flex flex-col items-center gap-2">
                    <div className="w-8 h-8 bg-electric text-white rounded-lg flex items-center justify-center">
                      <MapPin size={16} />
                    </div>
                    <span className="text-xs font-bold text-navy uppercase tracking-widest">Nivara HQ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#home" className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-electric rounded-lg flex items-center justify-center font-black italic">N</div>
              <span>Nivara Ltd</span>
            </a>
            <p className="text-white/60 mb-8 max-w-sm leading-relaxed">
              Premium IT Consultancy for modern enterprises. Precision-engineered solutions for software, hardware, and strategic growth across the UK.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-electric transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-electric transition-colors">
                <ShieldCheck size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-electric transition-colors">
                 <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Internal Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#home" className="hover:text-electric transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-electric transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-electric transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-electric transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Legal & Support</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-electric transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Modern Slavery Statement</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            © 2026 Nivara Ltd. All rights reserved. Registered in England & Wales.
          </p>
          <div className="flex gap-6 text-white/40 text-sm">
             <span>Level 42, The Shard, London</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-electric text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 transition-all active:scale-90"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const EliteMindset = () => {
  return (
    <section className="py-24 bg-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-electric"></div>
              <span className="text-electric font-bold tracking-widest text-xs uppercase">Our Identity</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Elite Technical Mindset for Modern Enterprise.
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              We bridge the gap between complex engineering challenges and strategic business objectives with unwavering precision and British corporate excellence.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-electric mb-1">15+</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-white/40">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-electric mb-1">450+</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-white/40">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-electric mb-1">98%</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-white/40">Client Retention</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" alt="Building Architecture" className="w-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const DarkCTA = () => {
  return (
    <section className="py-20 bg-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-white opacity-5" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Digital Future?</h2>
        <p className="text-white/60 mb-10 max-w-2xl mx-auto italic text-sm">
          Schedule a free consultation with our senior consultants to audit your current IT infrastructure and identify growth opportunities.
        </p>
        <a href="#contact" className="inline-block px-10 py-4 bg-electric hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-xl shadow-electric/20 active:scale-95">
          Book Consultation
        </a>
      </div>
    </section>
  );
};

const DataClarity = () => {
  return (
    <section className="py-24 bg-navy text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/10 skew-x-12 translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-10 leading-tight">Empowering Enterprise Decisions with Data Clarity</h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="text-4xl font-bold text-electric">99.9%</div>
              <div>
                <h4 className="font-bold text-lg mb-1">System Uptime</h4>
                <p className="text-white/40 text-sm">Guaranteed availability for critical infrastructure components.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-4xl font-bold text-electric">15m</div>
              <div>
                <h4 className="font-bold text-lg mb-1">Response Time</h4>
                <p className="text-white/40 text-sm">Average incident reaction time for enterprise support clients.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-slate-800 rounded-2xl p-4 border border-white/10 shadow-3xl">
            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="ml-auto text-[10px] text-white/20 uppercase tracking-widest font-bold">Live Infrastructure Status</div>
            </div>
            <div className="space-y-4">
              <div className="h-4 w-3/4 bg-white/5 rounded" />
              <div className="h-4 w-full bg-white/5 rounded" />
              <div className="h-4 w-2/3 bg-white/5 rounded" />
              <div className="h-32 w-full bg-electric/10 rounded flex items-end p-4 gap-2">
                <div className="flex-1 bg-electric/40 h-[40%]" />
                <div className="flex-1 bg-electric/40 h-[60%]" />
                <div className="flex-1 bg-electric/40 h-[90%]" />
                <div className="flex-1 bg-electric/40 h-[70%]" />
                <div className="flex-1 bg-electric/40 h-[50%]" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 p-4 bg-navy border border-white/10 rounded-xl shadow-xl flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-[10px] uppercase font-bold tracking-widest">Operational</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Services />
      <ReliabilitySection />
      <DataClarity />
      <DarkCTA />
      <EliteMindset />
      <StrategicFramework />
      <TeamSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
