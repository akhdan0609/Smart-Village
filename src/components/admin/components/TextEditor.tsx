import React, { useState, useRef, useEffect } from 'react';

export interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  className?: string;
  toolbar?: boolean;
  readOnly?: boolean;
}

const formatCommands = [
  { command: 'bold', icon: 'B', title: 'Bold (Ctrl+B)', style: { fontWeight: 'bold' } },
  { command: 'italic', icon: 'I', title: 'Italic (Ctrl+I)', style: { fontStyle: 'italic' } },
  { command: 'underline', icon: 'U', title: 'Underline (Ctrl+U)', style: { textDecoration: 'underline' } },
  { command: 'strikeThrough', icon: 'S', title: 'Strikethrough', style: { textDecoration: 'line-through' } },
  { type: 'separator' },
  { command: 'formatBlock', value: 'h2', icon: 'H2', title: 'Heading 2' },
  { command: 'formatBlock', value: 'h3', icon: 'H3', title: 'Heading 3' },
  { command: 'formatBlock', value: 'p', icon: 'P', title: 'Paragraph' },
  { type: 'separator' },
  { command: 'insertUnorderedList', icon: '•', title: 'Bullet List' },
  { command: 'insertOrderedList', icon: '1.', title: 'Numbered List' },
  { type: 'separator' },
  { command: 'createLink', icon: '🔗', title: 'Insert Link' },
  { command: 'removeFormat', icon: '✕', title: 'Clear Formatting' },
];

export const TextEditor: React.FC<TextEditorProps> = ({
  value,
  onChange,
  placeholder = 'Tulis konten di sini...',
  rows = 10,
  className = '',
  toolbar = true,
  readOnly = false,
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isComposing, setIsComposing] = useState(false);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const handleInput = () => {
    if (editorRef.current && !isComposing) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const executeCommand = (command: string, value?: string) => {
    if (readOnly) return;
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    handleInput();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && !readOnly) {
      switch (e.key.toLowerCase()) {
        case 'b':
          e.preventDefault();
          executeCommand('bold');
          break;
        case 'i':
          e.preventDefault();
          executeCommand('italic');
          break;
        case 'u':
          e.preventDefault();
          executeCommand('underline');
          break;
      }
    }
  };

  const handleCompositionStart = () => setIsComposing(true);
  const handleCompositionEnd = (e: React.CompositionEvent) => {
    setIsComposing(false);
    if (e.data) handleInput();
  };

  return (
    <div className={`border border-slate-200 rounded-xl bg-white ${className}`}>
      {toolbar && !readOnly && (
        <div className="p-2 border-b border-slate-100 flex flex-wrap gap-1">
          {formatCommands.map((item, idx) => {
            if (item.type === 'separator') {
              return <div key={idx} className="w-px h-6 bg-slate-200 mx-1" />;
            }
            return (
              <button
                key={idx}
                type="button"
                onClick={() => executeCommand(item.command, 'value' in item ? item.value : undefined)}
                className="p-1.5 rounded hover:bg-slate-100 text-slate-600 text-xs font-bold transition"
                title={item.title}
                style={item.style}
              >
                {item.icon}
              </button>
            );
          })}
        </div>
      )}
      <div
        ref={editorRef}
        contentEditable={!readOnly}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
        className={`min-h-[${rows * 24}px] p-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/20 ${readOnly ? 'bg-slate-50 text-slate-500 cursor-not-allowed' : ''}`}
        placeholder={placeholder}
        spellCheck="true"
        role="textbox"
        aria-multiline="true"
      />
      <div className="p-2 border-t border-slate-100 bg-slate-50 rounded-b-xl flex items-center justify-between text-[10px] text-slate-500">
        <span>{value.replace(/<[^>]*>/g, '').length} karakter</span>
        <span>{value.replace(/<[^>]*>/g, '').split(/\s+/).filter(w => w).length} kata</span>
      </div>
    </div>
  );
};