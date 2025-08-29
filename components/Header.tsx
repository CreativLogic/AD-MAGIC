
import React from 'react';
import { MagicWandIcon } from './icons/MagicWandIcon';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <MagicWandIcon className="w-8 h-8 text-cyan-400 mr-3"/>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Ad Magician
        </h1>
      </div>
    </header>
  );
};
