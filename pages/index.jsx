import React, { useState } from 'react';
import ParticleCanvas from '@/components/ParticleCanvas';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ApologyLetter from '@/components/ApologyLetter';
import PhotoGallery from '@/components/PhotoGallery';
import LoveReasons from '@/components/LoveReasons';
import LoveCompatibility from '@/components/LoveCompatibility';
import LoveMeterQuiz from '@/components/LoveMeterQuiz';
import LoveGuestbook from '@/components/LoveGuestbook';
import CertificateModal from '@/components/CertificateModal';
import AudioModal from '@/components/AudioModal';
import VercelModal from '@/components/VercelModal';
import SecretVaultModal from '@/components/SecretVaultModal';
import LiveToast from '@/components/LiveToast';

export default function Home() {
  const [audioModalOpen, setAudioModalOpen] = useState(false);
  const [vercelModalOpen, setVercelModalOpen] = useState(false);
  const [vaultModalOpen, setVaultModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative font-sans">
      {/* Background HTML5 Canvas Particle Engine */}
      <ParticleCanvas />

      {/* Floating Instagram/TikTok style Live Activity Toast */}
      <LiveToast />

      {/* Top Navigation */}
      <Navbar
        onOpenAudioModal={() => setAudioModalOpen(true)}
        onOpenVercelModal={() => setVercelModalOpen(true)}
        onOpenVaultModal={() => setVaultModalOpen(true)}
      />

      {/* Main Container */}
      <main className="relative z-10 pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-24">
        {/* 1. Hero Section (fetches /api/stats) */}
        <Hero />

        {/* 2. Interactive Apology Letter & Minigame (/api/apology) */}
        <ApologyLetter />

        {/* 3. Filterable Photo Gallery with Live Likes API (/api/like) */}
        <PhotoGallery />

        {/* 4. 6 Reasons Sinta is Special (3D Flip Cards) */}
        <LoveReasons />

        {/* 5. NEW: Sci-Fi Love Compatibility Scanner (1000% Jodoh) */}
        <LoveCompatibility />

        {/* 6. Love Meter Slider & Quiz */}
        <LoveMeterQuiz />

        {/* 7. FULL-STACK Interactive Love Guestbook / Message Wall (/api/messages) */}
        <LoveGuestbook />

        {/* 8. Printable Digital Best Girlfriend Certificate */}
        <CertificateModal />

        {/* 9. Full-Stack Footer Banner with Vercel Deploy Guide */}
        <section className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-rose-500/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex items-center gap-2 text-rose-300 font-semibold mb-2">
                <span>🎵 Pengaturan Musik & Pesan Suara</span>
              </div>
              <p className="text-xs sm:text-sm text-rose-200/80 leading-relaxed">
                Aplikasi ini dilengkapi dengan{' '}
                <strong className="text-rose-300">
                  Synthesizer Musik Romantis Lofi
                </strong>{' '}
                otomatis dan pemutar suara permintaan maaf resmi Rifki.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={() => setAudioModalOpen(true)}
                  className="px-5 py-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs sm:text-sm font-medium transition-all inline-flex items-center gap-2"
                >
                  <span>Buka Panel Audio & Suara</span>
                </button>
                <button
                  onClick={() => setVaultModalOpen(true)}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-rose-600 text-white text-xs sm:text-sm font-medium transition-all inline-flex items-center gap-2 shadow-md"
                >
                  <span>🔐 Buka Brankas Rahasia (0208)</span>
                </button>
              </div>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-rose-500/20 pt-4 md:pt-0 md:pl-6">
              <div className="flex items-center gap-2 text-amber-300 font-semibold mb-2">
                <span>🚀 Siap Deploy ke Vercel Full-Stack</span>
              </div>
              <p className="text-xs sm:text-sm text-rose-200/80 leading-relaxed mb-4">
                Aplikasi ini dibuat menggunakan <strong className="text-white">Next.js 14 Full-Stack</strong> dengan Serverless API Routes. Siap langsung tayang di{' '}
                <strong className="text-white">Vercel</strong>!
              </p>
              <button
                onClick={() => setVercelModalOpen(true)}
                className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-medium inline-flex items-center gap-2 transition-all"
              >
                <span>Lihat Panduan Deploy Vercel</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-rose-500/20 py-8 px-4 text-center text-xs text-rose-300/70">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="font-medium text-rose-200">
            Created with 1000% Love using <span className="text-rose-400 font-semibold">React & Next.js Full-Stack</span> by{' '}
            <span className="text-rose-400 font-semibold">Maulana Rifki Fadhilla (Rifki)</span>{' '}
            for <span className="text-rose-400 font-semibold">Sinta Nuriya</span> ❤️
          </p>
          <p>
            Celebrating National Girlfriend Day 2026 • Powered by Vercel Serverless API • Interactive Experience
          </p>
        </div>
      </footer>

      {/* Modals */}
      <AudioModal isOpen={audioModalOpen} onClose={() => setAudioModalOpen(false)} />
      <VercelModal isOpen={vercelModalOpen} onClose={() => setVercelModalOpen(false)} />
      <SecretVaultModal isOpen={vaultModalOpen} onClose={() => setVaultModalOpen(false)} />
    </div>
  );
}
