
import React, { useState, useRef } from 'react';
import type { UploadedImage } from '../types';
import { UploadIcon } from './icons/UploadIcon';

interface ImageUploaderProps {
  onImageUpload: (image: UploadedImage) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('No file chosen');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
      }
      
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = (reader.result as string).split(',')[1];
        setPreview(reader.result as string);
        onImageUpload({
          base64: base64String,
          mimeType: file.type,
          name: file.name,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      if (fileInputRef.current) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        fileInputRef.current.files = dataTransfer.files;

        // Manually trigger change event
        const changeEvent = new Event('change', { bubbles: true });
        fileInputRef.current.dispatchEvent(changeEvent);
      }
    }
  };

  return (
    <div>
      <label
        htmlFor="file-upload"
        className="relative block w-full h-64 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-cyan-400 transition-colors duration-300"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {preview ? (
          <img src={preview} alt="Product preview" className="w-full h-full object-contain rounded-lg p-2" />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <UploadIcon className="w-12 h-12 mb-2" />
            <span className="font-semibold">Click to upload or drag and drop</span>
            <span className="text-sm">PNG, JPG, WEBP, etc.</span>
          </div>
        )}
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          className="sr-only"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
        />
      </label>
      <p className="text-sm text-gray-500 mt-2 truncate">File: {fileName}</p>
    </div>
  );
};
