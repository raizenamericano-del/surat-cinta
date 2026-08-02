import React, { useState } from 'react';
import { Smile, Sun, Gem, Laugh, ShieldCheck, Compass, Heart, Sparkles, HeartHandshake, PartyPopper, Infinity } from 'lucide-react';

export default function LoveReasons() {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (idx) => {
    setFlipped((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const reasons = [
    {
      title: 'Kesabaran Luar Biasa 🌸',
      frontIcon: <Smile className="w-8 h-8" />,
      backIcon: <Heart className="w-8 h-8 text-white/50 mb-2" />,
      text: 'Sinta selalu sabar menghadapi sifat random dan tingkah absurd Rifki. Kesabaranmu bikin Rifki semakin sayang setiap harinya!',
    },
    {
      title: 'Senyuman Bikin Adem ☀️',
      frontIcon: <Sun className="w-8 h-8" />,
      backIcon: <Sparkles className="w-8 h-8 text-white/50 mb-2" />,
      text: 'Satu senyuman Sinta bisa langsung mengusir rasa lelah dan stres setelah seharian beraktivitas. Kamu adalah moodbooster nomor satu!',
    },
    {
      title: 'Teman Hidup Terbaik 💍',
      frontIcon: <Gem className="w-8 h-8" />,
      backIcon: <HeartHandshake className="w-8 h-8 text-white/50 mb-2" />,
      text: 'Momen tunangan kita adalah salah satu babak terindah. Rifki bersyukur banget bisa memilihmu sebagai pasangan masa depan.',
    },
    {
      title: 'Asyik Diajak Absurd 😂',
      frontIcon: <Laugh className="w-8 h-8" />,
      backIcon: <PartyPopper className="w-8 h-8 text-white/50 mb-2" />,
      text: 'Dari filter lebah sampai bercandaan KU TUMBUK KAUU, kamu selalu bisa diajak seru-seruan tanpa gengsi. Bersamamu selalu seru!',
    },
    {
      title: 'Selalu Setia & Tulus 💖',
      frontIcon: <ShieldCheck className="w-8 h-8" />,
      backIcon: <Heart className="w-8 h-8 text-white/50 mb-2" />,
      text: 'Ketulusan hati Sinta adalah alasan utama kenapa Rifki cinta banget. Kamu selalu mendukung saat senang ataupun susah.',
    },
    {
      title: 'Masa Depan Bersama 🌟',
      frontIcon: <Compass className="w-8 h-8" />,
      backIcon: <Infinity className="w-8 h-8 text-white/50 mb-2" />,
      text: 'Janji Rifki untuk terus bekerja keras, melindungi, dan membahagiakan Sinta sampai hari-hari bahagia kita berikutnya!',
    },
  ];

  return (
    <section id="alasan" className="scroll-mt-28">
      <div className="text-center mb-10">
        <span className="text-rose-400 font-script text-3xl block mb-1">
          Cinta & Pujian Rifki
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
          6 Alasan Kenapa Sinta Spesial
        </h2>
        <p className="text-rose-200/80 text-sm sm:text-base mt-2">
          Arahkan kursor atau klik kartu untuk membalik & membaca pesan rahasia
          di baliknya
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((item, idx) => (
          <div
            key={idx}
            onClick={() => toggleFlip(idx)}
            className="h-64 cursor-pointer [perspective:1000px]"
          >
            <div
              className={`relative w-full h-full text-center transition-transform duration-700 [transform-style:preserve-3d] ${
                flipped[idx] ? '[transform:rotateY(180deg)]' : ''
              }`}
            >
              {/* Front */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center border border-rose-500/30 [backface-visibility:hidden]">
                <div className="w-14 h-14 rounded-full bg-rose-500/20 flex items-center justify-center mb-4 text-rose-300">
                  {item.frontIcon}
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-rose-300/70">
                  Klik untuk melihat pesan
                </p>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-600 to-pink-700 rounded-2xl p-6 flex flex-col items-center justify-center shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                {item.backIcon}
                <p className="text-white text-sm sm:text-base font-medium leading-relaxed">
                  &quot;{item.text}&quot;
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
