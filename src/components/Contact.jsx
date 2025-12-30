'use client';
import { useState } from "react";
import { Mail, Send, MapPin, Github, Linkedin, ArrowRight } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const subject = encodeURIComponent("Portfolio Inquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    
    setTimeout(() => {
      window.location.href = `mailto:akashivu002@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contact" className="relative py-20 px-4 bg-white overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-slate-900" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
              Contact
            </span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-3">
                Let's Work<br />Together
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Available for full-time positions and freelance projects.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a 
                href="mailto:akashivu002@gmail.com"
                className="group flex items-center gap-3 p-4 rounded-xl border-2 border-slate-200 bg-white hover:border-slate-900 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-slate-900 transition-colors">
                  <Mail className="w-4 h-4 text-slate-900 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Email
                  </div>
                  <div className="text-xs font-semibold text-slate-900 truncate">
                    akashivu002@gmail.com
                  </div>
                </div>
              </a>

              <a 
                href="https://github.com/akashivu"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 rounded-xl border-2 border-slate-200 bg-white hover:border-slate-900 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-slate-900 transition-colors">
                  <Github className="w-4 h-4 text-slate-900 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    GitHub
                  </div>
                  <div className="text-xs font-semibold text-slate-900 truncate">
                    github.com/akashivu
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Side - Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Get in Touch
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                I'm actively seeking opportunities to contribute my full-stack expertise.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-100 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-700" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900">
                    Location
                  </div>
                  <div className="text-xs text-slate-600">
                    bangalore, Karnataka
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-100 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-slate-700" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900">
                    Response Time
                  </div>
                  <div className="text-xs text-slate-600">
                    Within 24 hours
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-200">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Connect
              </div>
              <div className="flex gap-2">
                <a
                  href="https://github.com/akashivu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border-2 border-slate-200 hover:border-slate-900 hover:bg-slate-900 text-slate-700 hover:text-white transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border-2 border-slate-200 hover:border-slate-900 hover:bg-slate-900 text-slate-700 hover:text-white transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-6 md:p-8">
              <form onSubmit={onSubmit} className="space-y-5">
                
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder=""
                      className="w-full rounded-lg border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-900 transition-colors font-medium"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder=""
                      className="w-full rounded-lg border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-900 transition-colors font-medium"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>
                
                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full rounded-lg border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-900 transition-colors resize-none font-medium"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                
                {/* Submit Button */}
                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-slate-500">
                    * Required fields
                  </p>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Direct Email Note */}
              <div className="mt-5 pt-5 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Mail className="w-3.5 h-3.5" />
                  <span>
                    Or email directly:{' '}
                    <a 
                      href="mailto:akashivu002@gmail.com" 
                      className="font-semibold text-slate-900 hover:underline"
                    >
                      akashivu002@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}