
import React from 'react';
import { ImageIcon } from './icons/ImageIcon';

interface ResultDisplayProps {
  isLoading: boolean;
  generatedImage: string | null;
  error: string | null;
}

const LoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full text-gray-400">
    <svg className="animate-spin h-12 w-12 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <p className="mt-4 text-lg">Generating your ad...</p>
    <p className="text-sm text-gray-500">This might take a moment.</p>
  </div>
);

const InitialState: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full text-gray-500 p-8 text-center">
    <ImageIcon className="w-24 h-24 mb-4 text-gray-600"/>
    <h3 className="text-xl font-bold text-gray-300">Your Generated Ad Will Appear Here</h3>
    <p className="mt-2">Upload an image and select an ad format to get started.</p>
  </div>
);

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ isLoading, generatedImage, error }) => {
  return (
    <div className="w-full h-full aspect-square bg-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
      {isLoading && <LoadingSpinner />}
      {!isLoading && error && (
        <div className="text-center text-red-400 p-4">
          <h3 className="font-bold">An Error Occurred</h3>
          <p>{error}</p>
        </div>
      )}
      {!isLoading && !error && generatedImage && (
        <img src={generatedImage} alt="Generated ad" className="w-full h-full object-contain" />
      )}
      {!isLoading && !error && !generatedImage && <InitialState />}
    </div>
  );
};
