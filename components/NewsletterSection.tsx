'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    // Show success (in production, you'd integrate with email service)
    setStatus('success');
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="container mx-auto px-6 py-20">
      <ScrollReveal>
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-lg rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay in the Loop
            </h2>
            <p className="text-gray-300 text-lg">
              Get the latest updates, new features, and music news delivered to your inbox
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>

            {status === 'success' && (
              <p className="text-center text-green-400 mt-4">
                ✓ Thanks for subscribing!
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-400 mt-4">
                Please enter a valid email address
              </p>
            )}
          </form>

          <p className="text-gray-400 text-sm text-center mt-6">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
