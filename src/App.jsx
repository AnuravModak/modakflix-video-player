import { useState } from 'react'
import './App.css'
import React from 'react'
import ReactPlayer from 'react-player'
import VideoPlayer from './Components/VideoPlayer';

function App() {
  const videoUrl = 'https://www.youtube.com/watch?v=MX_GssneLfI&ab_channel=cricket.com.au';
  const startTime = 60; // Start at 10 seconds
  const endTime = 120; // End at 20 seconds

  return (
    <div>
      <h1>Custom Video Player</h1>
      <VideoPlayer url={videoUrl} startTime={startTime} endTime={endTime} />
    </div>
  )
}

export default App
