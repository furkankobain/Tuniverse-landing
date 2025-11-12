'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Tuniverse Logo" 
            width={50} 
            height={50}
            className="rounded-lg"
          />
          <div className="text-4xl font-bebas font-bold text-primary">
            TUNIVERSE
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-300 hover:text-white transition">
            Features
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition">
            About
          </Link>
          <Link href="/faq" className="text-gray-300 hover:text-white transition">
            FAQ
          </Link>
          <Link href="#download" className="text-gray-300 hover:text-white transition">
            Download
          </Link>
          <Link 
            href="https://tuniverseapp.online" 
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full transition"
          >
            Try Online
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <div className="flex flex-col gap-4">
            <Link 
              href="#features" 
              className="text-gray-300 hover:text-white transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-white transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/faq" 
              className="text-gray-300 hover:text-white transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="#download" 
              className="text-gray-300 hover:text-white transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download
            </Link>
            <Link 
              href="https://tuniverseapp.online" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full transition text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Try Online
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
