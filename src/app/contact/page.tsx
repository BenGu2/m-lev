'use client';

import { FormEvent } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/constants/translations';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added here
  };

  return (
    <div className="container mx-auto px-4 py-12" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <h1 className="text-4xl font-bold mb-8 text-center">{t.contact.title}</h1>
      <div className="max-w-2xl mx-auto bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                {t.contact.form.firstName}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                {t.contact.form.lastName}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              {t.contact.form.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              {t.contact.form.subject}
            </label>
            <select
              id="subject"
              name="subject"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
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
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
              {t.contact.form.organization}
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              {t.contact.form.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              {t.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              {t.contact.form.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
