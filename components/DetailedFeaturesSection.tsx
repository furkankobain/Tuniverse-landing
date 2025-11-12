'use client';

import ScrollReveal from './ScrollReveal';

export default function DetailedFeaturesSection() {
  return (
    <section className="container mx-auto px-6 py-20">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Powerful Features, Simple Experience
        </h2>
        <p className="text-gray-300 text-center mb-16 text-lg">
          Everything you need to track and share your music journey
        </p>
      </ScrollReveal>

      <div className="space-y-20 max-w-6xl mx-auto">
        {detailedFeatures.map((feature, index) => (
          <ScrollReveal key={index} delay={index * 100}>
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
              {/* Icon/Visual */}
              <div className="flex-1">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10 flex items-center justify-center">
                  <div className="text-8xl">{feature.icon}</div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

const detailedFeatures = [
  {
    icon: "🎵",
    title: "Track Your Music Universe",
    description: "Keep a detailed record of every song, album, and artist you discover. Rate, review, and organize your musical journey in one beautiful place.",
    points: [
      "Rate songs and albums with half-star precision",
      "Write detailed reviews and share your thoughts",
      "Tag music by mood, genre, or personal categories",
      "View your complete listening history"
    ]
  },
  {
    icon: "👥",
    title: "Connect with Music Lovers",
    description: "Build meaningful connections with people who share your musical taste. Follow friends, discover what they're listening to, and share recommendations.",
    points: [
      "Follow friends and see their activity feed",
      "Direct messaging to discuss favorite tracks",
      "Collaborative playlists with real-time sync",
      "Music-based social networking"
    ]
  },
  {
    icon: "📊",
    title: "Deep Analytics & Insights",
    description: "Understand your musical taste like never before. Get detailed statistics, personalized insights, and discover patterns in your listening habits.",
    points: [
      "Listening clock shows your hourly patterns",
      "Yearly Wrapped reports (like Spotify)",
      "Genre and artist breakdowns",
      "Compare taste with friends"
    ]
  },
  {
    icon: "🎮",
    title: "Gamification & Achievements",
    description: "Make music discovery fun with challenges, badges, and leaderboards. Compete with friends and unlock achievements as you explore.",
    points: [
      "17+ unique achievement badges",
      "Daily streak tracking",
      "Global and friends leaderboards",
      "Music quizzes and challenges"
    ]
  }
];
