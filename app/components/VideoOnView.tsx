"use client";

import { useEffect, useRef } from "react";

interface VideoOnViewProps {
  src: string;
}

const VideoOnView: React.FC<VideoOnViewProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 }, // Adjust this threshold as needed
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="m-auto h-[90%] w-[90%] md:max-w-[1140px]"
      src={src}
      controls={false}
      muted
    />
  );
};

export default VideoOnView;
