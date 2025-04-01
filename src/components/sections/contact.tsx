import { Button } from '@/components/ui/button';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get In Touch</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Have a project in mind or just want to say hello? I&apos;d love to hear from you!
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-[600px]">
          <form className="grid gap-6">
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none" htmlFor="name">
                Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                id="name"
                placeholder="Your name"
                type="text"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none" htmlFor="email">
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                id="email"
                placeholder="Your email"
                type="email"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none" htmlFor="message">
                Message
              </label>
              <textarea
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                id="message"
                placeholder="Your message"
              />
            </div>
            <Button type="submit" variant="primary">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
