import ContactForm from '@/components/form/ContactForm';
import Navigation from '@/components/layout/Navigation';
import SocialLinks from '@/components/social/SocialLinks';

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-2xl rounded-2xl bg-gray-900/50 p-8 backdrop-blur-lg">
            <h1 className="relative mb-8 inline-block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-4xl font-bold text-transparent after:mt-2 after:block after:h-1 after:w-1/2 after:bg-blue-500 after:content-['']">
              Get in Touch
            </h1>
            <p className="mb-12 text-lg leading-relaxed text-gray-300">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to
              be part of your visions.
            </p>

            <ContactForm />
            <SocialLinks />
          </div>
        </div>
      </main>
    </>
  );
}
