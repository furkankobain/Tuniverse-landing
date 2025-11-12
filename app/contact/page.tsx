import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Tuniverse",
  description: "Get in touch with the Tuniverse team.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Have questions, feedback, or need support? We&apos;d love to hear from you!
          </p>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="space-y-8">
              {/* General Contact */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>📧</span> General Inquiries
                </h2>
                <p className="text-gray-300 mb-2">
                  For general questions and information:
                </p>
                <a 
                  href="mailto:contact@tuniverseapp.com" 
                  className="text-primary hover:text-primary/80 transition text-lg font-medium"
                >
                  contact@tuniverseapp.com
                </a>
              </div>

              {/* Support */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>🆘</span> Support & Help
                </h2>
                <p className="text-gray-300 mb-2">
                  Need help with the app or account issues?
                </p>
                <a 
                  href="mailto:support@tuniverseapp.com" 
                  className="text-primary hover:text-primary/80 transition text-lg font-medium"
                >
                  support@tuniverseapp.com
                </a>
              </div>

              {/* Legal */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>⚖️</span> Legal & Privacy
                </h2>
                <p className="text-gray-300 mb-2">
                  For privacy concerns, GDPR/KVKK requests, or legal matters:
                </p>
                <a 
                  href="mailto:legal@tuniverseapp.com" 
                  className="text-primary hover:text-primary/80 transition text-lg font-medium"
                >
                  legal@tuniverseapp.com
                </a>
              </div>

              {/* Business */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>💼</span> Business & Partnerships
                </h2>
                <p className="text-gray-300 mb-2">
                  Interested in partnering or advertising?
                </p>
                <a 
                  href="mailto:business@tuniverseapp.com" 
                  className="text-primary hover:text-primary/80 transition text-lg font-medium"
                >
                  business@tuniverseapp.com
                </a>
              </div>

              {/* Company Info */}
              <div className="pt-8 border-t border-white/20">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>🏢</span> Company Information
                </h2>
                <div className="text-gray-300 space-y-2">
                  <p>
                    <strong className="text-white">Company:</strong> Tuniverse Inc. (Furkan Kaymak)
                  </p>
                  <p>
                    <strong className="text-white">Location:</strong> Ankara, Turkey
                  </p>
                  <p>
                    <strong className="text-white">Website:</strong>{" "}
                    <a href="https://tuniverseapp.com" className="text-primary hover:text-primary/80 transition">
                      tuniverseapp.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>🌐</span> Follow Tuniverse
                </h2>
                <div className="flex gap-4 flex-wrap">
                  <a 
                    href="https://instagram.com/tuniverse.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://twitter.com/TuniverseAPP" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-sky-500 text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
                  >
                    Twitter/X
                  </a>
                  <a 
                    href="https://www.tiktok.com/@tuniverseapp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
                  >
                    TikTok
                  </a>
                  <a 
                    href="https://youtube.com/@TuniverseApp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
                  >
                    YouTube
                  </a>
                  <a 
                    href="https://github.com/furkankobain" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <p className="text-gray-300 text-center">
                  ⏱️ We typically respond within <strong className="text-white">24-48 hours</strong> on business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
