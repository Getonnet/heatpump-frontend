import * as React from 'react'
import VideoPosterImg from '../images/video-poster.png'
import '../styles/components/_video-assistant.scss'

export default function AssistantPerson() {
  return (
    <div className='assistant-person'>
      <div className='container'>
        <div className='videos-wrap'>
          <img src={VideoPosterImg} alt='video poseter' />
        </div>
      </div>
    </div>
  )
}
