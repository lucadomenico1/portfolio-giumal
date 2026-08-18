import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { AtSign, PlayCircle, MessageCircle } from "lucide-react";

/* ============================================================================
   GIUMAL — Portfolio one-page
   Stile: Moderno, pulito, colorato ma elegante (Deep Blue / Violet palette).
   Effetti: Global Interactive Spotlight, 3D Magnetic Tilt, External Links.
   ============================================================================ */

/* -------------------------------- PORTFOLIO DATA -------------------------------- */

const WORKS = [
  { 
    id: "01", 
    title: "BEST PROJECTS", 
    cat: "Featured", 
    grad: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)", 
    video: "/video1.mp4",
    url: "https://drive.google.com/drive/folders/1gi5H63NM0e7DcR9p8CDlmsNHC5BabwTn"
  },
  { 
    id: "02", 
    title: "CINEMATIC / SHORT FILMS", 
    cat: "Filmmaking", 
    grad: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)", 
    video: "/video2.mp4",
    url: "https://drive.google.com/drive/folders/1MM6j3H6X2pp20eIBrsaCiZMVg6xYnPZO"
  },
  { 
    id: "03", 
    title: "MUSIC VIDEOS / VISUAL", 
    cat: "Direction", 
    grad: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)", 
    video: "/video3.mp4",
    url:"https://drive.google.com/drive/folders/1yAHNTu-_xL_hlm3bY16dh20G5iKtZeDl"
  },
  { 
    id: "04", 
    title: "ARTISTIC REELS", 
    cat: "Video Art", 
    grad: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)", 
    video: "/video4.mp4",
    url: "https://drive.google.com/drive/folders/1zrbS_bLmNEGVd04LBiIr6-7Tx-CqBjxM"
  },
  { 
    id: "05", 
    title: "GRAPHICS", 
    cat: "Design", 
    grad: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)", 
    video: "/video5.mp4",
    url: "https://drive.google.com/drive/folders/19XKi9uBOk8UWtfwDc5Hujlx05s41sJql"
  },
  { 
    id: "06", 
    title: "SOCIAL CONTENT", 
    cat: "Digital Media", 
    grad: "linear-gradient(135deg, #14b8a6 0%, #3b82f6 100%)", 
    video: "/video6.mp4",
    url: "https://drive.google.com/drive/folders/1umCJK0iAqoUJYnyCf3ZQ8sVBPOlSQ_hk"
  },
];

/* -------------------------- GLOBAL SPOTLIGHT ------------------------------ */

function GlobalSpotlight() {
  const [mousePosition, setMousePosition] = React.useState({ x: -1000, y: -1000 });

  React.useEffect(() => {
    const handleMouseMove = (e) => { setMousePosition({ x: e.clientX, y: e.clientY }); };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[50]"
      style={{ 
        background: `radial-gradient(700px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 80%)` 
      }} 
    />
  );
}

/* -------------------------------- NAV ----------------------------------- */

function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between bg-black/90 px-6 py-5 backdrop-blur-md md:px-12 border-b border-white/5">
      <div className="flex flex-col select-none leading-[0.85] tracking-tighter transition-transform hover:scale-105">
        <span className="font-display text-[22px] text-white">
          GIU<span className="text-violet-500">.</span>
        </span>
        <span className="font-display text-[22px] text-white">
          MAL<span className="font-body text-[9px] text-white/50 align-top ml-1 tracking-normal">®</span>
        </span>
      </div>
      <div className="hidden items-center gap-8 font-body text-sm font-medium text-slate-400 md:flex">
        <a href="#work" className="hover:text-white transition-colors">Work</a>
        <a href="#artist" className="hover:text-white transition-colors">Artist</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
      <a href="#contact" className="rounded-full bg-violet-700 px-5 py-2 font-body text-sm font-medium text-white transition-colors hover:bg-violet-600 hover:scale-105 border border-violet-500/30">
        Let's Work
      </a>
    </nav>
  );
}

/* -------------------------------- HERO ----------------------------------- */

