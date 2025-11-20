import TeammatesCarousel from './TeammatesCarousel'

interface TeammateData {
  _id: string
  name: string
  summary: string
  title?: string
  photo?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  socialLinks?: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
    github?: string
    youtube?: string
  }
}


export default async function TeammatesSection() {
  const { getTeammates } = await import('@/lib/teammates')
  
  let teammates: TeammateData[] = []
  try {
    teammates = await getTeammates()
  } catch (error) {
    console.error('Error fetching teammates:', error)
  }

  // Fallback teammates if Sanity fails or returns empty
  const fallbackTeammates: TeammateData[] = [
    {
      _id: 'fallback-1',
      name: 'Muhammad Rafeeq',
      title: 'Founder & Sr. Financial Advisor',
      summary: 'As the visionary founder of Verionyx Solutions, Muhammad Rafeeq brings over a decade of experience in the financial sector. He specializes in strategic financial planning and business consulting, helping organizations optimize their financial health.',
      socialLinks: {
        linkedin: '#'
      }
    },
    {
      _id: 'fallback-2',
      name: 'Hafeez Rana',
      title: 'Software Engineer',
      summary: 'Hafeez Rana is a Co-Founder and expert Software Engineer specializing in high-performance Flutter app development. With a passion for building scalable, user-focused mobile applications, he has successfully led over 10 global client projects.',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#',
        youtube: '#'
      }
    },
    {
      _id: 'fallback-3',
      name: 'Abdullah Al Mahmud',
      title: 'Software Engineer',
      summary: 'Abdullah Al Mahmud is a passionate Software Engineer at Verionyx Solutions, specializing in the Dart ecosystem. His expertise lies in building high-performance, cross-platform applications using Flutter.',
      socialLinks: {
        twitter: '#'
      }
    },
    {
      _id: 'fallback-4',
      name: 'Muhammad Bilal',
      title: 'Finance & Accounting Consultant',
      summary: 'Muhammad Bilal is an ACCA Member with extensive experience in Record to Report processes, taxation matters, financial statement preparation, and accounting software implementation consultancy.',
      socialLinks: {
        linkedin: '#'
      }
    }
  ]

  const displayTeammates = teammates.length > 0 ? teammates : fallbackTeammates

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
        <TeammatesCarousel teammates={displayTeammates} />
      </div>
    </section>
  )
}

