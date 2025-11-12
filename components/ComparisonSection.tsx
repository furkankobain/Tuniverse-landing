'use client';

import ScrollReveal from './ScrollReveal';

export default function ComparisonSection() {
  return (
    <section className="container mx-auto px-6 py-20">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Why Choose Tuniverse?
        </h2>
        <p className="text-gray-300 text-center mb-12 text-lg">
          The complete music social network
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                <th className="px-6 py-4 text-center text-primary font-semibold">Tuniverse</th>
                <th className="px-6 py-4 text-center text-gray-400 font-semibold">Spotify</th>
                <th className="px-6 py-4 text-center text-gray-400 font-semibold">Last.fm</th>
                <th className="px-6 py-4 text-center text-gray-400 font-semibold">RateYourMusic</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition">
                  <td className="px-6 py-4 text-gray-300">{row.feature}</td>
                  <td className="px-6 py-4 text-center">
                    {row.tuniverse ? <CheckIcon /> : <XIcon />}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.spotify ? <CheckIcon inactive /> : <XIcon />}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.lastfm ? <CheckIcon inactive /> : <XIcon />}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.rym ? <CheckIcon inactive /> : <XIcon />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollReveal>
    </section>
  );
}

function CheckIcon({ inactive = false }: { inactive?: boolean }) {
  return (
    <svg className={`w-6 h-6 mx-auto ${inactive ? 'text-gray-500' : 'text-primary'}`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-6 h-6 mx-auto text-gray-600" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

const comparisonData = [
  { feature: "Rate & Review Music", tuniverse: true, spotify: false, lastfm: false, rym: true },
  { feature: "Social Feed", tuniverse: true, spotify: false, lastfm: true, rym: false },
  { feature: "Collaborative Playlists", tuniverse: true, spotify: true, lastfm: false, rym: false },
  { feature: "Detailed Analytics", tuniverse: true, spotify: true, lastfm: true, rym: false },
  { feature: "Direct Messaging", tuniverse: true, spotify: false, lastfm: false, rym: false },
  { feature: "Achievement System", tuniverse: true, spotify: false, lastfm: false, rym: false },
  { feature: "Music Discovery", tuniverse: true, spotify: true, lastfm: true, rym: true },
  { feature: "Mobile App", tuniverse: true, spotify: true, lastfm: true, rym: false },
  { feature: "Web App", tuniverse: true, spotify: true, lastfm: true, rym: true },
  { feature: "Free Plan", tuniverse: true, spotify: true, lastfm: true, rym: true },
];
