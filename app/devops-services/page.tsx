import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function DevOpsServicesPage() {
  return (
    <main>
      <Navbar />
      <section className="services-page" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="row text-center mb-5">
            <h1 className="display-3 fw-bold">DevOps Services</h1>
            <div className="heading-line mb-1"></div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
              <div className="services__content">
                <div className="icon d-block fas fa-cloud-upload-alt"></div>
                <h3 className="display-3--title mt-1">DevOps Services</h3>
                <p className="lh-lg">
                  We help organizations accelerate delivery by integrating development and operations into a seamless, 
                  automated workflow. Our DevOps services focus on improving system reliability, increasing deployment speed, 
                  and ensuring consistent, high-quality releases.
                </p>
                <p className="lh-lg">
                  From CI/CD pipelines to cloud infrastructure automation, we enable teams to build, test, and deploy with 
                  confidence and efficiency. Our approach combines best practices, cutting-edge tools, and proven methodologies 
                  to transform your software delivery process.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
              <div className="services__pic">
                <Image 
                  src="/images/services/service-3.png" 
                  alt="DevOps Services illustration" 
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
              <h2 className="fw-bold mb-4">Our DevOps Solutions</h2>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="icon d-block fas fa-sync mb-3" style={{ fontSize: '2rem', color: '#007bff' }}></div>
                      <h4 className="card-title">CI/CD Pipelines</h4>
                      <p className="card-text">
                        Automate your software delivery process with continuous integration and continuous deployment pipelines. 
                        We set up robust pipelines that enable rapid, reliable releases with automated testing and deployment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="icon d-block fas fa-cloud mb-3" style={{ fontSize: '2rem', color: '#007bff' }}></div>
                      <h4 className="card-title">Cloud Infrastructure</h4>
                      <p className="card-text">
                        Design and manage scalable cloud infrastructure using AWS, Azure, or GCP. We help you optimize costs, 
                        improve performance, and ensure high availability for your applications.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="icon d-block fas fa-shield-alt mb-3" style={{ fontSize: '2rem', color: '#007bff' }}></div>
                      <h4 className="card-title">Infrastructure as Code</h4>
                      <p className="card-text">
                        Manage your infrastructure with code using Terraform, Ansible, or CloudFormation. Version control your 
                        infrastructure, reduce manual errors, and enable faster, more reliable deployments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12">
              <h2 className="fw-bold mb-4">Additional Services</h2>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="icon d-block fas fa-chart-line mb-3" style={{ fontSize: '2rem', color: '#007bff' }}></div>
                      <h4 className="card-title">Monitoring & Observability</h4>
                      <p className="card-text">
                        Implement comprehensive monitoring solutions to track application performance, detect issues early, and 
                        ensure optimal system health. We set up logging, metrics, and alerting systems.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="icon d-block fas fa-lock mb-3" style={{ fontSize: '2rem', color: '#007bff' }}></div>
                      <h4 className="card-title">Security & Compliance</h4>
                      <p className="card-text">
                        Enhance your security posture with automated security scanning, vulnerability management, and compliance 
                        checks integrated into your DevOps workflow.
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

