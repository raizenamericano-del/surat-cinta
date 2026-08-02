import React from 'react';
import { X, Volume2, Upload } from 'lucide-react';

export default function AudioModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleCustomAudio = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const audioEl = document.getElementById('rifki-voice-audio');
    if (audioEl) {
      audioEl.src = url;
      audioEl.play();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative max-w-lg w-full bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-rose-500/40 shadow-2xl text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-rose-600 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center shadow-lg shadow-rose-500/50">
          <Volume2 className="w-8 h-8 text-white animate-pulse" />
        </div>

        <h3 className="font-serif text-2xl font-bold text-white mb-1">
          Pesan Suara dari Rifki ❤️
        </h3>
        <p className="text-xs text-rose-300/80 mb-6">
          Dengarkan pesan permintaan maaf & sayang spesial untuk Sinta Nuriya
        </p>

        {/* Audio Player */}
        <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-rose-500/30 mb-6">
          <audio
            id="rifki-voice-audio"
            controls
            autoPlay
            className="w-full"
          >
            <source src="/audio/pesan-cinta.mp3" type="audio/mpeg" />
            Browser kamu tidak mendukung pemutar audio.
          </audio>
        </div>

        <div className="text-xs text-rose-200/80 italic mb-6">
          &quot;Sinta adalah perempuan terhebat dalam hidup Rifki. Selamat Hari
          National Girlfriend Day sayang!&quot;
        </div>

        {/* Custom audio upload */}
        <div className="border-t border-rose-500/20 pt-4 flex flex-col items-center gap-2">
          <span className="text-xs text-rose-300">
            Atau pilih lagu favorit kalian dari HP/komputermu:
          </span>
          <label className="px-4 py-2 rounded-full bg-rose-500/20 hover:bg-rose-500/30 border border-rose-400/50 text-rose-200 text-xs font-medium cursor-pointer transition-colors inline-flex items-center gap-2">
            <Upload className="w-4 h-4" />
            <span>Pilih File Lagu (.mp3)</span>
            <input
              type="file"
              accept="audio/*"
              className="hidden"
              onChange={handleCustomAudio}
            />
          </label>
        </div>

        <div className="mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold transition-colors"
          >
            Kembali ke Web
          </button>
        </div>
      </div>
    </div>
  );
}
