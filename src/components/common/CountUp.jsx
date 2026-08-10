import { useState, useEffect, useRef } from 'react'

export default function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)

  // Parse string like "500+", "10,000+", "98%", "80+"
  const parsedStr = String(end || '0')
  const numMatches = parsedStr.match(/\d[\d,]*/g)
  const rawNumStr = numMatches ? numMatches.join('').replace(/,/g, '') : '0'
  const targetNum = parseInt(rawNumStr, 10) || 0

  // Extract prefix and suffix around number
  const suffix = parsedStr.replace(/[\d,]/g, '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime = null

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)

            // Ease out cubic easing
            const easeProgress = 1 - Math.pow(1 - progress, 3)
            const currentVal = Math.floor(easeProgress * targetNum)

            setCount(currentVal)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(targetNum)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.2 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [targetNum, duration, hasAnimated])

  // Format count with commas if target had commas or >= 1000
  const formattedCount = targetNum >= 1000 || parsedStr.includes(',')
    ? count.toLocaleString('en-IN')
    : count

  return (
    <span ref={elementRef} className="count-up-val">
      {formattedCount}{suffix}
    </span>
  )
}
