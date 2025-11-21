'use client';

export default function ResetPasswordPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-bold mb-4 text-white">Congratulations!</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            You have successfully reset your password. You can now return to the app and log in with your new password.
          </p>
        </div>
      </div>
    </main>
  );
}
