"use client";

import React, { useState, useEffect } from "react";
import Howler from "react-howler";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const handleMusicToggle = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    return () => {
      setIsPlaying(false); // Stop music when component unmounts
    };
  }, []);

  return (
    <div>
      <Howler
        src="/sound.mp3"
        playing={isPlaying}
        loop={true}
        volume={0.5}
      />
      <button
        onClick={handleMusicToggle}
        className="mt-4 py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-700 transition-colors"
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
    </div>
  );
};

export default BackgroundMusic;
