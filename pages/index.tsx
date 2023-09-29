/* Hey Toly website landing page > ./pages/index.tsx */
import React, { useEffect, useRef, useState } from 'react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    const handleVideoEnd = () => setIsPlaying(false);

    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []);

  return (
    <main className="flex flex-row items-center justify-between min-h-screen p-8 text-white main-background">

      {/* Left Side - Content */}
      <div className="flex flex-col items-center justify-center w-1/2 py-8">
        {/* App Name */}
        <div className="mb-4"> {/* Adjusted margin */}
          <h1 className="mt-4 font-bold gradient-text">Hey Toly</h1>
        </div>

        {/* Tagline */}
        <p className="mb-8 text-center text-xl">Discover Solana with your very own Toly!</p>

        {/* Download Button */}
        <a href="#download" className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full">Download Now</a>
      </div>

      {/* Right Side - Video */}
      <div className="video-container w-3/5 p-8 relative cursor-pointer" style={{ maxHeight: '80vh' }} onClick={toggleVideo}>
        <div className="w-full h-full flex items-center justify-center">
          <video ref={videoRef} className="video rounded-lg shadow-lg max-h-full max-w-full">
            <source src="/discover-sol.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {!isPlaying && (
          <div className="play-icon-container absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-9xl">▶️</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center p-4">
        <p className="text-sm">© 2023 Hey Toly. All Rights Reserved. Built by <a href="https://buildooors.com" target="_blank">Buildooors</a></p>
      </footer>

    </main>
  );
}