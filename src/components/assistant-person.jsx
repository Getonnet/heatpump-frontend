import React, { useState, useRef } from 'react'
// import VideoPosterImg from '../images/video-poster.png'
import '../styles/components/_video-assistant.scss'

export default function AssistantPerson() {
  const firstVideo = useRef(null)

  const [activeVideo, setActiveVideo] = useState('greetings')

  const handleVideoEnd = () => {
    setActiveVideo('idle')
  }

  return (
    <div className='assistant-person'>
      <div className='container'>
        <div className='videos-wrap'>
          {/*<img src={VideoPosterImg} alt='video poseter' />*/}
          {activeVideo === 'greetings' ? (
            <video
              controls={false}
              autoPlay
              muted
              ref={firstVideo}
              onEnded={handleVideoEnd}>
              {/*-- say hello --*/}
              <source src='/videos/01_HELLO_480.mp4' type={'video/mp4'} />
              Your browser does not support the video tag.
            </video>
          ) : activeVideo === 'idle' ? (
            <video controls={false} autoPlay muted loop ref={firstVideo}>
              {/*-- stare loop --*/}
              <source src='/videos/00_MAIN_480.mp4' type={'video/mp4'} />
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
