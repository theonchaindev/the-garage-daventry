"use client";
import { useRef, useState, useEffect } from "react";

const POSTER = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80";

// Sources tried in order — first that plays wins.
// Replace with your own footage (upload to /public/hero-video.mp4 for best results).
const SOURCES = [
  "/hero-video.mp4",                                                                             // your own video (add to /public)
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
];

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [srcIndex, setSrcIndex] = useState(0);
  const [ready, setReady] = useState(false);

  // Force play on mount (some browsers need a nudge)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, [srcIndex]);

  const tryNext = () => {
    if (srcIndex < SOURCES.length - 1) setSrcIndex(i => i + 1);
  };

  return (
    <>
      {/* Always-visible poster — shows while video loads or if all sources fail */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url("${POSTER}")`,
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
        zIndex: 0,
      }} />

      <video
        ref={videoRef}
        key={srcIndex}           /* remount when src changes so browser re-evaluates */
        autoPlay muted loop playsInline
        onCanPlay={() => setReady(true)}
        onError={tryNext}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center 40%",
          opacity: ready ? 1 : 0,
          transition: "opacity 1.4s ease",
          zIndex: 1,
        }}
      >
        <source src={SOURCES[srcIndex]} type="video/mp4" />
      </video>
    </>
  );
}
