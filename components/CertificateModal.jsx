import React from 'react';
import { Award, Heart, Printer } from 'lucide-react';

export default function CertificateModal() {
  const printCertificate = () => {
    window.print();
  };

  return (
    <section id="sertifikat" className="scroll-mt-28">
      <div className="text-center mb-8">
        <span className="text-rose-400 font-script text-3xl block mb-1">
          Award Resmi untuk Sinta
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
          Sertifikat Girlfriend Terbaik 2026
        </h2>
        <p className="text-rose-200/80 text-sm sm:text-base mt-2">
          Sertifikat ini sah dan berlaku selamanya di hati Rifki
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 border-2 border-amber-400/60 shadow-2xl relative overflow-hidden text-center bg-gradient-to-b from-rose-950/80 to-black/90">
        <div className="absolute top-4 left-4 text-amber-400/50">
          <Award className="w-8 h-8" />
        </div>
        <div className="absolute top-4 right-4 text-amber-400/50">
          <Award className="w-8 h-8" />
        </div>

        <div className="inline-block px-4 py-1 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
          CERTIFICATE OF ETERNAL LOVE & APPRECIATION
        </div>

        <h3 className="font-serif text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-300 to-amber-200 mb-6">
          Best Girlfriend of The Year
        </h3>

        <p className="text-rose-200/80 text-sm sm:text-base uppercase tracking-wider mb-2">
          Diberikan Dengan Penuh Bangga Kepada:
        </p>

        <div className="font-script text-4xl sm:text-6xl text-rose-400 font-bold my-6 py-2 border-y border-amber-400/30">
          Sinta Nuriya
        </div>

        <p className="text-rose-100/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
          Atas kesabaran yang tak terbatas, senyuman yang selalu menghangatkan,
          serta pendampingan setia kepada{' '}
          <span className="text-rose-300 font-semibold">
            Maulana Rifki Fadhilla (Rifki)
          </span>{' '}
          dalam setiap suasana. Segala salah dan ngambek resmi dimaafkan dengan
          cinta 1000%!
        </p>

        <div className="flex items-center justify-between max-w-md mx-auto pt-6 border-t border-rose-500/30 text-xs sm:text-sm text-rose-300">
          <div>
            <span className="block font-semibold">Tanggal Diberikan</span>
            <span class="text-rose-200">2 Agustus 2026</span>
          </div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center shadow-lg shadow-rose-500/50">
            <Heart className="w-8 h-8 text-white fill-white animate-pulse" />
          </div>
          <div>
            <span className="block font-semibold">Diberikan Oleh</span>
            <span className="font-script text-xl text-amber-300">
              Rifki Fadhilla
            </span>
          </div>
        </div>

        <div className="mt-8 pt-4">
          <button
            onClick={printCertificate}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-semibold text-sm shadow-md flex items-center gap-2 mx-auto"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak / Simpan Sertifikat Cinta</span>
          </button>
        </div>
      </div>
    </section>
  );
}
