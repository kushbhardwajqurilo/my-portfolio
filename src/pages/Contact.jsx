"use client";

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
      // Send data to your backend API
      const res = await axios.post(
        "http://localhost:4001/visitor/visitor-message",
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
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/kush_bhardwaj_05",
      icon: Instagram,
      color: "hover:text-pink-400",
    },
  ];

  return (
    <div className="relative min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear
              from you. Let's create something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Let's Connect
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Whether you have a question about my work, want to discuss a
                  potential project, or just want to say hello, I'm always open
                  to connecting with fellow developers and entrepreneurs.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
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
                      className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {info.label}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Follow Me
                </h3>
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
                        className={`p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/10 hover:border-white/20`}
                        aria-label={social.name}
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Response */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="text-blue-400" size={24} />
                  <h3 className="text-lg font-semibold text-white">
                    Quick Response
                  </h3>
                </div>
                <p className="text-gray-300">
                  I typically respond within 24 hours. For urgent inquiries,
                  reach out via phone or LinkedIn.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">
                Send Message
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                      minLength: { value: 2, message: "Min 2 characters" },
                    })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email",
                      },
                    })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    {...register("subject")}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "At least 10 characters",
                      },
                    })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send size={18} />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {/* Status */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 flex items-center gap-2"
                  >
                    <CheckCircle size={20} /> Message sent successfully!
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 flex items-center gap-2"
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
