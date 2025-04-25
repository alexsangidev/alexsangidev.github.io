import { useState } from 'react';

interface LazyYouTubeProps {
  videoId?: string;
  thumbnail?: string;
  alt?: string;
  aspectRatio?: string; // e.g., "16/9"
}

export default function LazyYouTube({
  videoId,
  thumbnail,
  alt = 'YouTube thumbnail',
  aspectRatio = '16/9',
}: LazyYouTubeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    thumbnail || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  );

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  const [w, h] = aspectRatio.split('/').map(Number);
  const paddingTop = `${(h / w) * 100}%`;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingTop,
        backgroundColor: '#0000',
        cursor: 'pointer',
      }}
      onClick={() => setIsLoaded(true)}
    >
      {isLoaded ? (
        <iframe
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      ) : (
        <>
          <img
            src={imgSrc}
            alt={alt}
            loading="lazy"
            onError={() =>
              setImgSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`)
            }
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',            
              borderRadius: '50%',
              padding: '1rem',
              color: '#fff',
              fontSize: '2rem',
            }}
          >
            ▶
          </div>
        </>
      )}
    </div>
  );
}
