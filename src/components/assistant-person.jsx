import React, { useState, useRef } from 'react'
import '../styles/components/_video-assistant.scss'
import { allVideos } from '../config'
import { updateActiveInfoBox } from '../store/activeInfoBoxSlice'
import { useDispatch } from 'react-redux'
// import VideoPosterImg from '../images/video-poster.png'
/**
 * Try THESE
 * 1. out pull all video and show hide, play
 * separate each video into own components and play with a prop function
 *
 */
export default function AssistantPerson() {
  const videoWrap = useRef(null)
  const greetVideo = useRef(null)
  const idleVideo = useRef(null)
  const pointLeftVideo = useRef(null)
  const thumbsUpVideo = useRef(null)
  const noddingVideo = useRef(null)
  const freezingVideo = useRef(null)
  const dispatch = useDispatch()

  const [activeVideo, setActiveVideo] = useState('greet')
  // let activeInfoBox = useSelector(selectActiveInfoBox)

  const handleFirstVideoEnd = () => {
    dispatch(updateActiveInfoBox('brandSelect'))

    setActiveVideo('pointLeft')
    pointLeftVideo.current.play()
  }

  return (
    <div className='assistant-person'>
      <div className='container'>
        <div className='videos-wrap' ref={videoWrap}>
          {/*-- video: say hello --*/}
          <video
            className={activeVideo === 'greet' ? 'is-visible' : ''}
            controls={false}
            autoPlay
            muted
            ref={greetVideo}
            onEnded={handleFirstVideoEnd}>
            <source src={allVideos.greet.src} type={'video/mp4'} />
            Your browser does not support the video tag.
          </video>

          {/*-- video: stare loop --*/}
          <video
            className={activeVideo === 'idle' ? 'is-visible' : ''}
            ref={idleVideo}
            controls={false}
            autoPlay
            muted
            loop>
            <source src={allVideos.idle.src} type={'video/mp4'} />
            Your browser does not support the video tag.
          </video>

          {/*-- video: point left --*/}
          <video
            className={activeVideo === 'pointLeft' ? 'is-visible' : ''}
            ref={pointLeftVideo}
            controls={false}
            autoPlay
            muted>
            <source src={allVideos.pointLeft.src} type={'video/mp4'} />
            Your browser does not support the video tag.
          </video>

          {/*-- video: thumbs up loop --*/}
          <video
            className={activeVideo === 'thumbsUp' ? 'is-visible' : ''}
            ref={thumbsUpVideo}
            controls={false}
            autoPlay
            muted>
            <source src={allVideos.thumbsUp.src} type={'video/mp4'} />
            Your browser does not support the video tag.
          </video>

          {/*-- video: nodding --*/}
          <video
            className={activeVideo === 'nodding' ? 'is-visible' : ''}
            ref={noddingVideo}
            controls={false}
            autoPlay
            muted>
            <source src={allVideos.nodding.src} type={'video/mp4'} />
            Your browser does not support the video tag.
          </video>

          {/*-- video: freezing --*/}
          <video
            className={activeVideo === 'freezing' ? 'is-visible' : ''}
            ref={freezingVideo}
            controls={false}
            autoPlay
            muted>
            <source src={allVideos.freezing.src} type={'video/mp4'} />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}
