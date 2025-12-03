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
      <div className="glass rounded-3xl shadow-xl shadow-rose-100/50 p-12 border border-rose-200/50 text-center animate-fade-in-up">
        <div className="text-6xl mb-4">📷</div>
        <h3 className="text-2xl font-playfair font-bold bg-gradient-to-r from-rose-700 to-rose-600 bg-clip-text text-transparent mb-2">
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
      <div className="glass rounded-3xl shadow-xl shadow-rose-100/50 p-8 md:p-10 border border-rose-200/50 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-rose-700 to-rose-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
          <span className="text-2xl">📷</span>
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl hover:shadow-rose-300/50 transition-all duration-300 bg-gradient-to-br from-gray-50 to-gray-100 border border-rose-200/30 hover:scale-[1.02]"
              onClick={() => setSelectedPhoto(photo)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={getImagePath(photo.src)}
                alt={photo.alt}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300" />
              {photo.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-semibold">{photo.title}</p>
                </div>
              )}
              <div className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full animate-fade-in-up">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-14 right-0 text-white hover:text-rose-300 transition-all duration-200 hover:scale-110 bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20"
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
            <div className="relative w-full aspect-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={getImagePath(selectedPhoto.src)}
                alt={selectedPhoto.alt}
                className="object-contain w-full h-full rounded-2xl max-h-[80vh] p-4"
              />
            </div>
            {selectedPhoto.title && (
              <p className="text-white text-center mt-6 text-xl font-semibold bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                {selectedPhoto.title}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

