
import type React from 'react';

export interface AdFormat {
  id: string;
  name: string;
  prompt: string;
  icon: React.FC<{ className?: string }>;
}

export interface UploadedImage {
  base64: string;
  mimeType: string;
  name: string;
}
