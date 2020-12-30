import React, { useState, useRef } from 'react'
// import VideoPosterImg from '../images/video-poster.png'
import '../styles/components/_video-assistant.scss'
import { allVideos } from '../config'

export default function AssistantPerson() {
  const firstVideo = useRef(null)

  const [activeVideo, setActiveVideo] = useState('greet')

  const handleFirstVideoEnd = e => {
    console.log(e.target.duration)
  }

  return (
    <div className='assistant-person'>
      <div className='container'>
        <div className='videos-wrap'>
          {/*<img src={VideoPosterImg} alt='video poseter' />*/}
          {activeVideo === 'greet' ? (
            <video
              controls={false}
              autoPlay
              muted
              ref={firstVideo}
              onEnded={handleFirstVideoEnd}>
              {/*-- say hello --*/}
              <source src={allVideos.greet.src} type={'video/mp4'} />
              Your browser does not support the video tag.
            </video>
          ) : activeVideo === 'idle' ? (
            <video controls={false} autoPlay muted loop ref={firstVideo}>
              {/*-- stare loop --*/}
              <source src={allVideos.idle.src} type={'video/mp4'} />
              Your browser does not support the video tag.
            </video>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}
