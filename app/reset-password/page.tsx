'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { initializeApp } from 'firebase/app';
import { getAuth, confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDqDxNpqij-4V6p_UJ615XgAC5j2xAibp4",
  authDomain: "musicshare-adfe8.firebaseapp.com",
  projectId: "musicshare-adfe8",
  storageBucket: "musicshare-adfe8.firebasestorage.app",
  messagingSenderId: "707432048304",
  appId: "1:707432048304:web:your-web-app-id"
};

// Initialize Firebase (only if not already initialized)
let app;
let auth;
try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
} catch (error) {
  // Firebase already initialized
  const { getApps } = require('firebase/app');
  if (getApps().length > 0) {
    app = getApps()[0];
    auth = getAuth(app);
  }
}

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [oobCode, setOobCode] = useState<string | null>(null);
  const [mode, setMode] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [verifying, setVerifying] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Get oobCode and mode from URL
    const code = searchParams.get('oobCode');
    const actionMode = searchParams.get('mode');
    const actionEmail = searchParams.get('email');

    if (!code || !actionMode) {
      setError('Invalid reset link. Please request a new password reset email.');
      setLoading(false);
      return;
    }

    setOobCode(code);
    setMode(actionMode);
    if (actionEmail) {
      setEmail(actionEmail);
    }

    // Verify the reset code
    if (actionMode === 'resetPassword' && code) {
      verifyResetCode(code);
    } else {
      setError('Invalid action mode.');
      setLoading(false);
    }
  }, [searchParams]);

  const verifyResetCode = async (code: string) => {
    setVerifying(true);
    try {
      // Verify the password reset code and get the email
      const verifiedEmail = await verifyPasswordResetCode(auth, code);
      setEmail(verifiedEmail);
      setLoading(false);
    } catch (error: any) {
      console.error('Error verifying reset code:', error);
      setError(error.message || 'Invalid or expired reset link. Please request a new password reset email.');
      setLoading(false);
    } finally {
      setVerifying(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate passwords
    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!oobCode) {
      setError('Invalid reset code.');
      return;
    }

    setResetting(true);
    try {
      // Confirm password reset
      await confirmPasswordReset(auth, oobCode, newPassword);
      setSuccess(true);
      
      // Redirect to login after 3 seconds
      setTimeout(() => {
        router.push('https://tuniverseapp.online/login');
      }, 3000);
    } catch (error: any) {
      console.error('Error resetting password:', error);
      let errorMessage = 'Failed to reset password. ';
      
      switch (error.code) {
        case 'auth/expired-action-code':
          errorMessage += 'The reset link has expired. Please request a new one.';
          break;
        case 'auth/invalid-action-code':
          errorMessage += 'The reset link is invalid. Please request a new one.';
          break;
        case 'auth/weak-password':
          errorMessage += 'Password is too weak. Please choose a stronger password.';
          break;
        default:
          errorMessage += error.message || 'Please try again or request a new reset link.';
      }
      
      setError(errorMessage);
    } finally {
      setResetting(false);
    }
  };

  if (loading || verifying) {
    return (
      <main className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-300">Verifying reset link...</p>
        </div>
      </main>
    );
  }

  if (success) {
    return (
      <main className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 mb-6">
            <div className="text-4xl mb-4">✅</div>
            <h1 className="text-2xl font-bold text-green-400 mb-2">Password Reset Successful!</h1>
            <p className="text-gray-300">
              Your password has been reset successfully. You will be redirected to the login page shortly.
            </p>
          </div>
          <Link 
            href="https://tuniverseapp.online/login"
            className="text-primary underline hover:text-primary/80"
          >
            Go to Login
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center px-6 py-20">
      <div className="max-w-md w-full">
        <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Reset Your Password</h1>
            <p className="text-gray-400">
              {email ? `Reset password for ${email}` : 'Enter your new password below'}
            </p>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleResetPassword} className="space-y-6">
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300 mb-2">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Enter new password (min. 8 characters)"
                required
                minLength={8}
                disabled={resetting}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Confirm new password"
                required
                minLength={8}
                disabled={resetting}
              />
            </div>

            <button
              type="submit"
              disabled={resetting || !newPassword || !confirmPassword}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {resetting ? (
                <span className="flex items-center justify-center">
                  <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></span>
                  Resetting Password...
                </span>
              ) : (
                'Reset Password'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link 
              href="https://tuniverseapp.online/login"
              className="text-primary hover:text-primary/80 text-sm underline"
            >
              Back to Login
            </Link>
          </div>
        </div>

        <div className="text-center mt-6 text-gray-500 text-sm">
          <p>Need help? Contact us at <a href="mailto:support@tuniverseapp.com" className="text-primary underline">support@tuniverseapp.com</a></p>
        </div>
      </div>
    </main>
  );
}

