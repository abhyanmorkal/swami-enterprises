import { useState, useEffect } from 'react'

import eldecoImg from '../../assets/projects/Eldeco.jpg'
import dlfAurevaImg from '../../assets/projects/dlf-aureva.jpg'
import dlfPrivanaImg from '../../assets/projects/dlfprivana.jpg'
import neemranaImg from '../../assets/projects/neemrana.jpg'
import signatureGlobalImg from '../../assets/projects/signature-global.jpg'

const slides = [
  {
    id: 1,
    title: 'DLF Aureva',
    category: 'Luxury Residential',
    image: dlfAurevaImg,
  },
  {
    id: 2,
    title: 'Signature Global',
    category: 'Premium Township',
    image: signatureGlobalImg,
  },
  {
    id: 3,
    title: 'Eldeco Group',
    category: 'Commercial Hub',
    image: eldecoImg,
  },
  {
    id: 4,
    title: 'DLF Privana',
    category: 'Residential Luxury',
    image: dlfPrivanaImg,
  },
  {
    id: 5,
    title: 'Neemrana Project',
    category: 'Industrial & Housing',
    image: neemranaImg,
  },
]

export default function MobileMockupSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  return (
    <div className="mobile-mockup-wrapper">
      {/* Phone Frame Device */}
      <div className="mobile-phone-device">
        {/* Dynamic Island / Top Camera Notch */}
        <div className="phone-notch" aria-hidden="true">
          <span className="phone-camera" />
          <span className="phone-speaker" />
        </div>

        {/* Screen Display */}
        <div className="phone-screen">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`phone-slide ${idx === currentIndex ? 'phone-slide--active' : ''}`}
            >
              {/* Ambient Blurred Background to Prevent Harsh Cropping */}
              <img src={slide.image} alt="" className="phone-slide-blur-bg" aria-hidden="true" />
              
              {/* Main Uncropped / Perfectly Fitted Image */}
              <img src={slide.image} alt={slide.title} className="phone-slide-img" />
              
              <div className="phone-slide-overlay" />
              <div className="phone-slide-info">
                <span className="phone-slide-tag">{slide.category}</span>
                <h4 className="phone-slide-title">{slide.title}</h4>
              </div>
            </div>
          ))}

          {/* Navigation Controls inside screen */}
          <button
            onClick={prevSlide}
            className="phone-nav-btn phone-nav-btn--prev"
            aria-label="Previous Slide"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="phone-nav-btn phone-nav-btn--next"
            aria-label="Next Slide"
          >
            ›
          </button>

          {/* Bottom Indicator Dots */}
          <div className="phone-dots">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`phone-dot ${idx === currentIndex ? 'phone-dot--active' : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Side Buttons Visual Accents */}
        <span className="phone-volume-up" />
        <span className="phone-volume-down" />
        <span className="phone-power-btn" />
      </div>
    </div>
  )
}
