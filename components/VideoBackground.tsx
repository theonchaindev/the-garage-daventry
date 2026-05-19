"use client";
import { useRef, useEffect, useState } from "react";

const POSTER = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80";

// Free CC0 mechanic stock videos — first that loads wins
const SOURCES = [
  "https://assets.mixkit.co/videos/preview/mixkit-mechanic-checking-a-car-33573-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-car-parked-outside-a-mechanic-shop-33574-large.mp4",
];

export default function VideoBackground() {
  const ref = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.play().catch(() => {/* autoplay blocked — poster shows */});
  }, []);

  return (
    <>
      {/* Poster image always visible underneath until video loads */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${POSTER})`,
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
      }} />

      <video
        ref={ref}
        autoPlay muted loop playsInline
        onCanPlay={() => setLoaded(true)}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center 40%",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1.2s ease",
        }}
      >
        {SOURCES.map(src => <source key={src} src={src} type="video/mp4" />)}
      </video>
    </>
  );
}
