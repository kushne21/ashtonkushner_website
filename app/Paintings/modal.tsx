"use client";
import { CldImage } from 'next-cloudinary';


// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
//works
export default function Modal() {
  return (
    <CldImage
      src="cld-sample-5" // Use this sample image or upload your own via the Media Library
      alt="gomba"
      width="500" // Transform the image: auto-crop to square aspect_ratio
      height="500"
      crop={{
        type: 'auto',
        source: true
      }}
    />
  );
}