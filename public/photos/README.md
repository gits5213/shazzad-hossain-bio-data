# Photo Gallery

Add your photos to this folder and update the `app/data/photos.ts` file.

## How to Add Photos:

1. Place your image files (jpg, png, webp) in this `public/photos/` folder
2. Open `app/data/photos.ts`
3. Add entries in the following format:

```typescript
export const photos = [
  { 
    src: '/photos/your-photo-1.jpg', 
    alt: 'Description of the photo', 
    title: 'Optional Photo Title' 
  },
  { 
    src: '/photos/your-photo-2.jpg', 
    alt: 'Another description', 
    title: 'Another Title' 
  },
  // Add more photos...
];
```

## Supported Image Formats:
- JPG/JPEG
- PNG
- WebP

## Tips:
- Use descriptive alt text for accessibility
- Recommended image size: 1200x800px or similar aspect ratio
- Optimize images for web to improve loading speed

