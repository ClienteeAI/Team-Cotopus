/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Clock, 
  Zap, 
  ArrowRight, 
  PlayCircle, 
  ShieldCheck, 
  BarChart3,
  Download,
  Mail,
  Building2,
  Quote,
  ChevronLeft,
  ChevronRight,
  Star
} from 'lucide-react';

const testimonials = [
  {
    name: "Marek Svoboda",
    role: "CEO, TechFlow s.r.o.",
    content: "Díky Team Octopus jsme zkrátili náborový proces o 2 týdny. AI screening je neuvěřitelně přesný a šetří nám desítky hodin měsíčně.",
    rating: 5
  },
  {
    name: "Lucie Novotná",
    role: "HR Manager, Creative Studio",
    content: "Kandidáti si pochvalují možnost absolvovat pohovor kdykoliv. Pro nás to znamená, že dostáváme jen ty nejmotivovanější lidi.",
    rating: 5
  },
  {
    name: "Petr Kučera",
    role: "Zakladatel, Startup Hub",
    content: "Jako majitel firmy jsem dělal nábor sám. S tímto nástrojem jsem získal zpět svůj volný čas a přitom našel skvělé lidi.",
    rating: 5
  }
];

export default function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    hiringVolume: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Děkujeme za zájem! Budeme vás kontaktovat ohledně dema.');
  };

  return (
    <div className="min-h-screen relative">
      <div className="atmosphere" />
      
      {/* Sticky CTA - Bottom Bar */}
      <AnimatePresence>
        {scrolled && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl"
          >
            <div className="glass-dark rounded-2xl p-4 flex items-center justify-between shadow-2xl">
              <div className="hidden sm:block">
                <p className="text-white font-bold text-sm">Připraveni ušetřit čas?</p>
                <p className="text-white/60 text-xs">Vyzkoušejte Team Octopus zdarma.</p>
              </div>
              <a href="#demo" className="bg-accent text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2">
                Chci demo zdarma
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`glass rounded-2xl px-6 flex justify-between items-center h-16 shadow-lg transition-all ${scrolled ? 'bg-white/90' : 'bg-white/40'}`}>
            <div className="flex items-center">
              <span className="font-bold text-xl tracking-tight text-primary">Team Octopus</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-semibold text-text-main hover:text-primary transition-colors">Funkce</a>
              <a href="#testimonials" className="text-sm font-semibold text-text-main hover:text-primary transition-colors">Ohlasy</a>
              <a href="#demo" className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Vyzkoušet zdarma
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Width */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-8 border border-primary/10">
                <Star className="w-3 h-3 fill-primary" />
                AI náborová revoluce
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-8 tracking-tight leading-[1.1]">
                AI předvýběr, který vám <span className="text-secondary">vrátí čas</span>
              </h1>
              <p className="text-xl text-text-muted mb-10 leading-relaxed max-w-xl">
                Kandidáti absolvují první pohovor s umělou inteligencí přes video. 
                Vy dostáváte jen ty nejlepší. Automaticky, 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#demo" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-primary/30 flex items-center justify-center gap-2">
                  Vyzkoušet demo zdarma
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#features" className="glass bg-white/40 text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/60 transition-colors flex items-center justify-center gap-2">
                  Jak to funguje?
                </a>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-white shadow-md" referrerPolicy="no-referrer" alt="User" />
                  ))}
                </div>
                <p className="text-sm font-medium text-text-muted">
                  <span className="text-primary font-bold">500+ firem</span> už šetří čas s námi
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 glass rounded-[2.5rem] p-4 shadow-2xl border-white/40">
                <div className="aspect-video bg-gray-900 rounded-[2rem] overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    alt="AI Interview"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:scale-110 transition-transform">
                      <PlayCircle className="text-white w-12 h-12" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 glass-dark p-4 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-xs font-bold uppercase tracking-widest opacity-60">Právě probíhá</p>
                        <p className="text-white font-medium">AI Screening: Junior Developer</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-white text-xs font-bold">LIVE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements for depth */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - 3 Column Layout */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Předvýběr, který nespí</h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Náš systém se postará o první kontakt, zatímco vy se věnujete strategické práci.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Dostupnost 24/7",
                desc: "Kandidáti mohou absolvovat pohovor kdykoliv – i o víkendu nebo ve 2 ráno. Žádné domlouvání termínů."
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Objektivní hodnocení",
                desc: "AI hodnotí všechny kandidáty podle stejných kritérií. Žádné nevědomé předsudky, jen fakta."
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Chytré reporty",
                desc: "Získáte okamžitý přehled o nejlepších kandidátech včetně skóre a klíčových postřehů."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="layered-card glass p-10 rounded-[2.5rem] shadow-xl border-white/50"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-text-muted leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonial Carousel */}
      <section id="testimonials" className="py-32 bg-primary/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Důvěřují nám lídři v oboru</h2>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="glass p-12 md:p-20 rounded-[3rem] shadow-2xl border-white/40 relative overflow-hidden">
              <Quote className="absolute top-10 left-10 w-20 h-20 text-primary/5 -z-10" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <div className="flex justify-center gap-1 mb-8">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-2xl md:text-3xl font-medium text-primary mb-10 leading-relaxed italic">
                    "{testimonials[activeTestimonial].content}"
                  </p>
                  <div>
                    <p className="text-xl font-bold text-primary">{testimonials[activeTestimonial].name}</p>
                    <p className="text-text-muted font-medium">{testimonials[activeTestimonial].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center gap-4 mt-10">
              <button onClick={prevTestimonial} className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
              <button onClick={nextTestimonial} className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA / Demo Form */}
      <section id="demo" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-[3rem] shadow-2xl border-white/40 overflow-hidden grid md:grid-cols-2">
            <div className="bg-primary p-12 md:p-16 text-white flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6">Začněte šetřit čas ještě dnes</h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                Připojte se k moderním firmám, které už neplýtvají časem na neefektivní screening.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-6 h-6" />
                  <span className="font-medium">Nastavení do 24 hodin</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-6 h-6" />
                  <span className="font-medium">Bez nutnosti platební karty</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-6 h-6" />
                  <span className="font-medium">Podpora v češtině</span>
                </div>
              </div>
            </div>
            
            <div className="p-12 md:p-16 bg-white/40 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Jméno</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all bg-white/60"
                    placeholder="Jan Novák"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all bg-white/60"
                    placeholder="jan@firma.cz"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Firma</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all bg-white/60"
                    placeholder="Název vaší firmy"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
                  Chci demo zdarma
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center">
            <span className="font-bold text-xl tracking-tight text-primary">Team Octopus</span>
          </div>
          
          <div className="flex gap-10 text-sm font-bold text-text-muted">
            <a href="#" className="hover:text-primary transition-colors">Ochrana údajů</a>
            <a href="#" className="hover:text-primary transition-colors">Podmínky</a>
            <a href="#" className="hover:text-primary transition-colors">Kontakt</a>
          </div>
          
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Team Octopus. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </div>
  );
}
