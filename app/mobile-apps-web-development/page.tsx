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

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
              <div className="services__content">
                <div className="icon d-block fas fa-code"></div>
                <h3 className="display-3--title mt-1">Mobile Apps & Web Development</h3>
                <p className="lh-lg">
                  Crafting innovative and responsive digital experiences. From intuitive mobile apps to powerful websites, 
                  we build the technology that drives your business forward.
                </p>
                <p className="lh-lg">
                  Our team of experienced developers specializes in creating custom solutions tailored to your unique needs. 
                  Whether you need a native mobile application for iOS or Android, a cross-platform solution, or a modern 
                  web application, we have the expertise to bring your vision to life.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
              <div className="services__pic">
                <Image 
                  src="/images/services/service-2.png" 
                  alt="Mobile Apps & Web Development illustration" 
                  className="img-fluid"
                  width={500}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12">
              <h2 className="fw-bold mb-4">Our Development Services</h2>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="icon d-block fas fa-mobile-alt mb-3" style={{ fontSize: '2rem', color: '#007bff' }}></div>
                      <h4 className="card-title">Mobile App Development</h4>
                      <p className="card-text">
                        Native iOS and Android applications built with the latest technologies and best practices. 
                        We create apps that are fast, secure, and user-friendly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="icon d-block fas fa-globe mb-3" style={{ fontSize: '2rem', color: '#007bff' }}></div>
                      <h4 className="card-title">Web Development</h4>
                      <p className="card-text">
                        Modern, responsive websites and web applications using cutting-edge frameworks. 
                        We build scalable solutions that grow with your business.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="icon d-block fas fa-sync-alt mb-3" style={{ fontSize: '2rem', color: '#007bff' }}></div>
                      <h4 className="card-title">Cross-Platform Solutions</h4>
                      <p className="card-text">
                        Reach users on all platforms with a single codebase. We use React Native, Flutter, 
                        and other technologies to maximize your reach and minimize development time.
                      </p>
                    </div>
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

