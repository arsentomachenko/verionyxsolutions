import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getPortfolioProjects } from '@/lib/portfolio'
import { urlFor } from '@/lib/sanity'

type PortfolioItem = {
  id: string | number
  image: string
  title: string
  category: string
  description?: string
  liveUrl?: string
  detailHref?: string
}

const DEFAULT_PORTFOLIO_ITEMS: PortfolioItem[] = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  image: `/images/portfolio/portfolio-${i + 1}.jpg`,
  title: `project name goes here ${i + 1}`,
  category: 'category project',
}))

export default async function PortfolioPage() {
  const projects = await getPortfolioProjects()

  // Map Sanity data into UI-friendly structure
  const sanityItems: PortfolioItem[] = projects.map((project, index) => {
    const fallbackImage = `/images/portfolio/portfolio-${(index % 9) + 1}.jpg`
    const primaryImage = project.images?.[0]

    return {
      id: project._id || `project-${index}`,
      image: primaryImage?.asset?._ref ? urlFor(primaryImage).width(400).height(300).url() : fallbackImage,
      title: project.title || `project name goes here ${index + 1}`,
      category: project.category || 'category project',
      description: project.description,
      liveUrl: project.liveUrl,
      detailHref: project._id ? `/portfolio/${project._id}` : undefined,
    }
  })

  const portfolioItems = sanityItems.length > 0 ? sanityItems : DEFAULT_PORTFOLIO_ITEMS

  // Get unique categories for filter buttons
  const categories = sanityItems.length > 0
    ? ['All', ...Array.from(new Set(sanityItems.map((item) => item.category).filter(Boolean)))]
    : ['All', 'websites', 'design', 'mockup']

  return (
    <main>
      <Navbar />
      <section className="portfolio" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <Link href="/#portfolio" className="btn btn-outline-primary mb-3">
                <i className="fas fa-arrow-left me-2"></i>
                Back to home
              </Link>
              <h1 className="display-3 fw-bold text-capitalize">All Projects</h1>
              <div className="heading-line mb-4"></div>
            </div>
          </div>

          <div className="row mt-5 mb-4 g-3 text-center">
            <div className="col-md-12 d-flex justify-content-center gap-3 flex-wrap">
              {categories.map((category) => (
                <button 
                  key={category} 
                  className="btn btn-outline-primary" 
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="row">
            {portfolioItems.map((item) => {
              const cardBody = (
                <>
                  <div className="portfolio-box shadow">
                    <Image
                      src={item.image}
                      alt={`${item.title} image`}
                      title={`${item.title} picture`}
                      className="img-fluid"
                      width={400}
                      height={300}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  <div className="portfolio-card-info text-center px-3">
                    <h4 className="fw-bold text-capitalize mb-1">{item.title}</h4>
                    <p className="text-primary text-uppercase small fw-semibold mb-2">{item.category}</p>
                    {item.description && <p className="text-muted small mb-0">{item.description}</p>}
                  </div>
                </>
              )

              return (
                <div key={item.id} className="col-lg-4 col-md-6 mb-4">
                  {item.detailHref ? (
                    <Link href={item.detailHref} className="text-decoration-none text-reset d-block">
                      {cardBody}
                    </Link>
                  ) : (
                    <div>
                      {cardBody}
                      {item.liveUrl && (
                        <div className="text-center mt-3">
                          <a
                            href={item.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary btn-sm text-uppercase fw-semibold"
                          >
                            View project
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


