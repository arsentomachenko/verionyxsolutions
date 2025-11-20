import Image from 'next/image'

const teammates = [
  {
    name: 'Muhammad Rafeeq',
    title: 'Founder & Sr. Financial Advisor',
    image: '1.jpg',
    description: 'As the visionary founder of Verionyx Solutions, Muhammad Rafeeq brings over a decade of experience in the financial sector. He specializes in strategic financial planning and business consulting, helping organizations optimize their financial health. His industry knowledge and client-first approach have been instrumental in building trusted relationships with clients across various industries.',
    socialMedia: [
      { platform: 'linkedin', url: '#' },
    ],
  },
  {
    name: 'Hafeez Rana',
    title: 'Software Engineer',
    image: '2.jpg',
    description: 'Hafeez Rana is a Co-Founder and expert Software Engineer specializing in high-performance Flutter app development. With a passion for building scalable, user-focused mobile applications, he has successfully led over 10 global client projects, delivering solutions that exceed expectations and drive business growth.',
    socialMedia: [
      { platform: 'facebook', url: '#' },
      { platform: 'twitter', url: '#' },
      { platform: 'linkedin', url: '#' },
      { platform: 'instagram', url: '#' },
      { platform: 'youtube', url: '#' },
    ],
  },
  {
    name: 'Abdullah Al Mahmud',
    title: 'Software Engineer',
    image: '3.png',
    description: 'Abdullah Al Mahmud is a passionate Software Engineer at Verionyx Solutions, specializing in the Dart ecosystem. His expertise lies in building high-performance, cross-platform applications using Flutter, and he brings a strong background in creating modern web solutions with frameworks like Jaspr. His innovative approach to development consistently delivers exceptional user experiences.',
    socialMedia: [
      { platform: 'twitter', url: '#' },
    ],
  },
  {
    name: 'Muhammad Bilal',
    title: 'Finance & Accounting Consultant | Record to Report | Taxation | Financial Statements | Accounting Systems Implementation',
    image: '4.jpg',
    description: 'Muhammad Bilal is an ACCA Member with extensive experience in Record to Report processes, taxation matters, financial statement preparation, and accounting software implementation consultancy. His expertise spans financial management, compliance, and process optimization, making him an invaluable asset for organizations seeking to streamline their accounting operations and ensure regulatory compliance.',
    socialMedia: [
      { platform: 'linkedin', url: '#' },
    ],
  },
]

const getSocialIcon = (platform: string) => {
  const iconMap: { [key: string]: string } = {
    facebook: 'fab fa-facebook',
    twitter: 'fab fa-twitter',
    linkedin: 'fab fa-linkedin',
    instagram: 'fab fa-instagram',
    youtube: 'fab fa-youtube',
  }
  return iconMap[platform] || 'fab fa-link'
}

export default function TeammatesSection() {
  return (
    <section id="teammates" className="teammates">
      <div className="container">
        <div className="row text-center">
          <h1 className="display-3 fw-bold">Our Team</h1>
          <div className="heading-line mb-1"></div>
          <p className="lead pt-1">Meet the talented individuals behind Verionyx Solutions</p>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {teammates.map((teammate, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="teammates__card shadow">
                <div className="teammates__image">
                  <Image 
                    src={`/images/teammates/${teammate.image}`} 
                    alt={`${teammate.name} picture`} 
                    className="img-fluid"
                    width={300}
                    height={300}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>
                <div className="teammates__content">
                  <h3 className="teammates__name fw-bold">{teammate.name}</h3>
                  <p className="teammates__title text-muted">{teammate.title}</p>
                  <p className="teammates__description">{teammate.description}</p>
                  <div className="teammates__social">
                    {teammate.socialMedia.map((social, idx) => (
                      <a 
                        key={idx}
                        href={social.url} 
                        className="teammates__social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={getSocialIcon(social.platform)}></i>
                      </a>
                    ))}
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

