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

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
              <div className="services__content">
                <div className="icon d-block fas fa-paper-plane"></div>
                <h3 className="display-3--title mt-1">Financial & Business Consulting</h3>
                <p className="lh-lg">
                  We offer strategic financial guidance and business solutions. We help you optimize your finances with 
                  data-driven decisions for long-term success.
                </p>
                <p className="lh-lg">
                  Our experienced consultants work closely with you to understand your business challenges and opportunities. 
                  We provide comprehensive financial analysis, strategic planning, and actionable recommendations to help you 
                  achieve your business goals and maximize profitability.
                </p>
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

          <div className="row mt-5">
            <div className="col-md-12">
              <h2 className="fw-bold mb-4">Our Consulting Services</h2>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="icon d-block fas fa-chart-pie mb-3" style={{ fontSize: '2rem', color: '#007bff' }}></div>
                      <h4 className="card-title">Financial Planning</h4>
                      <p className="card-text">
                        Develop comprehensive financial plans that align with your business objectives. We help you create 
                        budgets, forecast cash flow, and plan for growth while maintaining financial stability.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="icon d-block fas fa-file-invoice-dollar mb-3" style={{ fontSize: '2rem', color: '#007bff' }}></div>
                      <h4 className="card-title">VAT & Tax Consulting</h4>
                      <p className="card-text">
                        Navigate complex tax regulations and VAT requirements with confidence. Our experts ensure compliance 
                        while identifying opportunities to optimize your tax position and reduce liabilities.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="icon d-block fas fa-briefcase mb-3" style={{ fontSize: '2rem', color: '#007bff' }}></div>
                      <h4 className="card-title">Business Strategy</h4>
                      <p className="card-text">
                        Get expert guidance on business strategy, market analysis, and competitive positioning. We help you 
                        identify growth opportunities and develop actionable plans to achieve your strategic goals.
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
                      <div className="icon d-block fas fa-calculator mb-3" style={{ fontSize: '2rem', color: '#007bff' }}></div>
                      <h4 className="card-title">Financial Analysis</h4>
                      <p className="card-text">
                        Deep dive into your financial data with comprehensive analysis and reporting. We provide insights into 
                        profitability, cost structure, and financial performance to support informed decision-making.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="icon d-block fas fa-handshake mb-3" style={{ fontSize: '2rem', color: '#007bff' }}></div>
                      <h4 className="card-title">Risk Management</h4>
                      <p className="card-text">
                        Identify and mitigate financial risks that could impact your business. We help you develop risk management 
                        strategies and implement controls to protect your assets and ensure business continuity.
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

