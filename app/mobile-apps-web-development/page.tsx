import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MobileAppsWebDevelopmentPage() {
  return (
    <main>
      <Navbar />
      <section className="services-page" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="row text-center mb-5">
            <h1 className="display-3 fw-bold">Mobile Apps & Web Development</h1>
            <div className="heading-line mb-1"></div>
          </div>

          {/* Mobile Application Development Section */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
              <div className="services__content">
                <div className="icon d-block fas fa-mobile-alt"></div>
                <p className="text-muted mb-2"><i className="bi bi-dash-lg"></i> Service Details</p>
                <h3 className="display-3--title mt-1">Mobile Application Development</h3>
                <p className="lh-lg">
                  At Verionyx Solutions, we specialize in building high-performance cross-platform mobile applications using the Flutter framework, 
                  trusted by Google and used globally for modern app development. With Flutter, we deliver iOS and Android apps from a single codebase, 
                  helping businesses reduce costs, speed up time-to-market, and ensure consistent user experiences.
                </p>
                <div className="mt-4">
                  <h2 className="fw-bold mb-4">Our Mobile Application Development Services</h2>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Consultation and Requirements Gathering</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Front-End and Back End Development</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Cross-platform support (android, iOS & web)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Ongoing Maintenance and Support</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
              <div className="services__pic">
                <Image 
                  src="/images/services/service-2.png" 
                  alt="Mobile Application Development illustration" 
                  className="img-fluid"
                  width={500}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          {/* Website Development Services Section */}
          <div className="row align-items-center mb-5 mt-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start order-md-2">
              <div className="services__pic">
                <Image 
                  src="/images/services/service-2.png" 
                  alt="Website Development Services illustration" 
                  className="img-fluid"
                  width={500}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 order-md-1">
              <div className="services__content">
                <div className="icon d-block fas fa-globe"></div>
                <p className="text-muted mb-2"><i className="bi bi-dash-lg"></i> Service Details</p>
                <h3 className="display-3--title mt-1">Website Development Services</h3>
                <p className="lh-lg">
                  Websites are built with WordPress, the world's most trusted CMS, to deliver scalable, secure, and easy-to-manage digital platforms. 
                  From corporate websites to full-featured e-commerce stores, solutions are tailored to enhance brand presence and drive measurable results.
                </p>
                <div className="mt-4">
                  <h2 className="fw-bold mb-4">Our Website Development Services</h2>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Consultation and Requirements Gathering</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Content Management System (CMS) Integration</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Custom Themes & Plugins</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Maintenance & Optimization</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="row mt-5 mb-5">
            <div className="col-md-12">
              <h2 className="fw-bold mb-4 text-center">Why Choose us</h2>
              <h3 className="fw-bold mb-4 text-center">Why choose Mobile App & Web Development Service</h3>
              <p className="text-center mb-5 lh-lg">
                Pellentesque blandit nibh eget egestas molestie justo diam hendrerit tortor et sollicitudin dolor diam vitae orci seieed et ultrices elit
              </p>
              <div className="row">
                <div className="col-md-3 col-sm-6 mb-4">
                  <div className="text-center">
                    <div className="icon d-block fas fa-users mb-3" style={{ fontSize: '3rem', color: '#3a5bc6' }}></div>
                    <h4 className="fw-bold">Dedicated & Experience Team Member</h4>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                  <div className="text-center">
                    <div className="icon d-block fas fa-trophy mb-3" style={{ fontSize: '3rem', color: '#3a5bc6' }}></div>
                    <h4 className="fw-bold">Awards Winning Digital Agency</h4>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                  <div className="text-center">
                    <div className="icon d-block fas fa-globe mb-3" style={{ fontSize: '3rem', color: '#3a5bc6' }}></div>
                    <h4 className="fw-bold">We Have 3.5k+ Global & Local Customer</h4>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                  <div className="text-center">
                    <div className="icon d-block fas fa-heart mb-3" style={{ fontSize: '3rem', color: '#3a5bc6' }}></div>
                    <h4 className="fw-bold">100% of our client Satisfactions</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <Link href="/#services" className="rounded-pill btn-rounded border-primary me-3" style={{ display: 'inline-block' }}>
                <span><i className="fas fa-arrow-left"></i></span>
                Back to Services
              </Link>
              <Link href="/#home" className="rounded-pill btn-rounded border-primary" style={{ display: 'inline-block' }}>
                Get in Touch
                <span><i className="fas fa-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

