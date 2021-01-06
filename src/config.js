const configure = {
  API_URL: 'https://hit.getonnet.dev/api/',
  // API_URL: 'http://127.0.0.1:8000/api/',
  kindly_api: 'https://bot.kindly.ai/api/v1/chats/',
  token: 'FZXiMOR9pproAs0w4KpYrmA1yX7_t0RzQ9Pa9cSZQq4NKl3xoQoWWfsCnopWSZp6',
}

export default configure

/**
 * metadata of all playable videos
 */
export const allVideos = {
  idle: {
    name: 'idle',
    src: '/videos/00_MAIN_480.mp4',
    duration: 2,
  },

  greet: {
    name: 'greet',
    src: '/videos/01_HELLO_480.mp4',
    duration: 4.04,
  },

  thumbsUp: {
    name: 'thumbsUp',
    src: '/videos/02_THUMBSUP_480.mp4',
    duration: 4,
  },

  pointLeft: {
    name: 'pointLeft',
    src: '/videos/03_POINT_UPPER_LEFT_480.mp4',
    duration: 4.84,
  },

  nodding: {
    name: 'nodding',
    src: '/videos/04_Nodding_480.mp4',
    duration: 7.72,
  },

  freezing: {
    name: 'freezing',
    src: '/videos/05_Freezing_480.mp4',
    duration: 3.8,
  },
}

// export const chatExchangeId = {
//   greet: '7aeb63aa-519b-4063-a48a-97d5124e8ca3',
//   two: '',
// }
