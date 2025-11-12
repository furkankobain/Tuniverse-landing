'use client';

import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export default function PricingSection() {
  return (
    <section className="container mx-auto px-6 py-20">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-300 text-center mb-12 text-lg">
          Start free, upgrade when you&apos;re ready
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Free Plan */}
        <ScrollReveal delay={100}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
              <div className="text-5xl font-bold text-white mb-2">$0</div>
              <p className="text-gray-300">Forever free</p>
            </div>

            <ul className="space-y-3 mb-8">
              {freePlans.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link 
              href="https://tuniverseapp.online"
              className="block w-full bg-white/10 hover:bg-white/20 text-white text-center px-6 py-3 rounded-full font-semibold transition"
            >
              Get Started Free
            </Link>
          </div>
        </ScrollReveal>

        {/* Pro Plan */}
        <ScrollReveal delay={200}>
          <div className="bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-primary relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                POPULAR
              </span>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="text-5xl font-bold text-white mb-2">$4.99</div>
              <p className="text-gray-300">per month</p>
            </div>

            <ul className="space-y-3 mb-8">
              {proFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link 
              href="https://tuniverseapp.online"
              className="block w-full bg-primary hover:bg-primary/90 text-white text-center px-6 py-3 rounded-full font-semibold transition"
            >
              Upgrade to Pro
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

const freePlans = [
  "Unlimited music ratings & reviews",
  "Create up to 10 playlists",
  "Follow friends & see activity",
  "Basic statistics",
  "Mobile & web access",
  "Community features"
];

const proFeatures = [
  "Everything in Free, plus:",
  "Unlimited playlists",
  "Advanced analytics & insights",
  "Yearly Wrapped report",
  "No ads",
  "Early access to new features",
  "Priority support",
  "Custom profile themes"
];
