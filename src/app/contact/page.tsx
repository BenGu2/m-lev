'use client';

import { Metadata } from 'next';
import { FormEvent } from 'react';

export default function ContactPage() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added here
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="max-w-2xl mx-auto bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
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
                Last Name
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
              Email
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
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
              required
            >
              <option value="">Select a subject</option>
              <option value="rental">Costume Rental</option>
              <option value="custom">Custom Design</option>
              <option value="collaboration">Collaboration</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-gray-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Office Hours</h2>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-600">
              Email: info@mlev-costumes.com<br />
              Phone: +1 (555) 123-4567<br />
              Address: Studio location by appointment only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
