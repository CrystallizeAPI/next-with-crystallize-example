import { useState, useEffect } from 'react'

export function useIntersectionObserver(ref, options) {
  const [entry, setEntry] = useState(null)

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

      return () => observer.disconnect()
    }
  }, [ref, options])

  return entry
}
