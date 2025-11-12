import Link from "next/link";
import Navigation from "@/components/Navigation";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";
import NewsletterSection from "@/components/NewsletterSection";
import SocialProofSection from "@/components/SocialProofSection";
import DetailedFeaturesSection from "@/components/DetailedFeaturesSection";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Your Life in <span className="text-primary">Music</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Track, rate, and review your favorite songs and albums. <br />
            The ultimate music social network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://tuniverseapp.online"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105"
            >
              🎵 Try Web App
            </Link>
            <Link 
              href="#download"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition backdrop-blur-sm"
            >
              📱 Download App
            </Link>
          </div>
        </div>

        {/* App Preview - Placeholder */}
        <div className="mt-20 relative">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-5xl mx-auto border border-white/20">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
              <p className="text-white text-2xl">App Screenshot Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Everything You Need
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Social Proof Section */}
      <SocialProofSection />

      {/* Detailed Features Section */}
      <DetailedFeaturesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Download Section */}
      <section id="download" className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get Started Today
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Available on iOS, Android, and Web
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#"
            className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold transition hover:bg-gray-800 flex items-center justify-center gap-2"
          >
            <span>📱</span> App Store
          </Link>
          <Link 
            href="#"
            className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold transition hover:bg-gray-800 flex items-center justify-center gap-2"
          >
            <span>🤖</span> Google Play
          </Link>
          <Link 
            href="https://tuniverseapp.online"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-semibold transition flex items-center justify-center gap-2"
          >
            <span>🌐</span> Web App
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-white/10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-primary">Tuni</span>verse
            </div>
            <p className="text-gray-400">
              Your life in music. Track, rate, and discover amazing music with friends.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="#features" className="text-gray-400 hover:text-white transition">
                Features
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition">
                About
              </Link>
              <Link href="/faq" className="text-gray-400 hover:text-white transition">
                FAQ
              </Link>
              <Link href="#download" className="text-gray-400 hover:text-white transition">
                Download
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-col gap-2">
              <a href="https://instagram.com/tuniverse.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                Instagram @tuniverse.app
              </a>
              <a href="https://twitter.com/TuniverseAPP" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                Twitter @TuniverseAPP
              </a>
              <a href="https://www.tiktok.com/@tuniverseapp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                TikTok @tuniverseapp
              </a>
              <a href="https://youtube.com/@TuniverseApp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                YouTube @TuniverseApp
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400">
          © 2025 Tuniverse Inc. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

const features = [
  {
    icon: "⭐",
    title: "Rate & Review",
    description: "Share your thoughts on songs and albums with detailed reviews and ratings"
  },
  {
    icon: "🎵",
    title: "Music Discovery",
    description: "Discover new music through personalized recommendations and curated playlists"
  },
  {
    icon: "👥",
    title: "Social Network",
    description: "Connect with music lovers, follow friends, and share your musical journey"
  },
  {
    icon: "📊",
    title: "Statistics",
    description: "Track your listening habits with detailed analytics and insights"
  },
  {
    icon: "🎧",
    title: "Playlists",
    description: "Create and manage playlists, collaborate with friends"
  },
  {
    icon: "🏆",
    title: "Achievements",
    description: "Earn badges and climb leaderboards as you explore more music"
  }
];
