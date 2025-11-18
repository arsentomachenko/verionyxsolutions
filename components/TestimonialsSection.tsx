'use client'

import Image from 'next/image'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Patrick Muriungi',
    role: 'CEO & founder',
    image: 'client-1.jpg',
    quote: 'As a startup, our financial strategy was a major pain point. Verionyx Solutions provided expert business consulting  that helped us streamline our budgeting and secure key investments. Their clear, actionable advice was invaluable and has set us up for sustainable growth.',
  },
  {
    name: 'Joy Marete',
    role: 'Finance Manager',
    image: 'client-2.jpg',
    quote: 'Verionyx Solutions completely transformed our online presence. Their team delivered a stunning and user-friendly mobile app and a powerful new website that perfectly captured our brand. We\'ve seen a 40% increase in user engagement since the launch. A truly professional and strategic partner.',
  },
  {
    name: 'ClaireBelle Zawadi',
    role: 'Global brand manager',
    image: 'client-3.jpg',
    quote: 'Working with Verionyx was a seamless experience from start to finish. They are our go-to for all our business needs, from digital solutions to ongoing maintenance. Their team is professional, responsive, and truly invested in our success. Highly recommended for any business seeking a reliable partner.',
  },
  {
    name: 'Uhuru Kenyatta',
    role: 'C.E.O & Founder',
    image: 'client-4.jpg',
    quote: 'We hired Verionyx for a major villa renovation project, and the results were beyond our expectations. Their attention to detail, from the structural changes to the finishing touches, was flawless. The project was completed on time and within budget, making the entire experience stress-free.',
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="testimonials">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fff" fillOpacity="1" d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      <div className="container">
        <div className="row text-center text-white">
          <h1 className="display-3 fw-bold">Testimonials</h1>
          <hr style={{ width: '100px', height: '3px' }} className="mx-auto" />
          <p className="lead pt-1">what our clients are saying</p>
        </div>

        <div className="row align-items-center">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                  <div className="testimonials__card">
                    <div className="lh-lg">
                      <i className="fas fa-quote-left"></i>
                      <p>{testimonial.quote}</p>
                      <i className="fas fa-quote-right"></i>
                      <div className="ratings p-1">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="testimonials__picture">
                    <Image 
                      src={`/images/testimonials/${testimonial.image}`} 
                      alt={`${testimonial.name} picture`} 
                      className="rounded-circle img-fluid"
                      width={96}
                      height={96}
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                  <div className="testimonials__name">
                    <h3>{testimonial.name}</h3>
                    <p className="fw-light">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button 
                className="btn btn-outline-light fas fa-long-arrow-alt-left" 
                type="button" 
                onClick={prevSlide}
              >
              </button>
              <button 
                className="btn btn-outline-light fas fa-long-arrow-alt-right" 
                type="button" 
                onClick={nextSlide}
              >
              </button>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fff" fillOpacity="1" d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </section>
  )
}

