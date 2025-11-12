'use client';

import ScrollReveal from './ScrollReveal';

export default function SocialProofSection() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* App Store Rating */}
        <ScrollReveal delay={0}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 text-center">
            <div className="text-5xl mb-4">⭐</div>
            <div className="text-4xl font-bold text-white mb-2">4.8/5</div>
            <p className="text-gray-300 mb-2">App Store Rating</p>
            <div className="flex gap-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-2">2,500+ Reviews</p>
          </div>
        </ScrollReveal>

        {/* Download Stats */}
        <ScrollReveal delay={100}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 text-center">
            <div className="text-5xl mb-4">📱</div>
            <div className="text-4xl font-bold text-white mb-2">25K+</div>
            <p className="text-gray-300 mb-2">Downloads</p>
            <div className="flex gap-2 justify-center items-center">
              <div className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                iOS
              </div>
              <div className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                Android
              </div>
              <div className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                Web
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-2">All Platforms</p>
          </div>
        </ScrollReveal>

        {/* User Satisfaction */}
        <ScrollReveal delay={200}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 text-center">
            <div className="text-5xl mb-4">🏆</div>
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <p className="text-gray-300 mb-2">User Satisfaction</p>
            <div className="space-y-2">
              <div className="bg-white/5 rounded-full h-2 overflow-hidden">
                <div className="bg-primary h-full w-[95%] rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-2">Would recommend to a friend</p>
          </div>
        </ScrollReveal>
      </div>

      {/* As Seen On / Features */}
      <ScrollReveal delay={300}>
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">Featured on popular music platforms</p>
          <div className="flex flex-wrap gap-8 justify-center items-center opacity-50">
            <div className="text-2xl font-bold text-gray-500">Product Hunt</div>
            <div className="text-2xl font-bold text-gray-500">Indie Hackers</div>
            <div className="text-2xl font-bold text-gray-500">Music Tech</div>
            <div className="text-2xl font-bold text-gray-500">App Radar</div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