function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 50, damping: 30 });
  const springY = useSpring(y, { stiffness: 50, damping: 30 });
  
  const flareX = useTransform(springX, [-0.5, 0.5], ["-3%", "3%"]);
  const flareY = useTransform(springY, [-0.5, 0.5], ["-15px", "15px"]);
  const flareRotate = useTransform(springX, [-0.5, 0.5], ["-1.5deg", "1.5deg"]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  }

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-black"
    >
      {/* 1. SFONDO ANIMATO CON SFUMATURE VIOLA */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/30 via-black to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent"></div>
        
        {/* Animated gradient orbs */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px]"
        />
      </div>

      {/* 2. PARTICLES EFFECT */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-violet-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* 3. ANAMORPHIC LENS FLARE */}
      <motion.div 
        style={{ x: flareX, y: flareY, rotate: flareRotate }}
        className="pointer-events-none absolute left-[-20%] right-[-20%] top-1/2 z-0 flex -translate-y-1/2 items-center justify-center"
      >
        <div className="absolute h-[2px] w-full bg-cyan-300 opacity-80 blur-[1px]" />
        <div className="absolute h-[15px] w-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent blur-[6px]" />
        <div className="absolute h-[80px] w-full bg-gradient-to-r from-transparent via-violet-600/30 to-transparent blur-[25px]" />
      </motion.div>

      {/* 4. IL TESTO PRINCIPALE */}
      <div className="relative z-10 flex flex-col items-center px-5 text-center mix-blend-plus-lighter">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{
            x: [0, -10, 10, -10, 10, 0],
            y: [0, -5, 5, -5, 5, 0],
            skewX: [0, -5, 5, -5, 5, 0],
            skewY: [0, -3, 3, -3, 3, 0],
            scale: [1, 1.05, 0.95, 1.05, 0.95, 1],
            filter: ["blur(0px)", "blur(3px)", "blur(0px)", "blur(2px)", "blur(0px)"],
            textShadow: [
              "0 0 25px rgba(139,92,246,0.3)",
              "4px 0 rgba(255,0,0,0.9), -4px 0 rgba(0,255,255,0.9)",
              "0 0 25px rgba(139,92,246,0.3)",
              "6px 0 rgba(255,0,0,0.7), -6px 0 rgba(0,255,255,0.7)",
              "0 0 25px rgba(139,92,246,0.3)"
            ],
            transition: { duration: 0.25 }
          }}
          className="font-display text-[18vw] font-bold leading-none text-white md:text-[12vw] drop-shadow-[0_0_25px_rgba(139,92,246,0.3)] cursor-pointer"
        >
          GIUMAL
        </motion.h1>
      </div>
    </section>
  );
}

/* ------------------------------ WORK CARD --------------------------------- */

function WorkCard({ item }) {
  const x = useMotionValue(0); 
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct); y.set(yPct);
  }

  function handleMouseLeave() { x.set(0); y.set(0); }

  return (
    <div style={{ perspective: 1000 }}>
      <motion.a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative flex aspect-video w-full flex-col justify-end overflow-hidden rounded-xl bg-slate-900 p-6 shadow-2xl md:aspect-[4/3] border border-white/5"
      >
        {/* Contenitore Video + Gradiente con fix per Mobile */}
        <div className="absolute inset-0" style={{ transform: "translateZ(0px)" }}>
          {item.video && (
            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-50 md:opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-60"
            />
          )}
          {/* Il gradiente colorato che si fonde con il video */}
          <div 
            className="absolute inset-0 opacity-80 md:opacity-40 mix-blend-color transition-opacity duration-500 group-hover:opacity-100" 
            style={{ background: item.grad }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90 md:opacity-80" />
        </div>

        {/* Testi 3D */}
        <div className="relative z-10 flex items-end justify-between transition-transform duration-300" style={{ transform: "translateZ(40px)" }}>
          <div>
            <span className="mb-2 block font-body text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-white/90">{item.cat}</span>
            <h3 className="font-display text-2xl font-bold text-white md:text-3xl drop-shadow-lg">{item.title}</h3>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all group-hover:bg-white group-hover:text-slate-900 group-hover:scale-110 shadow-lg">
            <PlayCircle size={24} />
          </div>
        </div>
      </motion.a>
    </div>
  );
}

