import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden px-4 pt-20"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50 to-fuchsia-50 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-900" />

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg"
        >
          <Sparkles className="h-4 w-4 text-fuchsia-500" />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Available for work
          </span>
        </motion.div>

        {/* Name + title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
        >
          Hi, I'm{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-purple-600 to-fuchsia-600 animate-gradient">
              Akash Patil
            </span>
            <motion.span
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 blur-2xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-fuchsia-600"
            />
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Full-Stack Developer
          </p>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Crafting scalable, efficient, and elegant web applications with{" "}
            <span className="font-semibold text-fuchsia-600 dark:text-fuchsia-400">
              Java
            </span>
            ,{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              Spring Boot
            </span>
            , and{" "}
            <span className="font-semibold text-fuchsia-600 dark:text-fuchsia-400">
              React
            </span>
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              Let's Talk
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl font-semibold border-2 border-slate-200 dark:border-slate-700 hover:border-fuchsia-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Download className="h-5 w-5" />
            Download CV
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex justify-center items-center gap-4"
        >
          <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            Connect with me
          </span>
          <div className="flex gap-3">
            {[
              {
                icon: Github,
                href: "https://github.com/Akashivu-github",
                label: "GitHub",
              },
              { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:akashivu002@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-fuchsia-500 hover:shadow-lg transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="h-5 w-5 text-slate-700 dark:text-slate-300 group-hover:text-fuchsia-600 transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-400 dark:border-slate-600 flex justify-center p-1">
          <div className="w-1.5 h-3 bg-fuchsia-600 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
