import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Tuniverse",
  description: "Privacy Policy for Tuniverse - how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <section className="container mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-300 mb-10">Last updated: {new Date().toISOString().slice(0, 10)}</p>

        <div className="space-y-10 max-w-4xl">
          <p>
            This Privacy Policy explains how <strong>Tuniverse Inc. (Furkan Kaymak)</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and
            protects your information when you use the Tuniverse mobile and web applications (&quot;Services&quot;).
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
            <p className="text-gray-300 mb-3">We collect the following categories of data:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                Account Information: email address, display name, username, profile photo, bio.
              </li>
              <li>
                Authentication Data: password (hashed by Firebase Auth), OAuth tokens for integrations (e.g., Spotify) when you connect accounts.
              </li>
              <li>
                Usage & Content: ratings, reviews, playlists, likes, comments, social activity, and other user-generated content.
              </li>
              <li>
                Messaging: direct messages and group chats you send/receive within the app.
              </li>
              <li>
                Device & App Diagnostics: crash logs and performance data (via Firebase Crashlytics/Analytics), IP address, device model, operating system, app version.
              </li>
              <li>
                Notifications & Identifiers: Firebase Cloud Messaging token for push notifications and advertising identifiers used by Google Mobile Ads.
              </li>
              <li>
                Camera Access: solely to scan QR codes for playlist sharing (no photos or videos are stored).
              </li>
              <li>
                Cookies & Similar Technologies: used on the web app and landing site for analytics and session management.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Provide and operate the Services (auth, profiles, messaging, playlists, discovery).</li>
              <li>Personalize recommendations and content (e.g., discovery features).</li>
              <li>Enable social features (follows, likes, comments, activity feed).</li>
              <li>Deliver push notifications and in-app messages.</li>
              <li>Monitor performance, fix bugs, and improve quality.</li>
              <li>Show ads and measure their performance (if ads are enabled).</li>
              <li>Comply with legal obligations and enforce our Terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Third-Party Services</h2>
            <p className="text-gray-300 mb-3">We use the following providers:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Firebase (Auth, Firestore, Realtime Database, Storage, Analytics, Crashlytics, Cloud Messaging).</li>
              <li>Google Mobile Ads (AdMob) for advertisements where applicable.</li>
              <li>Spotify API for music data and account linking (only when you connect).</li>
              <li>Last.fm for music metadata and recommendations.</li>
              <li>Genius for lyrics (where available).</li>
            </ul>
            <p className="text-gray-300 mt-2">These providers may process data on our behalf under their own privacy policies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data Sharing</h2>
            <p className="text-gray-300">
              We do not sell your personal information. We may share data with service providers listed above, with
              other users when you choose to post content publicly (e.g., reviews, playlists), or when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Ads and Analytics</h2>
            <p className="text-gray-300">
              If ads are shown, advertising partners (e.g., Google) may use cookies or mobile identifiers to show personalized
              ads subject to your device settings and local laws. You can opt out of personalized ads in your device settings
              or via Google’s Ads Settings where available.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
            <p className="text-gray-300 mb-3">
              Depending on your location (e.g., EU GDPR, Türkiye KVKK), you may have rights to access, correct, delete, or
              restrict the processing of your data, and to withdraw consent where applicable.
            </p>
            <p className="text-gray-300">
              To exercise your rights or request account deletion, contact us at <strong>support@tuniverseapp.com</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data Retention</h2>
            <p className="text-gray-300">
              We retain your information for as long as your account is active or as needed to provide the Services. We may
              also retain limited data to comply with legal obligations, resolve disputes, and enforce agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Security</h2>
            <p className="text-gray-300">
              We use industry-standard security measures and Firebase security rules to protect your data in transit and at rest.
              However, no method of transmission or storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Children’s Privacy</h2>
            <p className="text-gray-300">
              Our Services are not intended for children under 13. If you believe a child under 13 has provided us with
              personal information, please contact us to request deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. We will post the updated version on this page and update
              the “Last updated” date above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact</h2>
            <p className="text-gray-300">
              For privacy inquiries, contact us at <strong>legal@tuniverseapp.com</strong> or visit our <Link href="/contact" className="text-primary underline">Contact</Link> page.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
