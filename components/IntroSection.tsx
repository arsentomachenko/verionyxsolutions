'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function IntroSection() {
  const lightboxRef = useRef<any>(null)

  useEffect(() => {
    const initLightbox = () => {
      if (typeof window !== 'undefined' && (window as any).GLightbox) {
        const GLightbox = (window as any).GLightbox
        lightboxRef.current = GLightbox({
          'touchNavigation': true,
          'href': 'https://www.youtube.com/watch?v=DPt00XbqYzg',
          'type': 'video',
          'source': 'youtube',
          'width': 900,
          'autoPlayVideos': 'true',
        })
      } else {
        // Retry after a short delay if GLightbox isn't loaded yet
        setTimeout(initLightbox, 100)
      }
    }

    initLightbox()

    return () => {
      if (lightboxRef.current) {
        lightboxRef.current.destroy()
      }
    }
  }, [])

  return (
    <section id="home" className="intro-section">
      <div className="container">
        <div className="row align-items-center text-white">
          <div className="col-md-6 intros text-start">
            <p className="small text-white-50 mb-2">We are Verionyx</p>
            <h1 className="display-2">
              <span className="display-2--intro">Empowering Your Business with Trusted Solution</span>
              <span className="display-2--description lh-base">
                We deliver innovative software development, mobile & web apps, villas renovation & maintenance services, and financial & VAT consulting – all under one roof.
              </span>
            </h1>
            <button type="button" className="rounded-pill btn-rounded">
              Get in Touch
              <span><i className="fas fa-arrow-right"></i></span>
            </button>
          </div>
          <div className="col-md-6 intros text-end">
            <div className="video-box">
              <Image 
                src="/images/arts/intro-section-illustration.png" 
                alt="video illustration" 
                className="img-fluid"
                width={600}
                height={400}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </section>
  )
}

