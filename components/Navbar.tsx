'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image src="/images/logo.png" alt="logo image" width={50} height={50} style={{ width: 'auto', height: 'auto' }} />
          <span className="ms-2 text-white fw-bold fs-2">ERIONYX</span>
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">faq</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">contact</a>
            </li>
          </ul>
          <button type="button" className="rounded-pill btn-rounded">
            +971561414738
            <span>
              <i className="fas fa-phone-alt"></i>
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}

