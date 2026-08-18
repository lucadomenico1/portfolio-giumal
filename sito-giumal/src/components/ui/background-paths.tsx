"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.6 + i * 0.04,
  }));

  return (
    <div className="pointer-events-none absolute inset-0">
      <svg
        className="h-full w-full text-violet-500/80"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.18 + path.id * 0.045}
            style={{ filter: "drop-shadow(0 0 10px rgba(168, 85, 247, 0.45))" }}
            initial={{ pathLength: 0.1, opacity: 0.25 }}
            animate={{
              pathLength: [0.25, 1, 0.8],
              opacity: [0.18, 0.95, 0.2],
              pathOffset: [0, 0.9, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 16 + path.id * 0.45,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: path.id * 0.12,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  title = "",
  showCta = false,
  className = "",
}: {
  title?: string;
  showCta?: boolean;
  className?: string;
}) {
  const words = title ? title.split(" ") : [];

  return (
    <div className={`relative h-full w-full overflow-hidden bg-transparent ${className}`}>
      <div className="absolute inset-0 opacity-90">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {title ? (
        <div className="relative z-10 mx-auto flex h-full max-w-5xl items-center justify-center px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="mx-auto max-w-4xl"
          >
            <h1 className="mb-8 text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="mr-4 inline-block last:mr-0">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: wordIndex * 0.08 + letterIndex * 0.03,
                        type: "spring",
                        stiffness: 150,
                        damping: 22,
                      }}
                      className="inline-block bg-gradient-to-r from-white via-violet-200 to-blue-200 bg-clip-text text-transparent"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>

            {showCta && (
              <div className="inline-block overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-px shadow-[0_0_40px_rgba(139,92,246,0.18)] backdrop-blur-md">
                <Button
                  variant="ghost"
                  className="rounded-[1.1rem] border border-violet-200/20 bg-slate-950/80 px-8 py-6 text-lg font-semibold text-white hover:bg-slate-900"
                >
                  <span className="opacity-90 transition-opacity group-hover:opacity-100">
                    Discover Excellence
                  </span>
                  <span className="ml-3 opacity-70 transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100">
                    →
                  </span>
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      ) : null}
    </div>
  );
}
