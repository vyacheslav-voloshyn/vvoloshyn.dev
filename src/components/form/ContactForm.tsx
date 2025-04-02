'use client';

import { useState } from 'react';

import FormInput from './FormInput';
import FormTextarea from './FormTextarea';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      e.currentTarget.reset();
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-12 space-y-8">
      <FormInput id="name" name="name" label="Name" required />

      <FormInput id="email" name="email" type="email" label="Email" required />

      <FormTextarea id="message" name="message" label="Message" required />

      {submitStatus.type && (
        <div
          className={`rounded-lg p-4 ${
            submitStatus.type === 'success'
              ? 'bg-green-500/10 text-green-500'
              : 'bg-red-500/10 text-red-500'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative w-full overflow-hidden rounded-lg bg-blue-600 px-6 py-3 text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 transition-transform duration-300 ease-out group-hover:translate-x-0" />
      </button>
    </form>
  );
}
