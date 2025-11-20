import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function FinancialBusinessConsultingPage() {
  return (
    <main>
      <Navbar />
      <section className="services-page" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="row text-center mb-5">
            <h1 className="display-3 fw-bold">Financial & Business Consulting</h1>
            <div className="heading-line mb-1"></div>
          </div>

          {/* Financial Consultancy Section */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
              <div className="services__content">
                <div className="icon d-block fas fa-paper-plane"></div>
                <p className="text-muted mb-2"><i className="bi bi-dash-lg"></i> Service Details</p>
                <h3 className="display-3--title mt-1">Financial Consultancy</h3>
                <p className="lh-lg">
                  Strategic <strong>financial consultancy services</strong> that empower businesses to make informed decisions, 
                  improve financial performance, and achieve sustainable growth. Advisory support covers areas such as investment 
                  planning, cash flow management, financial risk analysis, and long-term business strategy.
                </p>
                <div className="mt-4">
                  <h2 className="fw-bold mb-4">Our Financial Consultancy Services</h2>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Financial Planning & Forecasting</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Cash Flow & Budget Management</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Investment & Growth Advisory</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Risk & Performance Analysis</h5>
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
                  src="/images/services/service-1.png" 
                  alt="Financial & Business Consulting illustration" 
                  className="img-fluid"
                  width={500}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          {/* Internal Audit Services Section */}
          <div className="row align-items-center mb-5 mt-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
              <div className="services__content">
                <div className="icon d-block fas fa-shield-alt"></div>
                <p className="text-muted mb-2"><i className="bi bi-dash-lg"></i> Service Details</p>
                <h3 className="display-3--title mt-1">Internal Audit Services</h3>
                <p className="lh-lg">
                  Led by ACCA-qualified professionals with over a decade of proven expertise, our Internal Audit services deliver 
                  precise, data-driven insights that strengthen internal controls, enhance compliance, and drive operational excellence.
                </p>
                <div className="mt-4">
                  <h2 className="fw-bold mb-4">Our Internal Audit Services</h2>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Internal Audit & Risk Management</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Stock & Inventory Audit</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Financial Control Review</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Compliance & Regulatory Audit</h5>
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
                  src="/images/services/service-1.png" 
                  alt="Internal Audit Services illustration" 
                  className="img-fluid"
                  width={500}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          {/* Bookkeeping Services Section */}
          <div className="row align-items-center mb-5 mt-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
              <div className="services__content">
                <div className="icon d-block fas fa-book"></div>
                <p className="text-muted mb-2"><i className="bi bi-dash-lg"></i> Service Details</p>
                <h3 className="display-3--title mt-1">Bookkeeping Services</h3>
                <p className="lh-lg">
                  Reliable bookkeeping services that ensure accurate financial records, transparent reporting, and smooth day-to-day 
                  operations. Designed for startups, SMEs, and established businesses, the service provides clarity and control over 
                  financial data to support smarter decision-making.
                </p>
                <div className="mt-4">
                  <h2 className="fw-bold mb-4">Our Bookkeeping Services</h2>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Accurate Record-Keeping</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Expense & Revenue Management</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Financial Reporting</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Reconciliation Services</h5>
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
                  src="/images/services/service-1.png" 
                  alt="Bookkeeping Services illustration" 
                  className="img-fluid"
                  width={500}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          {/* VAT & Corporate Tax Consultancy Section */}
          <div className="row align-items-center mb-5 mt-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
              <div className="services__content">
                <div className="icon d-block fas fa-file-invoice-dollar"></div>
                <p className="text-muted mb-2"><i className="bi bi-dash-lg"></i> Service Details</p>
                <h3 className="display-3--title mt-1">VAT & Corporate Tax (CT) Consultancy</h3>
                <p className="lh-lg">
                  Comprehensive VAT and Corporate Tax consultancy services designed to help businesses in the UAE stay fully compliant 
                  while optimizing financial efficiency. From registration and implementation to advisory and strategic planning, expert 
                  guidance ensures smooth integration of tax processes into daily operations.
                </p>
                <div className="mt-4">
                  <h2 className="fw-bold mb-4">Our VAT & Corporate Tax Services</h2>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">VAT & CT Registration</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Implementation & Integration</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Health Checks & Audits</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Strategic Tax Planning</h5>
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
                  src="/images/services/service-1.png" 
                  alt="VAT & Corporate Tax Consultancy illustration" 
                  className="img-fluid"
                  width={500}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          {/* Account Management Section */}
          <div className="row align-items-center mb-5 mt-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
              <div className="services__content">
                <div className="icon d-block fas fa-briefcase"></div>
                <p className="text-muted mb-2"><i className="bi bi-dash-lg"></i> Service Details</p>
                <h3 className="display-3--title mt-1">Account Management</h3>
                <p className="lh-lg">
                  End-to-end account management solutions designed to keep financial operations organized, transparent, and growth-oriented. 
                  Services cover day-to-day account handling, financial tracking, and reporting, ensuring businesses maintain clarity 
                  and control over their financial health.
                </p>
                <div className="mt-4">
                  <h2 className="fw-bold mb-4">Our Account Management Services</h2>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">General Ledger Management</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Accounts Payable & Receivable</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Financial Reporting</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3" style={{ color: '#C5ED3F', fontSize: '1.25rem' }}>
                          <i className="fas fa-star"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Process Optimization</h5>
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
                  src="/images/services/service-1.png" 
                  alt="Account Management illustration" 
                  className="img-fluid"
                  width={500}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
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


