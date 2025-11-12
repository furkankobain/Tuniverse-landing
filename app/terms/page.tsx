import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Tuniverse",
  description: "Terms and conditions for using Tuniverse.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <section className="container mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-300 mb-10">Last updated: {new Date().toISOString().slice(0, 10)}</p>

        <div className="space-y-10 max-w-4xl">
          <p>
            Welcome to Tuniverse! By accessing or using our mobile and web applications (&quot;Services&quot;), you agree to these
            Terms of Service (&quot;Terms&quot;). If you do not agree, please do not use the Services.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              These Terms constitute a legally binding agreement between you and <strong>Tuniverse Inc. (Furkan Kaymak)</strong> (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
              By creating an account or using the Services, you confirm that you are at least 13 years old (or older if required by
              local law) and have the authority to enter into this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Account Registration</h2>
            <p className="text-gray-300 mb-2">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Provide accurate and up-to-date registration information (email, display name, username).</li>
              <li>Keep your password secure and confidential.</li>
              <li>Not share your account with others.</li>
              <li>Notify us immediately of any unauthorized access.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. User Content</h2>
            <p className="text-gray-300 mb-2">
              You retain ownership of content you post (reviews, ratings, playlists, messages, etc.), but you grant us a
              worldwide, non-exclusive, royalty-free license to use, display, reproduce, and distribute your content to
              operate and promote the Services.
            </p>
            <p className="text-gray-300 mb-2">You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Post illegal, harmful, threatening, abusive, defamatory, or offensive content.</li>
              <li>Violate intellectual property or privacy rights of others.</li>
              <li>Impersonate others or misrepresent your affiliation with any person or entity.</li>
              <li>Distribute spam, malware, or engage in fraudulent activity.</li>
              <li>Scrape, harvest, or automate access to our Services without permission.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Prohibited Conduct</h2>
            <p className="text-gray-300">
              You may not use the Services to harass, bully, or harm others; circumvent security features; reverse engineer
              or attempt to extract source code; or use the Services for any unlawful purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Third-Party Integrations</h2>
            <p className="text-gray-300">
              Our Services integrate with Spotify, Last.fm, Genius, and others. Your use of those features is subject to the
              third-party provider's terms and privacy policies. We are not responsible for third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Subscriptions & Purchases</h2>
            <p className="text-gray-300">
              If you purchase a Pro membership or other in-app features, payment is processed via the App Store or Google Play.
              All sales are final unless required otherwise by law. Subscriptions auto-renew unless canceled before the renewal date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Ads</h2>
            <p className="text-gray-300">
              The Services may display advertisements (Google Mobile Ads). You understand that ads help support the app and
              may be personalized based on your activity and device identifiers, subject to your privacy settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Termination</h2>
            <p className="text-gray-300">
              We may suspend or terminate your account if you violate these Terms or engage in harmful conduct. You may delete
              your account at any time through the app settings or by contacting support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Disclaimer of Warranties</h2>
            <p className="text-gray-300">
              THE SERVICES ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT GUARANTEE
              UNINTERRUPTED, ERROR-FREE, OR SECURE ACCESS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Limitation of Liability</h2>
            <p className="text-gray-300">
              TO THE FULLEST EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR
              CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE SERVICES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Intellectual Property</h2>
            <p className="text-gray-300">
              All rights, title, and interest in the Services, including designs, trademarks, logos, and code, are owned by
              us or our licensors. You may not copy, modify, or redistribute any part of the Services without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Governing Law</h2>
            <p className="text-gray-300">
              These Terms are governed by the laws of <strong>the Republic of Turkey</strong>, without regard to conflict of law
              principles. Any disputes shall be resolved in the courts of <strong>Ankara, Turkey</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">13. Changes to Terms</h2>
            <p className="text-gray-300">
              We may update these Terms from time to time. Continued use of the Services after changes constitutes acceptance
              of the new Terms. We will notify users of material changes via the app or email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">14. Contact</h2>
            <p className="text-gray-300">
              For questions about these Terms, contact us at <strong>legal@tuniverseapp.com</strong> or visit our{" "}
              <Link href="/contact" className="text-primary underline">Contact</Link> page.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
