'use client';

import { useState } from 'react';
import { getImagePath } from '../utils/imagePath';

interface Photo {
  src: string;
  alt: string;
  title?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  if (photos.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-12 border border-rose-100 text-center">
        <div className="text-6xl mb-4">📷</div>
        <h3 className="text-2xl font-playfair font-bold text-rose-900 mb-2">
          Photo Gallery
        </h3>
        <p className="text-gray-600">
          Photos will be displayed here. Please add images to the <code className="bg-rose-50 px-2 py-1 rounded">public/photos</code> folder.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-rose-100">
        <h2 className="text-3xl font-playfair font-bold text-rose-900 mb-6 flex items-center gap-3">
          <span className="text-rose-500">📷</span>
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-100"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={getImagePath(photo.src)}
                alt={photo.alt}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              {photo.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <p className="text-white text-sm font-medium">{photo.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-rose-300 transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative w-full aspect-auto">
              <img
                src={getImagePath(selectedPhoto.src)}
                alt={selectedPhoto.alt}
                className="object-contain w-full h-full rounded-lg max-h-[80vh]"
              />
            </div>
            {selectedPhoto.title && (
              <p className="text-white text-center mt-4 text-lg">
                {selectedPhoto.title}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

