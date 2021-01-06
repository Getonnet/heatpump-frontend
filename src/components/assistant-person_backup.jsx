import React, { useState, useRef } from 'react'
import '../styles/components/_video-assistant.scss'
import { allVideos } from '../config'
import { updateActiveInfoBox } from '../store/activeInfoBoxSlice'
import { useTranslation } from 'react-i18next'
// import VideoPosterImg from '../images/video-poster.png'

export default function AssistantPerson() {
  const { t } = useTranslation()
  const greetVideo = useRef(null)
  const videoWrap = useRef(null)
  const idleVideo = useRef(null)
  let pointLeftVideo = useRef(null)

  const [activeVideo, setActiveVideo] = useState('greet')
  // let activeInfoBox = selectActiveInfoBox()

  const handleFirstVideoEnd = () => {
    updateActiveInfoBox('brandSelect')
    setActiveVideo('pointLeft')
    let video = videoWrap.current.querySelector('video')
    video.play()
  }
  console.log(1)

  return (
    <div className='assistant-person'>
      <div className='container'>
        <div className='videos-wrap' ref={videoWrap}>
          {/*<img src={VideoPosterImg} alt='video poseter' />*/}
          {activeVideo === 'greet' ? (
            <video
              controls={false}
              autoPlay
              muted
              ref={greetVideo}
              onEnded={handleFirstVideoEnd}>
              {/*-- say hello --*/}
              <source src={allVideos.greet.src} type={'video/mp4'} />
              Your browser does not support the video tag.
            </video>
          ) : activeVideo === 'idle' ? (
            <video ref={idleVideo} controls={false} autoPlay muted loop>
              {/*-- stare loop --*/}
              <source src={allVideos.idle.src} type={'video/mp4'} />
              Your browser does not support the video tag.
            </video>
          ) : activeVideo === 'pointLeft' ? (
            <video ref={pointLeftVideo} controls={false} autoPlay muted>
              {/*-- stare loop --*/}
              <source src={allVideos.pointLeft.src} type={'video/mp4'} />
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
