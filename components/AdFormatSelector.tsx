
import React from 'react';
import type { AdFormat } from '../types';

interface AdFormatSelectorProps {
  formats: AdFormat[];
  selectedFormat: AdFormat | null;
  onSelectFormat: (format: AdFormat) => void;
}

export const AdFormatSelector: React.FC<AdFormatSelectorProps> = ({ formats, selectedFormat, onSelectFormat }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {formats.map((format) => {
        const isSelected = selectedFormat?.id === format.id;
        return (
          <button
            key={format.id}
            onClick={() => onSelectFormat(format)}
            className={`flex flex-col items-center justify-center p-3 rounded-lg text-center transition-all duration-200 transform hover:scale-105
              ${isSelected 
                ? 'bg-cyan-500 text-white shadow-lg ring-2 ring-cyan-300' 
                : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
              }`}
          >
            <format.icon className="w-8 h-8 mb-2" />
            <span className="text-xs font-semibold">{format.name}</span>
          </button>
        );
      })}
    </div>
  );
};
