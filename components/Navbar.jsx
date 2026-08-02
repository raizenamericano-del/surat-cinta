import React, { useState, useEffect, useRef } from 'react';
import { Heart, Music, Volume2, Rocket, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Navbar({ onOpenAudioModal, onOpenVercelModal, onOpenVaultModal }) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const synthIntervalRef = useRef(null);
  const chordIndexRef = useRef(0);

  const romanticChords = [
    [261.63, 329.63, 392.00, 493.88], // Cmaj7
    [220.00, 261.63, 329.63, 392.00], // Am7
    [174.61, 220.00, 261.63, 349.23], // Fmaj7
    [196.00, 246.94, 293.66, 349.23], // G7
  ];

  function playRomanticNote(freq, duration = 1.8, delay = 0) {
    if (!audioCtxRef.current) return;
    const now = audioCtxRef.current.currentTime + delay;
    const osc = audioCtxRef.current.createOscillator();
    const gain = audioCtxRef.current.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(audioCtxRef.current.destination);

    osc.start(now);
    osc.stop(now + duration);
  }

  const toggleMusic = () => {
    if (!isMusicPlaying) {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      synthIntervalRef.current = setInterval(() => {
        const chord = romanticChords[chordIndexRef.current];
        chord.forEach((freq, idx) => {
          playRomanticNote(freq, 2.0, idx * 0.25);
        });
        if (Math.random() > 0.3) {
          playRomanticNote(chord[2] * 2, 1.5, 0.8);
        }
        chordIndexRef.current = (chordIndexRef.current + 1) % romanticChords.length;
      }, 2600);

      setIsMusicPlaying(true);
      confetti({ particleCount: 20, spread: 40, origin: { y: 0.1 } });
    } else {
      if (synthIntervalRef.current) {
        clearInterval(synthIntervalRef.current);
        synthIntervalRef.current = null;
      }
      setIsMusicPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (synthIntervalRef.current) {
        clearInterval(synthIntervalRef.current);
      }
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-md border-b border-rose-500/20 py-3 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center border border-rose-400 group-hover:scale-110 transition-transform">
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400 animate-pulse" />
          </span>
          <span className="font-script text-2xl text-rose-300 font-bold tracking-wide">
            Sinta & Rifki
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-5 text-sm font-medium text-rose-100">
          <a href="#surat" className="hover:text-rose-400 transition-colors">Surat Maaf</a>
          <a href="#galeri" className="hover:text-rose-400 transition-colors">Galeri Foto</a>
          <a href="#alasan" className="hover:text-rose-400 transition-colors">6 Alasan</a>
          <a href="#love-meter" className="hover:text-rose-400 transition-colors">Love Meter</a>
          <a href="#guestbook" className="hover:text-rose-400 transition-colors">Pesan Cinta</a>
          <a href="#sertifikat" className="hover:text-rose-400 transition-colors">Sertifikat</a>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Secret Vault Button */}
          <button
            onClick={onOpenVaultModal}
            className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-amber-500/30 to-rose-500/30 hover:from-amber-500/50 hover:to-rose-500/50 border border-amber-400 text-amber-300 flex items-center gap-1.5 transition-all shadow-sm"
            title="Buka Brankas Rahasia Kita"
          >
            <Lock className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Vault Rahasia</span>
          </button>

          <button
            onClick={toggleMusic}
            className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border flex items-center gap-1.5 transition-all ${
              isMusicPlaying
                ? 'bg-rose-500 border-rose-400 text-white animate-pulseGlow'
                : 'bg-white/5 border-rose-400/50 text-rose-200 hover:border-rose-400'
            }`}
            title="Putar Musik Romantis (Lofi Synthesizer)"
          >
            <Music className={`w-3.5 h-3.5 ${isMusicPlaying ? 'animate-spin' : ''}`} />
            <span className="hidden md:inline">
              {isMusicPlaying ? 'Musik Aktif 🎵' : 'Musik'}
            </span>
          </button>

          <button
            onClick={onOpenAudioModal}
            className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-md flex items-center gap-1.5 transition-all"
          >
            <Volume2 className="w-3.5 h-3.5 animate-bounce" />
            <span className="hidden sm:inline">Pesan Suara</span>
          </button>

          <button
            onClick={onOpenVercelModal}
            className="hidden sm:flex px-2.5 py-1.5 rounded-full text-xs font-medium bg-amber-400/20 hover:bg-amber-400/30 border border-amber-400/50 text-amber-300 items-center gap-1 transition-colors"
          >
            <Rocket className="w-3.5 h-3.5" />
            <span>Vercel</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
