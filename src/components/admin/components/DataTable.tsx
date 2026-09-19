import React from 'react';
import { ChevronUp, ChevronDown, Search, Filter, MoreVertical, Edit, Trash2, Eye } from 'lucide-react';

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T, index: number) => React.ReactNode;
  sortable?: boolean;
  className?: string;
  headerClassName?: string;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyField: string;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  onView?: (item: T) => void;
  searchable?: boolean;
  searchFields?: string[];
  emptyMessage?: string;
  striped?: boolean;
  hoverable?: boolean;
  className?: string;
  canEdit?: boolean;
  canDelete?: boolean;
  fitContent?: boolean;
}

export function DataTable<T extends { [key: string]: any }>({
  data,
  columns,
  keyField,
  onEdit,
  onDelete,
  onView,
  searchable = true,
  searchFields = [],
  emptyMessage = 'Tidak ada data',
  striped = true,
  hoverable = true,
  className = '',
  canEdit = true,
  canDelete = true,
  fitContent = false,
}: DataTableProps<T>) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortConfig, setSortConfig] = React.useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

  const filteredData = React.useMemo(() => {
    let result = data;
    
    if (searchTerm && searchFields.length > 0) {
      result = result.filter(item => 
        searchFields.some(field => 
          String(item[field] || '').toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    if (sortConfig) {
      result = [...result].sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    
    return result;
  }, [data, searchTerm, searchFields, sortConfig]);

  const handleSort = (key: string) => {
    const col = columns.find(c => c.key === key);
    if (!col?.sortable) return;
    
    setSortConfig(prev => ({
      key,
      direction: prev?.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const hasActions = (onView || (onEdit && canEdit) || (onDelete && canDelete));

  return (
    <div className={`bg-white rounded-3xl border border-slate-200 shadow-sm ${className}`}>
      {searchable && searchFields.length > 0 && (
        <div className="p-4 border-b border-slate-100">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
            />
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className={`text-left text-xs ${fitContent ? 'w-max mx-auto table-auto' : 'w-full'}`}>
          <thead>
            <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
              {columns.map((col, idx) => {
                const headerTail = `${col.className || ''} ${col.headerClassName || ''}`;
                return (
                  <th
                    key={col.key}
                    className={`p-3 font-bold ${col.sortable ? 'cursor-pointer select-none hover:bg-slate-200' : ''} ${idx === 0 ? 'rounded-l-xl' : ''} ${idx === columns.length - 1 && !hasActions ? 'rounded-r-xl' : ''} ${col.className || ''} ${col.headerClassName || ''}`}
                    onClick={() => handleSort(col.key)}
                  >
                    <div className={`flex items-center gap-1 ${headerTail.includes('text-right') ? 'justify-end' : headerTail.includes('text-center') ? 'justify-center' : ''}`}>
                      <span>{col.header}</span>
                      {col.sortable && sortConfig?.key === col.key && (
                        sortConfig.direction === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
                      )}
                    </div>
                  </th>
                );
              })}
              {hasActions && (
                <th className="p-3 font-bold rounded-r-xl text-center">Aksi</th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (hasActions ? 1 : 0)} className="p-8 text-center text-slate-500">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              filteredData.map((item, index) => (
                <tr 
                  key={item[keyField]} 
                  className={`hover:bg-slate-50 transition ${striped && index % 2 === 1 ? 'bg-slate-50/50' : ''}`}
                >
                  {columns.map((col, idx) => (
                    <td key={col.key} className={`p-3 ${col.className || ''}`}>
                      {col.render ? col.render(item, index) : String(item[col.key] || '')}
                    </td>
                  ))}
{hasActions && (
                        <td className="p-3 text-center">
                          <div className="flex items-center justify-center gap-1.5">
                            {onView && (
                              <button
                                onClick={() => onView(item)}
                                className="p-1.5 text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition"
                                title="Lihat"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                            )}
                            {onEdit && canEdit && (
                              <button
                                onClick={() => onEdit(item)}
                                className="p-1.5 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition"
                                title="Edit"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                            )}
                            {onDelete && canDelete && (
                              <button
                                onClick={() => onDelete(item)}
                                className="p-1.5 text-slate-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition"
                                title="Hapus"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </td>
                      )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {filteredData.length > 0 && (
        <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Menampilkan {filteredData.length} dari {data.length} data</span>
        </div>
      )}
    </div>
  );
}