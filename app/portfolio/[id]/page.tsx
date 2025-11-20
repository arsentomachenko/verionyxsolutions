import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getPortfolioProjectById } from '@/lib/portfolio'
import { urlFor } from '@/lib/sanity'

type ProjectPageProps = {
  params: {
    id: string
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = await getPortfolioProjectById(params.id)

  if (!project) {
    notFound()
  }

  const fallbackImage = '/images/portfolio/portfolio-1.jpg'
  const heroImage = project.images?.[0]
  const heroImageUrl = heroImage?.asset?._ref
    ? urlFor(heroImage).width(900).height(600).url()
    : fallbackImage

  const galleryImages = project.images?.slice(1) ?? []

  return (
    <main>
      <Navbar />
      <section className="portfolio project-detail" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <Link href="/#portfolio" className="btn btn-outline-primary mb-3">
                <i className="fas fa-arrow-left me-2"></i>
                Back to portfolio
              </Link>
              <h1 className="display-4 fw-bold">{project.title || 'Project details'}</h1>
              {project.category && <p className="text-primary text-uppercase fw-semibold mt-2">{project.category}</p>}
            </div>
          </div>

          <div className="row g-4 align-items-start">
            <div className="col-lg-7">
              <div className="portfolio-box shadow">
                <Image
                  src={heroImageUrl}
                  alt={project.title || 'Project hero image'}
                  className="img-fluid"
                  width={900}
                  height={600}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bg-white shadow-sm p-4 rounded-3 h-100 text-white">
                <h2 className="h4 fw-bold mb-3">About this project</h2>
                {project.description ? (
                  <p className="lh-lg">{project.description}</p>
                ) : (
                  <p className="lh-lg text-muted">
                    This project currently has no description. Add one in Sanity Studio to share more details.
                  </p>
                )}

                {project.skillset && project.skillset.length > 0 && (
                  <div className="mt-4">
                    <h3 className="h5 fw-bold mb-3">Skill set</h3>
                    <div className="row g-3">
                      {project.skillset.map((skill) => {
                        const iconUrl = skill.avatar?.asset?._ref
                          ? urlFor(skill.avatar).width(64).height(64).url()
                          : null

                        return (
                          <div key={skill._id} className="col-6 col-md-4">
                            <div className="skill-card text-center p-3 border rounded-3 h-100">
                              {iconUrl ? (
                                <Image
                                  src={iconUrl}
                                  alt={skill.name}
                                  width={48}
                                  height={48}
                                  className="img-fluid mb-2"
                                  unoptimized
                                />
                              ) : (
                                <div className="skill-icon-placeholder mb-2">
                                  <i className="fas fa-tools"></i>
                                </div>
                              )}
                              <p className="small fw-semibold mb-0">{skill.name}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {project.liveUrl && (
                  <div className="mt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary rounded-pill btn-rounded"
                    >
                      Visit live project
                      <span>
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {galleryImages.length > 0 && (
            <div className="row mt-5 g-4">
              <div className="col-12">
                <h2 className="h4 fw-bold mb-4">Gallery</h2>
              </div>
              {galleryImages.map((image, index) => {
                const imageUrl = image.asset?._ref ? urlFor(image).width(600).height(400).url() : fallbackImage
                return (
                  <div key={index} className="col-md-4">
                    <div className="portfolio-box shadow-sm">
                      <Image
                        src={imageUrl}
                        alt={`${project.title || 'Project'} gallery image ${index + 1}`}
                        className="img-fluid"
                        width={600}
                        height={400}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}

