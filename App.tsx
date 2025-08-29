
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ImageUploader } from './components/ImageUploader';
import { AdFormatSelector } from './components/AdFormatSelector';
import { ResultDisplay } from './components/ResultDisplay';
import { generateAdImage } from './services/geminiService';
import { AD_FORMATS } from './constants';
import type { AdFormat, UploadedImage } from './types';
import { SparklesIcon } from './components/icons/SparklesIcon';

const App: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<UploadedImage | null>(null);
  const [selectedAdFormat, setSelectedAdFormat] = useState<AdFormat | null>(null);
  const [generatedAdImage, setGeneratedAdImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (image: UploadedImage) => {
    setUploadedImage(image);
    setGeneratedAdImage(null);
    setError(null);
  };

  const handleAdFormatSelect = (format: AdFormat) => {
    setSelectedAdFormat(format);
    setGeneratedAdImage(null);
    setError(null);
  };

  const handleGenerateClick = useCallback(async () => {
    if (!uploadedImage || !selectedAdFormat) {
      setError('Please upload an image and select an ad format.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedAdImage(null);

    try {
      const resultImage = await generateAdImage(
        uploadedImage.base64,
        uploadedImage.mimeType,
        selectedAdFormat.prompt
      );
      setGeneratedAdImage(resultImage);
    } catch (err) {
      console.error(err);
      setError('Failed to generate ad. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [uploadedImage, selectedAdFormat]);

  const canGenerate = uploadedImage && selectedAdFormat && !isLoading;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Controls */}
          <div className="flex flex-col space-y-8">
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">1. Upload Your Product Image</h2>
              <ImageUploader onImageUpload={handleImageUpload} />
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">2. Choose Ad Format</h2>
              <AdFormatSelector
                formats={AD_FORMATS}
                selectedFormat={selectedAdFormat}
                onSelectFormat={handleAdFormatSelect}
              />
            </div>
            
            <button
              onClick={handleGenerateClick}
              disabled={!canGenerate}
              className={`w-full flex items-center justify-center text-lg font-bold py-4 px-6 rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-cyan-500/50
                ${canGenerate 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg hover:shadow-cyan-500/50' 
                  : 'bg-gray-600 cursor-not-allowed text-gray-400'
                }`}
            >
              <SparklesIcon className="w-6 h-6 mr-3" />
              {isLoading ? 'Generating...' : 'Generate Ad'}
            </button>
          </div>

          {/* Right Column: Result */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg h-full flex flex-col">
             <h2 className="text-xl font-bold text-cyan-400 mb-4">3. See The Magic</h2>
             <ResultDisplay
                isLoading={isLoading}
                generatedImage={generatedAdImage}
                error={error}
             />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
