'use client';

import { FormEvent } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/constants/translations';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const { elementRef: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({ threshold: 0.1 });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added here
  };

  return (
    <div className="min-h-screen bg-[#f8f5f1]" dir={language === 'he' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section
        ref={headerRef}
        className="py-24 bg-[#2c1810] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/mlevlogo.png')] bg-center bg-no-repeat bg-contain opacity-30 transform scale-150 blur-sm" />
        </div>
        <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          headerVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <h1 className="text-7xl font-bold text-center mb-8 font-serif">{t.contact.title}</h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-12 shadow-xl border border-[#2c1810]/10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="firstName" className="block text-xl font-serif text-[#2c1810] mb-2">
                    {t.contact.form.firstName}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-[#8b4513]/20 bg-[#f8f5f1] text-[#2c1810] focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:border-transparent transition-all duration-300 ease-in-out hover:border-[#8b4513]/40 font-serif"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xl font-serif text-[#2c1810] mb-2">
                    {t.contact.form.lastName}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-[#8b4513]/20 bg-[#f8f5f1] text-[#2c1810] focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:border-transparent transition-all duration-300 ease-in-out hover:border-[#8b4513]/40 font-serif"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xl font-serif text-[#2c1810] mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-[#8b4513]/20 bg-[#f8f5f1] text-[#2c1810] focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:border-transparent transition-all duration-300 ease-in-out hover:border-[#8b4513]/40 font-serif"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-xl font-serif text-[#2c1810] mb-2">
                  {t.contact.form.subject}
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-[#8b4513]/20 bg-[#f8f5f1] text-[#2c1810] focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:border-transparent transition-all duration-300 ease-in-out hover:border-[#8b4513]/40 font-serif"
                  required
                >
                  <option value="">{language === 'he' ? 'בחר נושא' : 'Please select'}</option>
                  <option value="general">{t.contact.subjectOptions.general}</option>
                  <option value="rental">{t.contact.subjectOptions.rental}</option>
                  <option value="photography">{t.contact.subjectOptions.photography}</option>
                  <option value="other">{t.contact.subjectOptions.other}</option>
                </select>
              </div>
              <div>
                <label htmlFor="organization" className="block text-xl font-serif text-[#2c1810] mb-2">
                  {t.contact.form.organization}
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-3 rounded-lg border border-[#8b4513]/20 bg-[#f8f5f1] text-[#2c1810] focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:border-transparent transition-all duration-300 ease-in-out hover:border-[#8b4513]/40 font-serif"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xl font-serif text-[#2c1810] mb-2">
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-[#8b4513]/20 bg-[#f8f5f1] text-[#2c1810] focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:border-transparent transition-all duration-300 ease-in-out hover:border-[#8b4513]/40 font-serif"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xl font-serif text-[#2c1810] mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-[#8b4513]/20 bg-[#f8f5f1] text-[#2c1810] focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:border-transparent transition-all duration-300 ease-in-out hover:border-[#8b4513]/40 font-serif resize-none"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 font-serif text-xl text-white bg-[#2c1810] rounded-lg hover:bg-[#8b4513] transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">{t.contact.form.submit}</span>
                  <div className="absolute inset-0 border-2 border-white opacity-0 rounded-lg scale-[0.98] group-hover:scale-[1.02] group-hover:opacity-100 transition-all duration-300"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
