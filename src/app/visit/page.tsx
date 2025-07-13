export default function VisitPage() {
  return (
    <>
      {/* Title */}
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center mb-6">Visit Us</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Come explore our collection in person.
        </p>
      </section>

      {/* Map */}
      <section className="mb-16">
        <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
          {/* Replace src with actual Google Maps embed URL */}
          <iframe
            src="about:blank"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Location map"
          ></iframe>
        </div>
      </section>

      {/* Address Block */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
            {/* English Address */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Address</h2>
              <address className="not-italic text-gray-600 space-y-2">
                <p>123 Costume Street</p>
                <p>Fashion District</p>
                <p>Tel Aviv, Israel</p>
                <p>ZIP: 12345</p>
              </address>
            </div>

            {/* Hebrew Address */}
            <div className="text-right" dir="rtl">
              <h2 className="text-xl font-semibold mb-4">כתובת</h2>
              <address className="not-italic text-gray-600 space-y-2">
                <p>רחוב תחפושת 123</p>
                <p>רובע האופנה</p>
                <p>תל אביב</p>
                <p>מיקוד: 12345</p>
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Parking & Building Access</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Free parking available in the building's underground parking lot.
                Please take a ticket at the entrance and get it validated at our reception.
              </p>
              <p>
                The building is fully accessible with elevator access to all floors.
                Our showroom is located on the 3rd floor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Link */}
      <section className="py-16 text-center">
        <p className="text-gray-600 mb-4">Have questions about your visit?</p>
        <a
          href="/contact"
          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Contact Us
        </a>
      </section>
    </>
  );
}
