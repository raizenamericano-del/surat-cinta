import React, { useState } from 'react';
import { Sparkles, Heart, Zap, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LoveCompatibility() {
  const [scanning, setScanning] = useState(false);
  const [score, setScore] = useState(null);
  const [status, setStatus] = useState('');

  const runScan = () => {
    if (scanning) return;
    setScanning(true);
    setScore(0);
    setStatus('⚡ Memindai kecocokan hati Sinta & Rifki...');

    let current = 0;
    const interval = setInterval(() => {
      current += 25;
      if (current <= 100) {
        setScore(current);
        setStatus('🔍 Menganalisis momen absurd & tunangan...');
      } else if (current <= 500) {
        setScore(current);
        setStatus('💖 Mengukur tingkat kesabaran Sinta...');
      } else if (current <= 900) {
        setScore(current);
        setStatus('🚀 Mengkalkulasi masa depan bersama...');
      } else {
        clearInterval(interval);
        setScore(1000);
        setStatus('🎉 RESULT: 1000% - JODOH DUNIA AKHIRAT SEMPURNA! 💍');
        setScanning(false);

        confetti({
          particleCount: 120,
          spread: 100,
          origin: { y: 0.6 },
          colors: ['#ffd700', '#f43f5e', '#a855f7', '#10b981'],
        });
      }
    }, 120);
  };

  return (
    <section className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-rose-500/30 text-center relative overflow-hidden">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Kalkulator Kecocokan Spesial</span>
        </div>

        <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
          Seberapa Kompak Sinta & Rifki? ⚡
        </h3>
        <p className="text-rose-200/80 text-sm">
          Tekan tombol di bawah untuk memindai kecocokan kepribadian, momen tunangan, dan tingkah kocak kalian dengan algoritma Full-Stack cinta!
        </p>

        {/* Display Box */}
        <div className="py-6 px-4 rounded-2xl bg-black/40 border border-rose-500/30 max-w-md mx-auto">
          {score === null ? (
            <div className="py-6 text-rose-300/70 text-sm italic">
              &quot;Siap untuk dipindai... Tekan tombol Scan Cinta&quot;
            </div>
          ) : (
            <div className="space-y-3">
              <span className="block text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-400 to-amber-200 animate-pulse">
                {score}%
              </span>
              <p className="text-sm font-semibold text-rose-200">{status}</p>

              {/* Progress bar */}
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 transition-all duration-150"
                  style={{ width: `${Math.min(score, 100)}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Scan Button */}
        <div>
          <button
            onClick={runScan}
            disabled={scanning}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-bold text-sm shadow-lg shadow-rose-500/40 inline-flex items-center gap-2 transition-all transform hover:scale-105 disabled:opacity-50"
          >
            <Zap className={`w-5 h-5 ${scanning ? 'animate-spin' : ''}`} />
            <span>{scanning ? 'Membaca Data Cinta...' : '⚡ Scan Kecocokan Kita Sekarang'}</span>
          </button>
        </div>

        {score === 1000 && (
          <div className="pt-2 flex items-center justify-center gap-2 text-xs sm:text-sm text-emerald-300 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Sertifikasi Cocok Resmi: Anti-Bosan & Setia Selamanya ❤️</span>
          </div>
        )}
      </div>
    </section>
  );
}
