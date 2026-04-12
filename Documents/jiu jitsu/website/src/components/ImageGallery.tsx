"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import type { ImageAsset } from "@/lib/images";

interface ImageGalleryProps {
  images: ImageAsset[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setSelected(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelected(null);
  }, []);

  const goNext = useCallback(() => {
    setSelected((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );
  }, [images.length]);

  const goPrev = useCallback(() => {
    setSelected((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  }, [images.length]);

  return (
    <>
      <div className="columns-2 gap-3 space-y-3 sm:columns-3 sm:gap-4 sm:space-y-4 lg:columns-4">
        {images.map((img, index) => (
          <button
            key={img.src}
            onClick={() => openLightbox(index)}
            className="group relative w-full overflow-hidden rounded-md bg-surface transition-opacity hover:opacity-90"
          >
            <div className="relative w-full" style={{ aspectRatio: "auto" }}>
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev button */}
          <button
            className="absolute left-4 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            className="absolute right-4 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative mx-4 max-h-[85vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selected].src}
              alt={images[selected].alt}
              width={1200}
              height={800}
              className="max-h-[85vh] object-contain"
              sizes="90vw"
              priority
            />
            <p className="mt-2 text-center text-sm text-muted">
              {images[selected].alt}
            </p>
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white">
            {selected + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
