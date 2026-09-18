import React, { useState, useEffect, useMemo } from 'react';
import {
  MessageSquare,
  ShieldCheck,
  Check,
  CheckCircle2,
  Trash2,
  X,
  Send,
  Loader2,
  User,
  Clock,
  Inbox,
  Reply,
  BadgeCheck,
} from 'lucide-react';
import { AdminLayout } from './AdminLayout';
import { FormModal } from './components/FormModal';
import { PageRoute, KritikSaranItem } from '../../types';
import {
  getStoredKritikSaran,
  updateKritikSaran,
  deleteKritikSaran,
  getStoredBerita,
  getCurrentAdmin,
} from '../../utils/storage';

interface KritikSaranAdminProps {
  onNavigate: (page: PageRoute) => void;
  onLogout: () => void;
}

type FilterTab = 'semua' | 'belum' | 'sudah';

export const KritikSaranAdmin: React.FC<KritikSaranAdminProps> = ({ onNavigate, onLogout }) => {
  const currentAdmin = getCurrentAdmin();
  const [items, setItems] = useState<KritikSaranItem[]>([]);
  const [filter, setFilter] = useState<FilterTab>('semua');
  const [replyTarget, setReplyTarget] = useState<KritikSaranItem | null>(null);
  const [balasan, setBalasan] = useState('');
  const [petugas, setPetugas] = useState(currentAdmin?.name || 'Admin Humas');
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const beritaList = useMemo(() => getStoredBerita(), []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  useEffect(() => {
    setItems(getStoredKritikSaran());
  }, []);

  const targetLabel = (targetId: string): string => {
    if (targetId === 'general') return 'Kritik & Saran Umum';
    const berita = beritaList.find(b => b.id === targetId);
    return berita ? berita.judul : targetId;
  };

  const filteredItems = items.filter(item => {
    if (filter === 'belum') return !item.balasanAdmin;
    if (filter === 'sudah') return !!item.balasanAdmin;
    return true;
  });

  const total = items.length;
  const belumDitanggapi = items.filter(i => !i.balasanAdmin).length;
  const disetujui = items.filter(i => i.approved).length;

  const toggleApprove = (item: KritikSaranItem) => {
    const updated = updateKritikSaran(item.id, { approved: !item.approved });
    setItems(updated);
    showToast(!item.approved ? 'Kritik & saran ditampilkan' : 'Kritik & saran disembunyikan');
  };

  const openReply = (item: KritikSaranItem) => {
    setReplyTarget(item);
    setBalasan(item.balasanAdmin || '');
    setPetugas(item.petugasPenanggap || currentAdmin?.name || 'Admin Humas');
  };

  const handleReplySubmit = async () => {
    if (!replyTarget || !balasan.trim()) return;
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 400));
    const updated = updateKritikSaran(replyTarget.id, {
      balasanAdmin: balasan.trim(),
      petugasPenanggap: petugas.trim(),
      balasanWaktu: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      approved: true,
    });
    setItems(updated);
    setIsSaving(false);
    setReplyTarget(null);
    setBalasan('');
    showToast('Tanggapan berhasil dikirim');
  };

  const handleDelete = (item: KritikSaranItem) => {
    if (!confirm('Yakin ingin menghapus kritik & saran ini?')) return;
    const updated = deleteKritikSaran(item.id);
    setItems(updated);
    showToast('Kritik & saran dihapus');
  };

  return (
    <AdminLayout
      activePage="admin-humas-kritik-saran"
      onLogout={onLogout}
      onNavigate={onNavigate}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              Humas & Dokumentasi
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 font-['Playfair_Display',serif]">
              Manajemen Kritik & Saran
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Baca, tanggapi, dan moderasi masukan dari masyarakat
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900">{total}</p>
              <p className="text-xs text-slate-500">Total Masuk</p>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Reply className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900">{belumDitanggapi}</p>
              <p className="text-xs text-slate-500">Belum Ditanggapi</p>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <BadgeCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900">{disetujui}</p>
              <p className="text-xs text-slate-500">Disetujui Tampil</p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
          <button
            onClick={() => setFilter('semua')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap ${
              filter === 'semua'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Inbox className="w-4 h-4" />
            <span>Semua ({total})</span>
          </button>
          <button
            onClick={() => setFilter('belum')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap ${
              filter === 'belum'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Reply className="w-4 h-4" />
            <span>Belum Ditanggapi ({belumDitanggapi})</span>
          </button>
          <button
            onClick={() => setFilter('sudah')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap ${
              filter === 'sudah'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Sudah Ditanggapi ({total - belumDitanggapi})</span>
          </button>
        </div>

        {/* List */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-12 text-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
              <Inbox className="w-7 h-7" />
            </div>
            <p className="text-sm font-bold text-slate-700">Belum ada kritik & saran</p>
            <p className="text-xs text-slate-400 mt-1">Masukan dari masyarakat akan muncul di sini.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredItems.map(item => (
              <div key={item.id} className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-slate-900 truncate">{item.nama}</p>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.waktu}
                        </span>
                        <span>•</span>
                        <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md max-w-[220px] truncate">
                          {targetLabel(item.targetId)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold ${item.approved ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'}`}>
                      {item.approved ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                      {item.approved ? 'Tampil' : 'Disembunyikan'}
                    </span>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold ${item.balasanAdmin ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'}`}>
                      {item.balasanAdmin ? <CheckCircle2 className="w-3 h-3" /> : <Reply className="w-3 h-3" />}
                      {item.balasanAdmin ? 'Sudah Ditanggapi' : 'Belum Ditanggapi'}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 border border-slate-100 rounded-2xl p-3.5">
                  {item.isi}
                </p>

                {item.balasanAdmin && (
                  <div className="ml-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl">
                    <p className="text-[11px] font-bold text-emerald-800 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Balasan Admin Desa
                      {item.balasanWaktu && <span className="font-normal text-emerald-600">• {item.balasanWaktu}</span>}
                    </p>
                    <p className="text-sm text-emerald-900 mt-1 leading-relaxed">{item.balasanAdmin}</p>
                    {item.petugasPenanggap && (
                      <p className="text-[10px] text-emerald-600 mt-1.5">Ditanggapi oleh: {item.petugasPenanggap}</p>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100">
                  <button
                    onClick={() => openReply(item)}
                    className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                  >
                    <Reply className="w-3.5 h-3.5" />
                    {item.balasanAdmin ? 'Edit Tanggapan' : 'Tanggapi'}
                  </button>
                  <button
                    onClick={() => toggleApprove(item)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border ${
                      item.approved
                        ? 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        : 'bg-emerald-700 hover:bg-emerald-800 text-white border-emerald-700'
                    }`}
                  >
                    {item.approved ? <X className="w-3.5 h-3.5" /> : <Check className="w-3.5 h-3.5" />}
                    {item.approved ? 'Sembunyikan' : 'Tampilkan'}
                  </button>
                  <button
                    onClick={() => handleDelete(item)}
                    className="px-3.5 py-2 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Reply Modal */}
      <FormModal
        isOpen={!!replyTarget}
        onClose={() => setReplyTarget(null)}
        onSubmit={handleReplySubmit}
        title={replyTarget ? `Tanggapi: ${replyTarget.nama}` : 'Tanggapi'}
        description="Balasan akan ditampilkan kepada pengguna pada halaman Humas / Press Release."
        isLoading={isSaving}
        submitLabel="Kirim Tanggapan"
        size="md"
      >
        <div className="space-y-4">
          <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-800">{replyTarget?.nama}:</span> {replyTarget?.isi}
          </div>
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Isi Tanggapan <span className="text-rose-500">*</span>
            </label>
            <textarea
              value={balasan}
              onChange={e => setBalasan(e.target.value)}
              rows={4}
              placeholder="Tulis tanggapan resmi dari Pemerintah Desa..."
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 focus:bg-white"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Nama Petugas Penanggap</label>
            <input
              type="text"
              value={petugas}
              onChange={e => setPetugas(e.target.value)}
              placeholder="Admin Humas"
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-600 focus:bg-white"
            />
          </div>
          {isSaving && (
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              Menyimpan tanggapan...
            </div>
          )}
        </div>
      </FormModal>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] px-4 py-2.5 bg-emerald-700 text-white rounded-2xl text-xs font-bold shadow-lg flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          {toast}
        </div>
      )}
    </AdminLayout>
  );
};