import React, { useEffect } from 'react'

export default function FAQPage() {
  useEffect(() => {
    let script = document.createElement('script')
    script.src = 'https://chat.kindlycdn.com/kindly-chat.js'
    script.async = true
    script.id = 'kindly-chat'
    script.setAttribute('data-shadow-dom', '1')
    script.setAttribute('data-bot-key', '3b1ff935-e0aa-4858-8537-42dddcfaaa48')
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
      document.body.removeChild(document.getElementById('kindly-chat-api'))
    }
  })

  return (
    <div className='container' style={{ display: 'none' }}>
      FAQ Page
    </div>
  )
}