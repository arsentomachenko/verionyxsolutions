import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Financial & Business Consulting',
    icon: 'fa-paper-plane',
    image: 'service-1.png',
    description: 'We offer strategic financial guidance and business solutions. We help you optimize your finances with data-driven decisions for long-term success.',
    imageFirst: false,
  },
  {
    title: 'Mobile Apps & Web Development',
    icon: 'fa-code',
    image: 'service-2.png',
    description: 'Crafting innovative and responsive digital experiences. From intuitive mobile apps to powerful websites, we build the technology that drives your business forward.',
    imageFirst: true,
  },
  {
    title: 'DevOps Services',
    icon: 'fa-cloud-upload-alt',
    image: 'service-3.png',
    description: 'We help organizations accelerate delivery by integrating development and operations into a seamless, automated workflow. Our DevOps services focus on improving system reliability, increasing deployment speed, and ensuring consistent, high-quality releases. From CI/CD pipelines to cloud infrastructure automation, we enable teams to build, test, and deploy with confidence and efficiency.',
    imageFirst: false,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="row text-center">
          <h1 className="display-3 fw-bold">Our Services</h1>
          <div className="heading-line mb-1"></div>
        </div>
        <div className="row pt-2 pb-2 mt-0 mb-3">
          <div className="col-md-6 border-right">
            <div className="bg-white p-3">
              <h2 className="fw-bold text-capitalize text-center">
                Our Services Range From Initial Design To Deployment Anywhere Anytime
              </h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-white p-4 text-start">
              <p className="fw-light">
              Backed by more than 20 years of experience, we specialize in delivering impeccably clean, refined, and detail-oriented results. We are dedicated to providing an exceptional client experience, prioritizing superior service and uncompromising quality in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {services.map((service, index) => (
          <div key={index} className="row">
            {service.imageFirst ? (
              <>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start">
                  <div className="services__pic">
                    <Image 
                      src={`/images/services/${service.image}`} 
                      alt={`${service.title} illustration`} 
                      className="img-fluid"
                      width={500}
                      height={400}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                  <div className="services__content">
                    <div className={`icon d-block fas ${service.icon}`}></div>
                    <h3 className="display-3--title mt-1">{service.title}</h3>
                    <p className="lh-lg">{service.description}</p>
                    {service.title === 'Mobile Apps & Web Development' ? (
                      <Link href="/mobile-apps-web-development" className="rounded-pill btn-rounded border-primary text-decoration-none" style={{ display: 'inline-block' }}>
                        Learn more
                        <span style={{ alignItems: "center", verticalAlign: "middle", textAlign: "center" }}>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </Link>
                    ) : service.title === 'DevOps Services' ? (
                      <Link href="/devops-services" className="rounded-pill btn-rounded border-primary text-decoration-none" style={{ display: 'inline-block' }}>
                        Learn more
                        <span style={{ alignItems: "center", verticalAlign: "middle", textAlign: "center" }}>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </Link>
                    ) : service.title === 'Financial & Business Consulting' ? (
                      <Link href="/financial-business-consulting" className="rounded-pill btn-rounded border-primary text-decoration-none" style={{ display: 'inline-block' }}>
                        Learn more
                        <span style={{ alignItems: "center", verticalAlign: "middle", textAlign: "center" }}>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </Link>
                    ) : (
                      <button type="button" className="rounded-pill btn-rounded border-primary">
                        Learn more
                        <span style={{ alignItems: "center", verticalAlign: "middle", textAlign: "center" }}>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                  <div className="services__content">
                    <div className={`icon d-block fas ${service.icon}`}></div>
                    <h3 className="display-3--title mt-1">{service.title}</h3>
                    <p className="lh-lg">{service.description}</p>
                    {service.title === 'Mobile Apps & Web Development' ? (
                      <Link href="/mobile-apps-web-development" className="rounded-pill btn-rounded border-primary text-decoration-none" style={{ display: 'inline-block' }}>
                        Learn more
                        <span style={{ alignItems: "center", verticalAlign: "middle", textAlign: "center" }}>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </Link>
                    ) : service.title === 'DevOps Services' ? (
                      <Link href="/devops-services" className="rounded-pill btn-rounded border-primary text-decoration-none" style={{ display: 'inline-block' }}>
                        Learn more
                        <span style={{ alignItems: "center", verticalAlign: "middle", textAlign: "center" }}>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </Link>
                    ) : service.title === 'Financial & Business Consulting' ? (
                      <Link href="/financial-business-consulting" className="rounded-pill btn-rounded border-primary text-decoration-none" style={{ display: 'inline-block' }}>
                        Learn more
                        <span style={{ alignItems: "center", verticalAlign: "middle", textAlign: "center" }}>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </Link>
                    ) : (
                      <button type="button" className="rounded-pill btn-rounded border-primary">
                        Learn more
                        <span style={{ alignItems: "center", verticalAlign: "middle", textAlign: "center" }}>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </button>
                    )}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
                  <div className="services__pic">
                    <Image 
                      src={`/images/services/${service.image}`} 
                      alt={`${service.title} illustration`} 
                      className="img-fluid"
                      width={500}
                      height={400}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

