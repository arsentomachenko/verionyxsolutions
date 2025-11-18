import Image from 'next/image'

const portfolioItems = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  image: `portfolio-${i + 1}.jpg`,
  title: `project name goes here ${i + 1}`,
  category: 'category project',
}))

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="row text-center mt-5">
          <h1 className="display-3 fw-bold text-capitalize">Latest work</h1>
          <div className="heading-line"></div>
        </div>
        <div className="row mt-5 mb-4 g-3 text-center">
          <div className="col-md-12">
            <button className="btn btn-outline-primary" type="button">All</button>
            <button className="btn btn-outline-primary" type="button">websites</button>
            <button className="btn btn-outline-primary" type="button">design</button>
            <button className="btn btn-outline-primary" type="button">mockup</button>
          </div>
        </div>

        <div className="row">
          {portfolioItems.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div className="portfolio-box shadow">
                <Image 
                  src={`/images/portfolio/${item.image}`} 
                  alt={`portfolio ${item.id} image`} 
                  title={`portfolio ${item.id} picture`} 
                  className="img-fluid"
                  width={400}
                  height={300}
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

