import { useState, useEffect } from 'react'
import AnimateOnScroll from '../common/AnimateOnScroll'

import agraImg from '../../assets/markets/agra.jpg'
import lucknowImg from '../../assets/markets/lucknow.jpg'
import jaipurImg from '../../assets/markets/jaipur.jpg'
import mumbaiImg from '../../assets/markets/mumbai.jpg'
import panIndiaImg from '../../assets/markets/pan-india.jpg'

const marketItems = [
  {
    id: 'agra',
    name: 'Agra',
    tag: 'Headquarters',
    image: agraImg,
  },
  {
    id: 'lucknow',
    name: 'Lucknow',
    tag: 'Uttar Pradesh',
    image: lucknowImg,
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    tag: 'Rajasthan',
    image: jaipurImg,
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    tag: 'Metro Cities',
    image: mumbaiImg,
  },
  {
    id: 'pan-india',
    name: 'Pan-India',
    tag: 'Digital Reach',
    image: panIndiaImg,
  },
]

export default function MarketsSection() {
  const [startIndex, setStartIndex] = useState(0)

  // Max index shift for 4-card display
  const maxIndex = marketItems.length - 4 // 1 index shift (or loop back)

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(timer)
  }, [maxIndex])

  const nextSlide = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  return (
    <section className="section markets-four-card-section">
      <div className="container">
        <div className="markets-four-header">
          <AnimateOnScroll className="section-intro section-intro-left">
            <span className="section-eyebrow-pill">Markets Served</span>
            <h2>An Agra-based agency trusted across <em>India.</em></h2>
          </AnimateOnScroll>

          {/* Carousel Arrows Header Controls */}
          <div className="markets-four-controls">
            <button
              onClick={prevSlide}
              className="markets-four-arrow"
              aria-label="Previous Markets"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="markets-four-arrow"
              aria-label="Next Markets"
            >
              ›
            </button>
          </div>
        </div>

        {/* 4-Card Visible Slider Viewport */}
        <div className="markets-four-viewport">
          <div
            className="markets-four-track"
            style={{
              transform: `translateX(-${startIndex * (100 / 4 + 0.3)}%)`,
            }}
          >
            {marketItems.map((market) => (
              <div key={market.id} className="markets-four-card">
                <img
                  src={market.image}
                  alt={`${market.name} location`}
                  className="markets-four-img"
                  loading="lazy"
                />
                <div className="markets-four-overlay" aria-hidden="true" />
                <div className="markets-four-info">
                  <span className="markets-four-tag">{market.tag}</span>
                  <h3 className="markets-four-title">{market.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
