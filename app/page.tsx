import Navbar from '@/components/Navbar'
import IntroSection from '@/components/IntroSection'
import ServicesSection from '@/components/ServicesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import TeammatesSection from '@/components/TeammatesSection'
import FAQSection from '@/components/FAQSection'
import PortfolioSection from '@/components/PortfolioSection'
import GetStartedSection from '@/components/GetStartedSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <IntroSection />
      <ServicesSection />
      <TestimonialsSection />
      <TeammatesSection />
      <FAQSection />
      <PortfolioSection />
      <GetStartedSection />
      <Footer />
    </main>
  )
}