function WorkSection() {
  return (
    <motion.section 
      id="work" 
      className="bg-black px-6 py-20 md:px-12 md:py-32 border-t border-white/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5 }}
    >
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="font-display text-4xl font-bold text-white md:text-5xl tracking-tight">Selected Works</h2>
      </motion.div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {WORKS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <WorkCard item={item} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

/* ------------------------------ THE ARTIST --------------------------------- */

function ArtistSection() {
  return (
    <motion.section 
      id="artist" 
      className="bg-black px-6 py-20 overflow-hidden relative md:px-12 md:py-32 border-t border-white/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-900/15 via-black to-black"></div>
      <motion.div 
        className="relative mx-auto max-w-3xl text-center z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <motion.div 
          className="mb-8 h-24 w-24 mx-auto rounded-full bg-gradient-to-br from-violet-600 to-blue-600 p-1 shadow-[0_0_50px_rgba(139,92,246,0.4)]"
          initial={{ opacity: 0, rotate: -180 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="h-full w-full rounded-full bg-black"></div>
        </motion.div>
        <motion.h2 
          className="mb-6 font-display text-3xl font-bold text-white md:text-4xl tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          The Artist
        </motion.h2>
        <motion.div 
          className="font-body text-lg leading-loose text-slate-400 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p className="text-white">I transform ideas into cinematic visions</p>
          <p className="my-2">Art Director / Video editor / CGI / VFX / AI</p>
          <p>
            Member of{" "}
            <a href="https://instagram.com/movie.brats.productions" target="_blank" rel="noreferrer" className="text-violet-400 underline decoration-violet-400/30 underline-offset-4 transition-colors hover:text-violet-300">
              @movie.brats.productions
            </a>
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

/* -------------------------------- FOOTER ------------------------------------ */

function Footer() {
  return (
    <motion.footer 
      id="contact" 
      className="bg-black px-6 py-24 md:px-12 md:py-32 border-t border-white/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5 }}
    >
      <motion.div 
        className="mb-20 flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.h2 
          className="mb-14 font-display text-5xl font-bold text-white md:text-7xl tracking-tight"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Let's create together.
        </motion.h2>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <motion.a
            href="mailto:hello@giumal.studio"
            className="relative z-10 inline-flex items-center justify-center rounded-full bg-violet-700 px-7 py-3 font-body text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] border border-violet-500/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Initiate Contact
          </motion.a>

          <motion.a
            href="https://wa.me/393395094821"
            target="_blank"
            rel="noreferrer"
            className="relative z-10 inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-7 py-3 font-body text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_0_40px_rgba(34,197,94,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-[0_0_50px_rgba(34,197,94,0.6)] border border-green-500/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <MessageCircle size={18} />
            WhatsApp
          </motion.a>
        </div>
      </motion.div>

      <motion.div 
        className="flex flex-col items-center justify-between border-t border-white/10 pt-8 font-body text-sm text-slate-500 md:flex-row relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="https://instagram.com/_giumal_" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <AtSign size={16} /> @_giumal_
          </a>
        </div>
        <div>
          <span className="text-slate-600">GIUMAL © 2026 — All rights reserved</span>
        </div>
      </motion.div>
    </motion.footer>
  );
}

/* --------------------------------- APP -------------------------------------- */

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-black font-body text-white selection:bg-violet-500 selection:text-white">
      <GlobalSpotlight />
      <Nav />
      <main>
        <Hero />
        <WorkSection />
        <ArtistSection />
      </main>
      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;800&family=Inter:wght@400;500;600&display=swap');
        html { scroll-behavior: smooth; }
        .font-display { font-family: 'Outfit', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #2a2a2a; }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; scroll-behavior: auto !important; }
        }
      `}</style>
    </div>
  );
}