const faqs = [
  {
    id: 'collapseOne',
    headingId: 'headingOne',
    question: 'What services do you offer?',
    answer: 'We offer a wide range of services to help you achieve your goals, including Mobile apps & Website development, Villa renovation and maintenance in the UAE, and strategic Financial and business consulting.',
    show: true,
  },
  {
    id: 'collapseTwo',
    headingId: 'headingTwo',
    question: 'How long does a typical engagement last?',
    answer: 'Project timelines vary greatly depending on the scope and complexity. A software project could range from a few weeks to several months, while a villa renovation can take a few months. Financial consulting engagements can be one-off or ongoing. We provide a detailed timeline after our initial consultation.',
    show: false,
  },
  {
    id: 'collapseThree',
    headingId: 'headingThree',
    question: 'What industries do you specialize in?',
    answer: 'Our expertise is broad, and we serve clients across various sectors. While our work in mobile app & web development, villa renovation, and financial consulting is particularly strong, our core focus is on delivering exceptional results for every client, regardless of their industry.',
    show: false,
  },
  {
    id: 'collapseFour',
    headingId: 'headingFour',
    question: 'How do you measure success for your clients?',
    answer: 'We define success based on your unique objectives. This can include tangible metrics like increased revenue for our digital projects, the successful completion of a renovation on time and within budget, or achieving specific financial goals. Ultimately, client satisfaction and achieving your goals are our primary measures of success.',
    show: false,
  },
  {
    id: 'collapseFive',
    headingId: 'headingFive',
    question: 'What is your typical engagement process?',
    answer: 'Our process is designed to be clear and transparent. It typically involves three key phases: Discovery & Strategy, where we align on your goals; Execution & Development, where we turn the plan into reality; and Delivery & Optimization, where we finalize the project and ensure long-term success.',
    show: false,
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="row text-center">
          <h1 className="display-3 fw-bold text-uppercase">faq</h1>
          <div className="heading-line"></div>
          <p className="lead">frequently asked questions, get knowledge befere hand</p>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="accordion" id="accordionExample">
              {faqs.map((faq, index) => (
                <div key={index} className="accordion-item shadow mb-3">
                  <h2 className="accordion-header" id={faq.headingId}>
                    <button 
                      className={`accordion-button ${faq.show ? '' : 'collapsed'}`} 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target={`#${faq.id}`} 
                      aria-expanded={faq.show} 
                      aria-controls={faq.id}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div 
                    id={faq.id} 
                    className={`accordion-collapse collapse ${faq.show ? 'show' : ''}`} 
                    aria-labelledby={faq.headingId} 
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>{faq.answer}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

