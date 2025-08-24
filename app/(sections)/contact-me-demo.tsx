"use client";

import React, { useEffect, useRef, useState } from "react";
import { Open_Sans } from "next/font/google";

const open = Open_Sans({ subsets: ["latin"] });

export default function ContactMeDemo() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slidein");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      // Demo: Simulate success 90% of the time
      const isSuccess = Math.random() > 0.1;

      if (isSuccess) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. (Demo mode - no actual email sent)",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Simulated error");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again. (Demo mode)",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id='contact'
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 ${open.className}`}
    >
      <div className='max-w-6xl mx-auto w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Contact Info */}
          <div
            className='space-y-8 opacity-0 animate-slidein'
            style={{ animationDelay: "300ms" }}
          >
            <div>
              <h1 className='text-responsive-5xl font-bold text-white mb-6 leading-tight'>
                Let&apos;s <span className='gradient-text'>Connect</span>
              </h1>
              <p className='text-xl text-gray-300 leading-relaxed'>
                Ready to bring your ideas to life? I&apos;m always excited to
                work on new projects and collaborate with passionate teams.
                Let&apos;s discuss how we can create something amazing together.
              </p>
            </div>

            {/* Contact Methods */}
            <div className='space-y-6'>
              <div className='glass-effect rounded-xl p-6 hover-lift'>
                <div className='flex items-center space-x-4'>
                  <div className='text-[#00B2EB] text-2xl'>📧</div>
                  <div>
                    <h3 className='text-white font-semibold text-lg'>Email</h3>
                    <p className='text-gray-300'>romel.rey.silva@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className='glass-effect rounded-xl p-6 hover-lift'>
                <div className='flex items-center space-x-4'>
                  <div className='text-[#D05151] text-2xl'>💼</div>
                  <div>
                    <h3 className='text-white font-semibold text-lg'>
                      LinkedIn
                    </h3>
                    <p className='text-gray-300'>linkedin.com/in/sromelrey</p>
                  </div>
                </div>
              </div>

              <div className='glass-effect rounded-xl p-6 hover-lift'>
                <div className='flex items-center space-x-4'>
                  <div className='text-[#00B2EB] text-2xl'>🐙</div>
                  <div>
                    <h3 className='text-white font-semibold text-lg'>GitHub</h3>
                    <p className='text-gray-300'>github.com/sromelrey</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className='glass-effect rounded-xl p-6'>
              <h3 className='text-white font-semibold text-lg mb-3'>
                Current Status
              </h3>
              <div className='flex items-center space-x-2'>
                <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                <span className='text-gray-300'>
                  Available for new opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className='opacity-0 animate-slidein'
            style={{ animationDelay: "500ms" }}
          >
            <form
              onSubmit={handleSubmit}
              className='glass-effect rounded-2xl p-8 space-y-6'
            >
              <div className='flex items-center justify-between mb-6'>
                <h2 className='text-3xl font-bold text-white'>
                  Send a Message
                </h2>
                <span className='text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded'>
                  DEMO MODE
                </span>
              </div>

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 border border-green-500/30 text-green-300"
                      : "bg-red-500/20 border border-red-500/30 text-red-300"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div>
                <label
                  htmlFor='name'
                  className='block text-white font-medium mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B2EB] focus:border-transparent transition-all duration-300'
                  placeholder='Your name'
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-white font-medium mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B2EB] focus:border-transparent transition-all duration-300'
                  placeholder='your.email@example.com'
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-white font-medium mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B2EB] focus:border-transparent transition-all duration-300 resize-none'
                  placeholder='Tell me about your project...'
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-gradient-to-r from-[#00B2EB] to-[#D05151] text-white py-4 rounded-lg font-semibold hover-lift animate-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none flex items-center justify-center space-x-2'
              >
                {isSubmitting ? (
                  <>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  "Send Message (Demo)"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div
          className='mt-16 text-center opacity-0 animate-slidein'
          style={{ animationDelay: "700ms" }}
        >
          <div className='glass-effect rounded-xl p-6 max-w-2xl mx-auto'>
            <p className='text-gray-300'>
              &copy; 2024 Romel Rey Silva. All rights reserved. Built with ❤️
              using Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
