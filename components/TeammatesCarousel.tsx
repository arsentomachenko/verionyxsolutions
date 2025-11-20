'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { urlFor } from '@/lib/sanity'

interface TeammateData {
  _id: string
  name: string
  summary: string
  title?: string
  photo?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  socialLinks?: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
    github?: string
    youtube?: string
  }
}

interface TeammatesCarouselProps {
  teammates: TeammateData[]
}

const getSocialIcon = (platform: string) => {
  const iconMap: { [key: string]: string } = {
    facebook: 'fab fa-facebook',
    twitter: 'fab fa-twitter',
    linkedin: 'fab fa-linkedin',
    instagram: 'fab fa-instagram',
    github: 'fab fa-github',
    youtube: 'fab fa-youtube',
  }
  return iconMap[platform] || 'fab fa-link'
}

const getSocialLinks = (socialLinks?: any) => {
  if (!socialLinks) return []
  
  const links: { platform: string; url: string }[] = []
  
  if (socialLinks.facebook) links.push({ platform: 'facebook', url: socialLinks.facebook })
  if (socialLinks.twitter) links.push({ platform: 'twitter', url: socialLinks.twitter })
  if (socialLinks.linkedin) links.push({ platform: 'linkedin', url: socialLinks.linkedin })
  if (socialLinks.instagram) links.push({ platform: 'instagram', url: socialLinks.instagram })
  if (socialLinks.github) links.push({ platform: 'github', url: socialLinks.github })
  if (socialLinks.youtube) links.push({ platform: 'youtube', url: socialLinks.youtube })
  
  return links
}

export default function TeammatesCarousel({ teammates }: TeammatesCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const cardsPerSlide = 3
  const totalSlides = Math.ceil(teammates.length / cardsPerSlide)

  useEffect(() => {
    // Initialize Bootstrap carousel after component mounts
    if (carouselRef.current && typeof window !== 'undefined') {
      const bootstrap = (window as any).bootstrap
      if (bootstrap) {
        const carousel = new bootstrap.Carousel(carouselRef.current, {
          interval: false, // Disable auto-slide
          wrap: true
        })
        return () => {
          carousel.dispose()
        }
      }
    }
  }, [])

  if (teammates.length === 0) {
    return null
  }

  // Group teammates into slides of 3
  const slides: TeammateData[][] = []
  for (let i = 0; i < teammates.length; i += cardsPerSlide) {
    slides.push(teammates.slice(i, i + cardsPerSlide))
  }

  return (
    <div className="row align-items-center">
      <div 
        ref={carouselRef}
        id="teammatesCarousel" 
        className="carousel slide" 
        data-bs-ride="false"
      >
        <div className="carousel-inner">
          {slides.map((slide, slideIndex) => (
            <div 
              key={slideIndex} 
              className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`}
            >
              <div className="row">
                {slide.map((teammate) => {
                  const imageUrl = teammate.photo?.asset?._ref
                    ? urlFor(teammate.photo).width(400).height(400).url()
                    : null
                  const socialLinks = getSocialLinks(teammate.socialLinks)

                  return (
                    <div key={teammate._id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                      <div className="teammates__card shadow">
                        <div className="teammates__image">
                          {imageUrl ? (
                            <Image 
                              src={imageUrl} 
                              alt={`${teammate.name} picture`} 
                              className="img-fluid"
                              width={300}
                              height={300}
                              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                          ) : (
                            <div style={{ width: '100%', height: '300px', backgroundColor: '#2a2a3e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <i className="fas fa-user fa-3x text-muted"></i>
                            </div>
                          )}
                        </div>
                        <div className="teammates__content">
                          <h3 className="teammates__name fw-bold">{teammate.name}</h3>
                          {teammate.title && (
                            <p className="teammates__title text-muted">{teammate.title}</p>
                          )}
                          <p className="teammates__description">{teammate.summary}</p>
                          {socialLinks.length > 0 && (
                            <div className="teammates__social">
                              {socialLinks.map((social, idx) => (
                                <a 
                                  key={idx}
                                  href={social.url} 
                                  className="teammates__social-link"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <i className={getSocialIcon(social.platform)}></i>
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        {totalSlides > 1 && (
          <>
            <button 
              className="carousel-control-prev" 
              type="button" 
              data-bs-target="#teammatesCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button 
              className="carousel-control-next" 
              type="button" 
              data-bs-target="#teammatesCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}
      </div>
    </div>
  )
}

