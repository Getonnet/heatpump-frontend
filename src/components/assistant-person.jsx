import React, { useRef, useEffect } from 'react'
import '../styles/components/_video-assistant.scss'
import { allVideos } from '../config'
import { useTranslation } from 'react-i18next'
// import {
//   updateActiveInfoBox,
//   selectActiveInfoBox,
// } from '../store/activeInfoBoxSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveVideo, updateActiveVideo } from '../store/activeVideoSlice'
// import VideoPosterImg from '../images/video-poster.png'
/**
 * Try THESE
 * 1. out pull all video and show hide, play
 * separate each video into own components and play with a prop function
 *
 */
export default function AssistantPerson({ videoType }) {
  const { t } = useTranslation()
  const videoWrap = useRef(null)
  const greetVideo = useRef(null)
  const idleVideo = useRef(null)
  const pointLeftVideo = useRef(null)
  const thumbsUpVideo = useRef(null)
  const noddingVideo = useRef(null)
  const freezingVideo = useRef(null)
  const dispatch = useDispatch()

  const activeVideo = useSelector(selectActiveVideo)
  // let activeInfoBox = useSelector(selectActiveInfoBox)

  const handleVideoEnd = () => {
    dispatch(updateActiveVideo('idle'))
    idleVideo.current.play()
  }

  const playVideo = videoName => {
    videoName.current.play()
  }

  useEffect(() => {
    console.log('effect running ')
    if (activeVideo === 'greet') {
      playVideo(greetVideo)
    } else if (activeVideo === 'idle') {
      playVideo(idleVideo)
    } else if (activeVideo === 'pointLeft') {
      playVideo(pointLeftVideo)
    } else if (activeVideo === 'thumbsUp') {
      playVideo(thumbsUpVideo)
    } else if (activeVideo === 'nodding') {
      playVideo(noddingVideo)
    } else if (activeVideo === 'freezing') {
      playVideo(freezingVideo)
    }

    // return () => {
    //   dispatch(updateActiveVideo('idle'))
    // }
  }, [dispatch, activeVideo])

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
            onEnded={handleVideoEnd}>
            <source src={allVideos.greet.src} type={'video/mp4'} />
            { t('Browser') }
            {/* Your browser does not support the video tag. */}
          </video>

          {/*-- video: stare loop --*/}
          <video
            className={activeVideo === 'idle' ? 'is-visible' : ''}
            ref={idleVideo}
            controls={false}
            onEnded={handleVideoEnd}
            autoPlay
            muted
            loop>
            <source src={allVideos.idle.src} type={'video/mp4'} />
            { t('Browser') }
            {/* Your browser does not support the video tag. */}
          </video>

          {/*-- video: point left --*/}
          <video
            className={activeVideo === 'pointLeft' ? 'is-visible' : ''}
            ref={pointLeftVideo}
            controls={false}
            onEnded={handleVideoEnd}
            autoPlay
            muted>
            <source src={allVideos.pointLeft.src} type={'video/mp4'} />
            { t('Browser') }
            {/* Your browser does not support the video tag. */}
          </video>

          {/*-- video: thumbs up loop --*/}
          <video
            className={activeVideo === 'thumbsUp' ? 'is-visible' : ''}
            ref={thumbsUpVideo}
            controls={false}
            onEnded={handleVideoEnd}
            autoPlay
            muted>
            <source src={allVideos.thumbsUp.src} type={'video/mp4'} />
            { t('Browser') }
            {/* Your browser does not support the video tag. */}
          </video>

          {/*-- video: nodding --*/}
          <video
            className={activeVideo === 'nodding' ? 'is-visible' : ''}
            ref={noddingVideo}
            controls={false}
            onEnded={handleVideoEnd}
            autoPlay
            muted>
            <source src={allVideos.nodding.src} type={'video/mp4'} />
            { t('Browser') }
            {/* Your browser does not support the video tag. */}
          </video>

          {/*-- video: freezing --*/}
          <video
            className={activeVideo === 'freezing' ? 'is-visible' : ''}
            ref={freezingVideo}
            controls={false}
            onEnded={handleVideoEnd}
            autoPlay
            muted>
            <source src={allVideos.freezing.src} type={'video/mp4'} />
            {/* Your browser does not support the video tag. */}
            { t('Browser') }
          </video>
        </div>
      </div>
    </div>
  )
}
