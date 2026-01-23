import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_m0kb30i',     // service ID
        'template_im5kezt',    // template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'F6W9lC-aSM7IbeSiP'     // public key
      );

      alert('Message sent successfully 🚀');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('Something went wrong 😢');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-space-black px-4">
      <div className="max-w-2xl w-full bg-space-card rounded-3xl p-12 shadow-xl backdrop-blur-md border border-white/10">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-white/70 hover:text-neon-blue transition mb-6"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <h1 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-pink">
          Let’s Talk
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-neon-blue"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-neon-blue"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-neon-blue resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-pink text-black font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
