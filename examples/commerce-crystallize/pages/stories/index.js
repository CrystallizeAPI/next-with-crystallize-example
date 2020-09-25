import { useRef } from 'react'
import { useIntersectionObserver } from 'lib/intersection-observer'

export default function Stories() {
  const ref = useRef()

  const intersectionEntry = useIntersectionObserver(ref)
  console.log({ intersectionEntry })

  return <div ref={ref}>Stories</div>
}
