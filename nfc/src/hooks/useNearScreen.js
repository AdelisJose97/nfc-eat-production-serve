import { useEffect, useState, useRef } from 'react'


export default function useNearScreen({ distance = '0px' } = {}) {
  const [isNearScreen, setFixed] = useState(false)

  const fromRef = useRef()

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (!el.isIntersecting) {
        setFixed(true)
      } else {
        setFixed(false)
      }
    }
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance
    })

    observer.observe(fromRef.current)
    return () => observer.disconnect()
  }, [distance])

  return { isNearScreen, fromRef }
}