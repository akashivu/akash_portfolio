'use client';
import { useState } from "react";
import { Mail } from "lucide-react";

export default function Contact(){
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:akashivu002@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact" className="section py-20 px-4 ">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
           Looking for a dedicated Full-Stack Developer? Let’s connect — I’d love to contribute my skills to your team.
          </p>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 md:p-12">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                  <input
                    required
                    type="text"
                    placeholder=""
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3.5 outline-none focus:border-fuchsia-500 dark:focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 text-slate-900 dark:text-white placeholder:text-slate-400 transition-all"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                  <input
                    required
                    type="email"
                    placeholder=""
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3.5 outline-none focus:border-fuchsia-500 dark:focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 text-slate-900 dark:text-white placeholder:text-slate-400 transition-all"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea
                  required
                  rows={6}
                  placeholder=""
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3.5 outline-none focus:border-fuchsia-500 dark:focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 text-slate-900 dark:text-white placeholder:text-slate-400 transition-all resize-none"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
                <a
                  href="mailto:akashivu002@gmail.com"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
                >
                  Or email directly: <span className="font-medium">akashivu002@gmail.com</span>
                </a>
                <button
                  type="submit"
                  className="group/btn relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-700 hover:to-purple-700 shadow-lg shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Send Message
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}