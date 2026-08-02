import React, { useState, useEffect } from 'react';
import { Mail, Image as ImageIcon, Heart } from 'lucide-react';

export default function Hero() {
  const [stats, setStats] = useState({
    daysTogether: 365,
    hoursTogether: 8760,
    totalPhotoLikes: 1564,
    totalLoveNotes: 3,
    loveLevel: '1000% Permanen ❤️',
  });

  useEffect(() => {
    fetch('/api/stats')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.success && data.stats) {
          setStats(data.stats);
        }
      })
      .catch((err) => console.error('Error fetching stats:', err));
  }, []);

  return (
    <section className="text-center pt-8 pb-4 relative">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-medium mb-6 animate-float">
        <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
        <span>Spesial Hari National Girlfriend Day 2026 🌹</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
        Happy Girlfriend Day,<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-200">
          Sinta Nuriya
        </span>{' '}
        ❤️
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-xl text-rose-100/90 max-w-2xl mx-auto font-light leading-relaxed mb-8">
        Sebuah persembahan Full-Stack React & Next.js dari{' '}
        <span className="font-semibold text-rose-300">Maulana Rifki Fadhilla (Rifki)</span>{' '}
        untuk kekasih tercinta. Terima kasih sudah menjadi teman cerita, tawa, dan masa depanku.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-10">
        <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-rose-500/20 text-center">
          <span className="block text-2xl sm:text-3xl font-bold text-rose-300">
            {stats.daysTogether}+
          </span>
          <span className="text-xs text-rose-200/70 uppercase tracking-wider">Hari Bersama</span>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-rose-500/20 text-center">
          <span className="block text-2xl sm:text-3xl font-bold text-rose-300">
            {stats.totalPhotoLikes}
          </span>
          <span className="text-xs text-rose-200/70 uppercase tracking-wider">Total Likes Foto</span>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-rose-500/20 text-center">
          <span className="block text-2xl sm:text-3xl font-bold text-rose-300">
            ∞
          </span>
          <span className="text-xs text-rose-200/70 uppercase tracking-wider">Senyuman</span>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-rose-500/20 text-center">
          <span className="block text-2xl sm:text-3xl font-bold text-rose-300">100%</span>
          <span className="text-xs text-rose-200/70 uppercase tracking-wider">Cinta Sejati</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="#surat"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
        >
          <Mail className="w-5 h-5" />
          <span>Buka Surat Maaf & Cinta</span>
        </a>
        <a
          href="#galeri"
          className="px-6 py-3 rounded-full bg-white/5 hover:bg-rose-500/20 border border-rose-500/40 text-rose-100 font-medium transition-all flex items-center gap-2"
        >
          <ImageIcon className="w-5 h-5 text-rose-400" />
          <span>Lihat Galeri Foto Kita</span>
        </a>
      </div>
    </section>
  );
}
