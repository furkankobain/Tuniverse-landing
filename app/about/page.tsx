import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - Tuniverse",
  description: "Learn about Tuniverse and the team behind the music social network.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Tuniverse
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Your life in music. We&apos;re building the ultimate music social network.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Tuniverse was born from a simple idea: music deserves its own social network. We wanted to create a space where music lovers can track, rate, and share their favorite songs and albums with a passionate community.
              </p>
                we wanted to create the same experience for music lovers.
              </p>
              <p>
                We believe that music is more than just entertainment—it&apos;s a journey, a memory, 
                an emotion. Every song tells a story, and every listener has a unique perspective. 
                Tuniverse gives you the tools to capture, share, and discover those stories.
              </p>
              <p>
                From rating your favorite albums to discovering new artists through your friends&apos; 
                recommendations, Tuniverse is designed to enhance how you experience music in the 
                digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-bold text-white mb-3">Connect Through Music</h3>
              <p className="text-gray-300">
                Build meaningful connections with people who share your musical taste and discover new sounds together.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Track Your Journey</h3>
              <p className="text-gray-300">
                Keep a detailed record of your musical exploration and see how your taste evolves over time.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-3">Discover More</h3>
              <p className="text-gray-300">
                Get personalized recommendations and explore music beyond the algorithm&apos;s usual suggestions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Meet the Team</h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Furkan Kaymak</h3>
              <p className="text-primary text-lg mb-4">Founder & Developer</p>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Passionate about music and technology, Furkan created Tuniverse to bring music lovers 
                together in a meaningful way. With a background in software development and a love for 
                discovering new music, he&apos;s dedicated to building the best music social network.
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <a 
                  href="https://github.com/furkankobain" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  GitHub
                </a>
                <a 
                  href="https://twitter.com/furkankobain" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  Twitter
                </a>
                <a 
                  href="https://instagram.com/furkankobain" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-2">🎨 Creative Expression</h3>
              <p className="text-gray-300">
                We believe everyone has unique musical taste worth sharing. Tuniverse gives you the canvas to express yourself.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-2">🤝 Community First</h3>
              <p className="text-gray-300">
                Our community shapes Tuniverse. We listen to feedback and build features that matter to you.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-2">🔒 Privacy Matters</h3>
              <p className="text-gray-300">
                Your data is yours. We&apos;re transparent about what we collect and never sell your information.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-2">🚀 Continuous Innovation</h3>
              <p className="text-gray-300">
                Music and technology evolve. We&apos;re committed to constantly improving and adding new features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Music Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of a community that celebrates music in all its forms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://tuniverseapp.online"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
              >
                Try Web App
              </Link>
              <Link 
                href="/#download"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition backdrop-blur-sm"
              >
                Download App
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
