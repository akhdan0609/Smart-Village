import React, { useState } from 'react';
import { 
  Play, 
  Clock, 
  Video, 
  Sparkles, 
  Compass, 
  Fish, 
  Share2, 
  CheckCircle,
  Volume2
} from 'lucide-react';
import { VIDEO_PROFIL_DATA } from '../../data/mockData';

export const VideoProfilView: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="bg-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-400/30">
              Dokumenter & Sinematik
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-['Playfair_Display',serif]">
              Video Profil Desa Warung Menteng
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Jelajahi keindahan lanskap pegunungan Salak, keramahan warga, sentra perikanan air tawar, dan geliat UMKM Desa Warung Menteng melalui tayangan audio visual.
            </p>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
          <div className="relative aspect-video w-full bg-black flex items-center justify-center">
            {isPlaying ? (
              <iframe
                title="Video Profil Desa Warung Menteng"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={VIDEO_PROFIL_DATA.thumbnailUrl}
                  alt={VIDEO_PROFIL_DATA.judul}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60" />
                
                <div className="relative z-10 text-center space-y-4 px-4 max-w-2xl">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/40 transition hover:scale-110 group"
                  >
                    <Play className="w-10 h-10 ml-1 fill-slate-950 group-hover:scale-110 transition" />
                  </button>
                  <div className="space-y-1">
                    <h2 className="text-xl sm:text-3xl font-extrabold text-white font-['Playfair_Display',serif]">
                      {VIDEO_PROFIL_DATA.judul}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Durasi: {VIDEO_PROFIL_DATA.durasi} • Produksi: {VIDEO_PROFIL_DATA.penulis}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Video Metadata Bar */}
          <div className="p-6 bg-slate-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">
                {VIDEO_PROFIL_DATA.judul}
              </h3>
              <p className="text-xs text-slate-400">
                {VIDEO_PROFIL_DATA.deskripsi}
              </p>
            </div>
            <button
              onClick={handleShare}
              className="shrink-0 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 border border-slate-700"
            >
              <Share2 className="w-4 h-4 text-emerald-400" />
              <span>{copied ? 'Tautan Tersalin!' : 'Bagikan Video'}</span>
            </button>
          </div>
        </div>

        {/* Video Chapters / Bab Tayangan */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg border-b border-slate-100 pb-3">
            <Clock className="w-5 h-5 text-emerald-600" />
            <span>Rincian & Bab Video Profil</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {VIDEO_PROFIL_DATA.babVideo.map((bab, idx) => (
              <div 
                key={idx}
                className="p-4 bg-slate-50 hover:bg-emerald-50/60 rounded-2xl border border-slate-200 hover:border-emerald-200 transition space-y-2 cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    {bab.menit}
                  </span>
                  <Play className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 transition" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-emerald-900 transition">
                  {bab.topik}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
