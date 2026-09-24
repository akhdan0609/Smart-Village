import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, X, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  accept?: string;
  maxSizeMB?: number;
  className?: string;
  previewSize?: 'sm' | 'md' | 'lg';
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  label = 'Upload Gambar',
  accept = 'image/*',
  maxSizeMB = 5,
  className = '',
  previewSize = 'md',
}) => {
  const [preview, setPreview] = useState<string | null>(value || null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const previewSizes = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
  };

  const validateFile = (file: File): boolean => {
    if (!file.type.startsWith('image/')) {
      setError('File harus berupa gambar');
      return false;
    }
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`Ukuran file maksimal ${maxSizeMB}MB`);
      return false;
    }
    setError(null);
    return true;
  };

  const handleFileSelect = (file: File) => {
    if (!validateFile(file)) return;
    
    setIsUploading(true);
    setError(null);
    
    // Convert to base64 for preview (in real app, upload to server)
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result;
      if (typeof result === 'string') {
        setPreview(result);
        onChange(result);
      }
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileSelect(file);
    e.target.value = '';
  };

  const handleRemove = () => {
    setPreview(null);
    onChange('');
    setError(null);
  };

  const handleUrlInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setPreview(e.target.value || null);
  };

  return (
    <div className={className}>
      <label className="text-xs font-bold text-slate-700 block mb-2">{label}</label>
      
      {/* Drop Zone / Preview */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`relative border-2 border-dashed rounded-2xl transition-all ${
          isDragging 
            ? 'border-emerald-500 bg-emerald-50' 
            : 'border-slate-200 hover:border-emerald-300'
        } ${preview ? '' : 'cursor-pointer'}`}
      >
        {preview ? (
          <div className="relative">
            <div className={`${previewSizes[previewSize]} mx-auto overflow-hidden rounded-xl`}>
              <img 
                src={preview} 
                alt="Preview" 
                className="w-full h-full object-cover"
              />
            </div>
            <button
              type="button"
              onClick={handleRemove}
              className="absolute top-2 right-2 w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center hover:bg-rose-700 transition shadow-md"
            >
              <X className="w-3 h-3" />
            </button>
            {isUploading && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl">
                <Loader2 className="w-6 h-6 text-white animate-spin" />
              </div>
            )}
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3">
              <Upload className="w-6 h-6 text-slate-500" />
            </div>
            <p className="text-sm font-medium text-slate-700">Seret & lepas gambar di sini</p>
            <p className="text-xs text-slate-500 mt-1">atau klik untuk memilih file</p>
            <p className="text-[10px] text-slate-400 mt-2">PNG, JPG, WebP • Maks {maxSizeMB}MB</p>
            <input
              ref={fileInputRef}
              type="file"
              accept={accept}
              onChange={handleInputChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        )}
      </div>

      {/* URL Input Alternative */}
      <div className="mt-3 space-y-2">
        <p className="text-xs text-slate-500">Atau masukkan URL gambar:</p>
        <div className="flex gap-2">
          <input
            type="url"
            value={value}
            onChange={handleUrlInput}
            placeholder="https://example.com/gambar.jpg"
            className="flex-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
          >
            <ImageIcon className="w-4 h-4" />
            <span>Pilih File</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="mt-2 p-2 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {value && !preview && (
        <p className="mt-2 text-xs text-slate-500 font-mono truncate max-w-xs">URL: {value}</p>
      )}
    </div>
  );
};