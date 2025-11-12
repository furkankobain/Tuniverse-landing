'use client';

import { useEffect, useState, useRef } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="container mx-auto px-6 py-20"
    >
      <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Join Our Growing Community
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              {...stat}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  value: number;
  label: string;
  suffix: string;
  isVisible: boolean;
  delay: number;
}

function StatCard({ value, label, suffix, isVisible, delay }: StatCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    setTimeout(() => {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, delay);
  }, [isVisible, value, delay]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-300 text-sm md:text-base">{label}</div>
    </div>
  );
}

const stats = [
  { value: 10000, label: "Active Users", suffix: "+" },
  { value: 50000, label: "Songs Rated", suffix: "+" },
  { value: 5000, label: "Playlists Created", suffix: "+" },
  { value: 100, label: "Countries", suffix: "+" }
];
