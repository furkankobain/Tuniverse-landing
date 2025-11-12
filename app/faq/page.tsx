import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ - Tuniverse",
  description: "Frequently asked questions about Tuniverse music social network.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Everything you need to know about Tuniverse
          </p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <h2 className="text-xl font-bold text-white mb-3">{faq.question}</h2>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-300 mb-6">
              We&apos;re here to help! Reach out to our support team.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const faqs = [
  {
    question: "What is Tuniverse?",
    answer: "Tuniverse is a music social network that lets you track, rate, and review songs and albums. Think of it as Letterboxd for music lovers. You can discover new music, follow friends, create playlists, and share your musical journey with a community of music enthusiasts."
  },
  {
    question: "Is Tuniverse free to use?",
    answer: "Yes! Tuniverse offers a free tier with all core features including rating music, creating playlists, following friends, and discovering new songs. We also offer a Pro membership with additional features like advanced analytics, unlimited playlists, and ad-free experience."
  },
  {
    question: "Do I need Spotify to use Tuniverse?",
    answer: "No, you don't need Spotify to use Tuniverse. However, connecting your Spotify account unlocks additional features like importing your playlists, syncing your listening history, and getting personalized recommendations based on your Spotify data."
  },
  {
    question: "What platforms is Tuniverse available on?",
    answer: "Tuniverse is available on iOS (App Store), Android (Google Play), and as a web application at tuniverseapp.online. Your data syncs seamlessly across all platforms."
  },
  {
    question: "How do I connect my Spotify account?",
    answer: "Go to Settings > Connected Accounts > Connect Spotify. You'll be redirected to Spotify to authorize the connection. Once connected, you can import playlists and sync your listening activity."
  },
  {
    question: "Can I make my profile private?",
    answer: "Yes! In Settings > Privacy, you can control who sees your profile, reviews, playlists, and activity. You can make your account completely private or customize individual privacy settings."
  },
  {
    question: "How does the rating system work?",
    answer: "You can rate songs and albums on a scale of 0.5 to 5 stars (in 0.5 increments). You can also write detailed reviews, add tags, and share your thoughts with the community. Your ratings help power personalized recommendations."
  },
  {
    question: "What are Smart Playlists?",
    answer: "Smart Playlists are automatically generated based on your preferences like mood, genre, decade, or activity. Examples include 'Energetic Workout', 'Chill Vibes', '90s Nostalgia', etc. They update automatically as you add more music."
  },
  {
    question: "Can I collaborate on playlists with friends?",
    answer: "Yes! Collaborative Playlists let you create and edit playlists with friends. You can assign different roles (Owner, Editor, Viewer) and see real-time updates when collaborators add or remove songs."
  },
  {
    question: "How does messaging work?",
    answer: "Tuniverse includes direct messaging so you can chat with friends and share music recommendations. You can send text messages, share songs/albums/playlists, and see when someone is online."
  },
  {
    question: "What are Achievements and Badges?",
    answer: "Achievements are rewards you earn by using Tuniverse - like rating your first song, creating playlists, or building streaks. You can collect 17+ different badges and compete on global leaderboards."
  },
  {
    question: "Can I export my data?",
    answer: "Yes! You can export all your data including ratings, reviews, playlists, and activity from Settings > Account > Export Data. We believe your data belongs to you."
  },
  {
    question: "How do I delete my account?",
    answer: "Go to Settings > Account > Delete Account. This will permanently remove all your data from our servers. You can also contact support@tuniverseapp.com for assistance."
  },
  {
    question: "Do you sell my data?",
    answer: "No, we never sell your personal data. We use it only to provide and improve the Tuniverse experience. For details, see our Privacy Policy."
  },
  {
    question: "How can I support Tuniverse?",
    answer: "You can support us by upgrading to Pro, sharing Tuniverse with friends, leaving a review on the App Store/Play Store, or following us on social media. Every bit helps us grow!"
  },
  {
    question: "How do I report a bug or request a feature?",
    answer: "We love feedback! Contact us at support@tuniverseapp.com or use the in-app feedback form (Settings > Help & Feedback). We read every message and prioritize based on community requests."
  }
];
