import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const res = await axios.post(
        "https://portfolio-backend-nine-ochre-99.vercel.app/visitor/visitor-message",
        data
      );

      if (res.status === 200) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Send message error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kushbhardwaj8800@gmail.com",
      href: "mailto:kushbhardwaj8800@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9654165886",
      href: "tel:+919654165886",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New Delhi, India",
      href: "https://maps.google.com",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/kush-bhardwaj",
      icon: Github,
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kushbhardwajdev05",
      icon: Linkedin,
      color: "hover:text-cyan-300",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/kush_bhardwaj_05",
      icon: Instagram,
      color: "hover:text-orange-300",
    },
  ];

  return (
    <div className="relative pt-24">
      <section className="section-wrap py-16 sm:py-20">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="space-y-6"
          >
            <span className="eyebrow">Contact</span>
            <h1 className="section-title max-w-4xl">
              Have a project in mind? Let&apos;s shape something memorable.
            </h1>
            <p className="section-copy max-w-3xl">
              Whether you need a portfolio-quality landing page, a polished product
              UI, or a full-stack implementation, I&apos;m open to thoughtful
              collaborations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-wrap pb-24">
        <div className="section-inner">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="surface-card-strong p-8">
                <h2 className="text-3xl font-bold text-white">Let&apos;s connect</h2>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  I enjoy working with founders, teams, and businesses that care
                  about great product presentation, clear UX, and reliable delivery.
                </p>
                <div className="mt-8 grid gap-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
                      >
                        <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-[#76f0d6] group-hover:scale-110">
                          <Icon size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold text-white">{info.label}</h3>
                          <p className="text-gray-400 transition-colors group-hover:text-gray-300">
                            {info.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="surface-card p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">Follow me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`rounded-full border border-white/10 bg-white/5 p-3 text-gray-400 ${social.color} transition-all duration-300 hover:border-white/20 hover:bg-white/10`}
                        aria-label={social.name}
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="surface-card p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <MessageCircle className="text-[#ff9b67]" size={24} />
                  <h3 className="text-lg font-semibold text-white">Quick Response</h3>
                </div>
                <p className="text-slate-300">
                  I typically respond within 24 hours. For urgent inquiries,
                  reach out via phone or LinkedIn.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="surface-card-strong p-8"
            >
              <h2 className="mb-6 text-2xl font-bold text-white">Send Message</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm text-gray-300">Full Name *</label>
                  <input
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                      minLength: { value: 2, message: "Min 2 characters" },
                    })}
                    className="field"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 flex items-center gap-1 text-sm text-red-400">
                      <AlertCircle size={14} /> {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300">Email Address *</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email",
                      },
                    })}
                    className="field"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 flex items-center gap-1 text-sm text-red-400">
                      <AlertCircle size={14} /> {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300">Subject</label>
                  <input
                    type="text"
                    {...register("subject")}
                    className="field"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300">Message *</label>
                  <textarea
                    rows={5}
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "At least 10 characters",
                      },
                    })}
                    className="field resize-none"
                    placeholder="Tell me about your project or just say hello."
                  />
                  {errors.message && (
                    <p className="mt-1 flex items-center gap-1 text-sm text-red-400">
                      <AlertCircle size={14} /> {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <Send size={18} />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-2xl border border-green-400/20 bg-green-400/10 p-4 text-green-200"
                  >
                    <CheckCircle size={20} /> Message sent successfully!
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-red-200"
                  >
                    <AlertCircle size={20} /> Something went wrong. Try again.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
