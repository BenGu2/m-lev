export default function AccessibilityPage() {
  return (
    <>
      {/* Statement Heading */}
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Accessibility Statement</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          We are committed to ensuring digital accessibility for people of all abilities.
        </p>
      </section>

      {/* WCAG Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Our Commitment to WCAG</h2>
          <p className="text-gray-600 mb-6">
            We strive to meet WCAG 2.1 Level AA standards. Our website is designed
            to be accessible to users of all abilities, including those using screen
            readers and other assistive technologies.
          </p>
          <p className="text-gray-600">
            We continuously work to improve the accessibility and usability of our
            website based on user feedback and the latest accessibility guidelines.
          </p>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Key Accessibility Features</h2>
          <ul className="space-y-4 text-gray-600">
            {[
              'Semantic HTML structure for better screen reader compatibility',
              'ARIA labels and landmarks where appropriate',
              'Keyboard navigation support',
              'High contrast text and clear typography',
              'Alternative text for images',
              'Resizable text without loss of functionality',
              'Clear focus indicators',
              'Consistent navigation structure'
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Accessibility Support</h2>
          <p className="text-gray-600 mb-6">
            If you encounter any accessibility barriers on our website or need
            assistance, please contact our accessibility team:
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:accessibility@costumerental.com" className="text-gray-600 hover:text-gray-900">
                accessibility@costumerental.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-900">
                (123) 456-7890
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-sm text-gray-500 text-center">
            Last updated: July 13, 2025
          </p>
        </div>
      </section>
    </>
  );
}
