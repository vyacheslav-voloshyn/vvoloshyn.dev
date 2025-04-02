import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

interface SocialLink {
  name: string;
  icon: IconType;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/slava-voloshyn',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/vyacheslav-voloshyn-74ab3b194/',
  },
  {
    name: 'Telegram',
    icon: FaTelegram,
    url: 'https://t.me/Amsi_SL',
  },
];

export default function SocialLinks() {
  return (
    <div className="border-t border-gray-700 pt-8">
      <h2 className="mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
        Connect with me
      </h2>
      <div className="flex space-x-8">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-gray-400 transition-colors hover:text-blue-500"
          >
            <social.icon className="h-7 w-7 transform transition-transform duration-200 group-hover:scale-110" />
            <span className="sr-only">{social.name}</span>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm opacity-0 transition-opacity group-hover:opacity-100">
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
