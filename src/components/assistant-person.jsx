import React, { useRef } from 'react'
// import VideoPosterImg from '../images/video-poster.png'
import '../styles/components/_video-assistant.scss'

export default function AssistantPerson() {
  const firstVideo = useRef()
  // console.log(firstVideo)

  // useEffect(() => {
  // firstVideo.current.play()
  // }, [])

  return (
    <div className='assistant-person'>
      <div className='container'>
        <div className='videos-wrap'>
          {/*<img src={VideoPosterImg} alt='video poseter' />*/}
          <video controls={false} autoPlay muted ref={firstVideo}>
            <source src='/videos/01_HELLO_480.mp4' type={'video/mp4'} />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}
