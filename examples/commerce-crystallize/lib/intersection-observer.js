import { useState, useEffect } from 'react'

export function useIntersectionObserver(ref, options) {
  const [entry, setEntry] = useState(null)

  // Listen for changes
  useEffect(() => {
    function onObservation([entry]) {
      setEntry(entry)
    }

    if (ref.current) {
      const observer = new IntersectionObserver(onObservation, {
        rootMargin: '50% 0px',
        ...options,
      })

      observer.observe(ref.current)

      // const interval = setInterval(() => {
      //   if (entry?.isIntersecting) {
      //     console.log(observer.takeRecords())
      //   }
      // }, 50)

      return () => {
        observer.disconnect()
        // clearInterval(interval)
      }
    }
  }, [ref, options])

  return entry
}
