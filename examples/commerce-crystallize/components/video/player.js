import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import videojs from 'video.js'
import 'dashjs'
import 'videojs-contrib-dash'

import playerCss from './player-css'

const HLS_EXTENSION = /\.(m3u8)($|\?)/i
const DASH_EXTENSION = /\.(mpd)($|\?)/i
const MOV_EXTENSION = /\.(mov)($|\?)/i

function getVideoType(url) {
  if (HLS_EXTENSION.test(url)) {
    return 'application/x-mpegURL'
  } else if (DASH_EXTENSION.test(url)) {
    return 'application/dash+xml'
  } else if (MOV_EXTENSION.test(url)) {
    return 'video/mp4'
  } else {
    return `video/mp4`
  }
}

const Outer = styled.div`
  ${playerCss}

  .video-js {
    height: 100% !important;
    position: absolute;
    z-index: 0;

    video {
      transform: none;

      &:not(.vjs-has-started) {
        cursor: pointer;
      }
    }

    button.vjs-big-play-button {
      opacity: 0;
    }
  }
`

export default function VideoPlayer({
  playlists,
  autoplay = false,
  loop = false,
  controls = false,
  fluid = true,
  muted = true,
  play,
  onReady,
  ...rest
}) {
  const ref = useRef()
  const playerRef = useRef()

  useEffect(() => {
    if (ref.current && !playerRef.current) {
      const sources =
        playlists?.map((playlist) => ({
          type: getVideoType(playlist),
          src: playlist,
        })) || []

      const videoElement = document.createElement('video')
      videoElement.setAttribute('playsinline', true)
      videoElement.classList.add('video-js')
      ref.current.appendChild(videoElement)

      playerRef.current = videojs(
        videoElement,
        {
          sources,
          autoplay,
          loop,
          muted,
          controls,
          fluid,
        },
        onReady
      )

      return () => {
        try {
          playerRef.current.dispose()
          playerRef.current = null
        } catch (e) {
          console.log(e)
        }
      }
    }
  }, [playlists, loop, fluid, controls, muted, autoplay, onReady])

  useEffect(() => {
    if (playerRef.current) {
      try {
        if (play) {
          playerRef.current.play()
        } else {
          playerRef.current.pause()
        }
      } catch {}
    }
  }, [play])

  if (!playlists || playlists.length === 0) {
    return null
  }

  return <Outer {...rest} ref={ref} />
}
