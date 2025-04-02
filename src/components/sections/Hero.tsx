import Image from 'next/image';

import Button from '@/components/ui/Button';
import TypewriterText from '@/components/ui/TypewriterText';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-12 sm:py-20">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Hi, I&apos;m Vyacheslav Voloshyn
          </h1>
          <TypewriterText />
          <p className="text-base text-gray-600 dark:text-gray-300 sm:text-lg">
            I build exceptional digital experiences that combine creativity with technical
            expertise. With a passion for both frontend and backend development, I create seamless,
            scalable, and user-friendly applications.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:space-x-4">
            <Button href="/contact" variant="primary" className="w-full sm:w-auto">
              Get in Touch
            </Button>
            <Button href="/projects" variant="secondary" className="w-full sm:w-auto">
              View Projects
            </Button>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl md:mx-0">
          <Image
            src="/profile.jpg"
            alt="Vyacheslav Voloshyn"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
