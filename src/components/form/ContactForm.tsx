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
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-6">
      <div className="space-y-2">
        <FormInput id="name" name="name" label="Name" required />
      </div>

      <div className="space-y-2">
        <FormInput id="email" name="email" type="email" label="Email" required />
      </div>

      <div className="space-y-2">
        <FormTextarea id="message" name="message" label="Message" required />
      </div>

      {submitStatus.type && (
        <div
          className={`rounded-lg p-4 ${
            submitStatus.type === 'success'
              ? 'bg-green-500/10 text-green-500 dark:bg-green-500/20'
              : 'bg-red-500/10 text-red-500 dark:bg-red-500/20'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="hover:bg-primary/90 focus:ring-primary/40 inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
