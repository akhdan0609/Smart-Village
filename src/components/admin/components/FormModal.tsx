import React from 'react';
import { X, Loader2 } from 'lucide-react';

export interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  submitLabel?: string;
  cancelLabel?: string;
  isLoading?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const FormModal: React.FC<FormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  description,
  children,
  submitLabel = 'Simpan',
  cancelLabel = 'Batal',
  isLoading = false,
  size = 'lg',
}) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-xl',
    xl: 'max-w-2xl',
    '3xl': 'max-w-4xl',
    '4xl': 'max-w-5xl',
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150" onClick={onClose}>
      <form 
        onSubmit={onSubmit} 
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-3xl w-full ${sizeClasses[size]} p-6 sm:p-8 space-y-5 animate-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto`}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            {description && <p className="text-xs text-slate-500 mt-0.5">{description}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {children}

        <div className="flex gap-3 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition"
          >
            {cancelLabel}
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
            <span>{isLoading ? 'Menyimpan...' : submitLabel}</span>
          </button>
        </div>
      </form>
    </div>
  );
};