'use client';

import ScrollReveal from './ScrollReveal';

export default function TestimonialsSection() {
  return (
    <section className="container mx-auto px-6 py-20">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Loved by Music Enthusiasts
        </h2>
        <p className="text-gray-300 text-center mb-12 text-lg">
          Join thousands of users tracking their musical journey
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <ScrollReveal key={index} delay={index * 100}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-primary fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-300 mb-4 italic">
                &quot;{testimonial.review}&quot;
              </p>

              {/* User */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.title}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Music Blogger",
    review: "Finally, a place to track all my music discoveries! The rating system is perfect and the social features make it so much fun."
  },
  {
    name: "Alex Chen",
    title: "Playlist Curator",
    review: "Tuniverse changed how I organize my music. The collaborative playlists feature is a game-changer for my DJ work."
  },
  {
    name: "Maria Garcia",
    title: "Music Enthusiast",
    review: "I love seeing what my friends are listening to. It's like Letterboxd but for music - exactly what I've been looking for!"
  },
  {
    name: "James Wilson",
    title: "Indie Artist",
    review: "Great platform for discovering new music and connecting with other music lovers. The recommendations are spot on!"
  },
  {
    name: "Emma Thompson",
    title: "Music Teacher",
    review: "The detailed analytics help me track my listening habits. My students love using it to explore different genres!"
  },
  {
    name: "David Lee",
    title: "Audio Engineer",
    review: "Clean interface, powerful features. The achievement system keeps me engaged and discovering new artists every day."
  }
];
