import Image from 'next/image'
import Link from 'next/link'
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

export default async function PortfolioSection() {
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

  // Show only top 3 featured projects on homepage
  const featuredCount = 3
  const featuredItems = sanityItems.length > 0 
    ? sanityItems.slice(0, featuredCount)
    : DEFAULT_PORTFOLIO_ITEMS.slice(0, featuredCount)
  
  const hasMoreProjects = sanityItems.length > featuredCount

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="row text-center mt-5">
          <h1 className="display-3 fw-bold text-capitalize">Latest work</h1>
          <div className="heading-line"></div>
        </div>
        <div className="row">
          {featuredItems.map((item) => {
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
              <div key={item.id} className="col-lg-4 col-md-6">
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

        {hasMoreProjects && (
          <div className="row mt-5">
            <div className="col-12 text-center">
              <Link href="/portfolio" className="btn btn-primary rounded-pill btn-rounded" style={{ display: 'inline-block' }}>
                Explore More
                <span><i className="fas fa-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

