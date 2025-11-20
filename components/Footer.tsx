'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row text-white">
          {/* Left Column - Company Information */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-3">
              <Image 
                src="/images/logo.png" 
                alt="Verionyxsolutions Logo" 
                width={200}
                height={60}
                style={{ width: 'auto', height: '60px', maxWidth: '100%' }}
                priority
              />
              <h5 className="text-uppercase fw-bold mb-0 ms-2">ERIONYX</h5>
            </div>
            <hr className="bg-white mb-4" style={{ width: '60px', height: '2px', opacity: 1 }} />
            <p className="lh-lg mb-4">
              Driven by discipline and innovation, we deliver quality and trusted solutions. We celebrate diversity and foster equality beyond gender, culture, and region.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Middle Column - Important Links */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="fw-bold mb-4">Important Links</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link href="/#about" className="text-white text-decoration-none">About Us</Link>
              </li>
              <li className="mb-3">
                <Link href="/#services" className="text-white text-decoration-none">Our Services</Link>
              </li>
              <li className="mb-3">
                <Link href="/#news" className="text-white text-decoration-none">News & Blog</Link>
              </li>
              <li className="mb-3">
                <Link href="/#contact" className="text-white text-decoration-none">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Get In Touch */}
          <div className="col-lg-4 col-md-12">
            <h5 className="fw-bold mb-4">Get In Touch</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <i className="fas fa-map-marker-alt me-3 mt-1"></i>
                <span>Sharjah Media City, Shams Free Zone, UAE</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="fas fa-phone me-3"></i>
                <a href="tel:+971561414738" className="text-white text-decoration-none">+971561414738</a>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="fas fa-envelope me-3"></i>
                <a href="mailto:info@verionyxsolutions.com" className="text-white text-decoration-none">info@verionyxsolutions.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Legal */}
      <div className="border-top border-secondary" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <div className="container py-4">
          <div className="row text-white align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <p className="mb-0 small">©2025 Verionyx Solutions LLC | All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <Link href="/privacy" className="text-white text-decoration-none me-3 small">Privacy</Link>
              <span className="text-white-50 me-3">|</span>
              <Link href="/terms" className="text-white text-decoration-none small">Terms & Condition</Link>
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="shadow btn-primary rounded-circle back-to-top" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
        <i className="fas fa-chevron-up"></i>
      </a>
    </footer>
  )
}

