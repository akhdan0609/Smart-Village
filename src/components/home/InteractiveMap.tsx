import React from 'react';
import { MapPin, Navigation, Compass, Layers, Phone, Mail, Clock } from 'lucide-react';
import { PROFIL_DESA_DATA } from '../../data/mockData';

export const InteractiveMap: React.FC = () => {
  return (
    <section className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200">
            Geografis & Wilayah
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-['Playfair_Display',serif]">
            Peta Lokasi & Batas Wilayah Desa Warung Menteng
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Terletak strategis di lereng timur Gunung Salak, Kecamatan Cijeruk, Kabupaten Bogor, dengan keasrian alam dan sumber mata air pegunungan yang melimpah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Preview Embed & Graphic */}
          <div className="lg:col-span-8 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
            <div className="bg-slate-900 text-white p-3.5 px-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>Peta Geografis Desa Warung Menteng, Kec. Cijeruk</span>
              </div>
              <span className="text-[11px] bg-emerald-800 text-emerald-200 px-2 py-0.5 rounded font-mono">
                Koordinat: -6.6852, 106.7891
              </span>
            </div>

            {/* Embedded OpenStreetMap / Google Maps iframe */}
            <div className="relative w-full h-[380px] bg-slate-100">
              <iframe
                title="Peta Desa Warung Menteng Cijeruk"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15850.559388836517!2d106.78253595541991!3d-6.691456100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5e3d74a00ab%3A0x7d8194cf8b07ee4b!2sWarung%20Menteng%2C%20Cijeruk%2C%20Bogor%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200 shadow-md text-xs space-y-1">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                  <span>Kantor Kepala Desa Warung Menteng</span>
                </div>
                <p className="text-slate-500 text-[11px]">Kecamatan Cijeruk, Kab. Bogor</p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
              <span>Topografi: Perbukitan Kaki Gunung Salak (520 - 780 mdpl)</span>
              <a
                href="https://maps.google.com/?q=Warung+Menteng+Cijeruk+Bogor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-1"
              >
                <span>Buka di Google Maps</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Batas Wilayah & Info Kantor */}
          <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-3">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>Batas Administrasi Wilayah</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-700 block text-[11px] uppercase text-emerald-700">Utara</span>
                  <span className="text-slate-600">{PROFIL_DESA_DATA.batasWilayah.utara}</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-700 block text-[11px] uppercase text-emerald-700">Selatan</span>
                  <span className="text-slate-600">{PROFIL_DESA_DATA.batasWilayah.selatan}</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-700 block text-[11px] uppercase text-emerald-700">Barat</span>
                  <span className="text-slate-600">{PROFIL_DESA_DATA.batasWilayah.barat}</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-700 block text-[11px] uppercase text-emerald-700">Timur</span>
                  <span className="text-slate-600">{PROFIL_DESA_DATA.batasWilayah.timur}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-800 to-teal-900 text-white rounded-3xl p-6 shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Jam Kerja Pelayanan</span>
              </h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Senin s/d Jumat: 08.00 - 16.00 WIB<br />
                Sabtu, Minggu & Libur Nasional: Tutup (Layanan Darurat Siaga 24 Jam)
              </p>
              <div className="pt-1 text-xs space-y-1 text-emerald-200">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-300" />
                  <span>{PROFIL_DESA_DATA.teleponKantor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-300" />
                  <span>{PROFIL_DESA_DATA.emailKantor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
