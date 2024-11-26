import React, { useRef } from "react";

const VideoPlayer = ({ src, width, height }) => {
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handleStop = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div>
      <video ref={videoRef} width={width} height={height} controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ marginTop: '10px' }}>
        <button onClick={handlePlayPause}>Play/Pause</button>
        <button onClick={handleStop} style={{ marginLeft: '10px' }}>Stop</button>
      </div>
    </div>
  );
};

export default VideoPlayer;