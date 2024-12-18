import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import '../App.css';

const VideoPlayer = ({ url, startTime = 0, endTime, width = '100%', height = '100%' }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    // Seek to the start time when the component is mounted
    if (playerRef.current) {
      playerRef.current.seekTo(startTime, 'seconds');
    }
  }, [startTime]);

  const handleProgress = (state) => {
    // Pause the video if the end time is reached
    if (endTime && state.playedSeconds >= endTime) {
      playerRef.current?.getInternalPlayer()?.pause();
    }
  };

  return (
    <div className="video-player">
      <ReactPlayer
        ref={playerRef}
        url={url}
        controls
        playing
        width="50%"
        height="500px"
        onProgress={handleProgress}
      />
    </div>
  );
};

export default VideoPlayer;
