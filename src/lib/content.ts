export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const projects: Project[] = [
  {
    name: 'Project 1',
    description: 'A full-stack web application built with React and Node.js',
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    link: 'https://github.com/yourusername/project1',
  },
  {
    name: 'Project 2',
    description: 'Mobile-first responsive website with modern design',
    technologies: ['Next.js', 'TailwindCSS', 'TypeScript'],
    link: 'https://github.com/yourusername/project2',
  },
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack'],
  },
];

export const about = `# About Me

I'm a passionate full-stack developer with a focus on creating elegant and efficient solutions. With several years of experience in web development, I specialize in building modern, responsive applications using cutting-edge technologies.

## Experience

- Senior Developer at Tech Company (2020-Present)
- Full Stack Developer at Startup (2018-2020)

## Education

- Bachelor's in Computer Science from University Name
- Various certifications in web development and cloud technologies

## Interests

When I'm not coding, I enjoy:
- Contributing to open-source projects
- Writing technical blog posts
- Learning new technologies
- Participating in hackathons`;

export const contact = `# Contact Information

Feel free to reach out to me through any of these channels:

- 📧 Email: your.email@example.com
- 🌐 Website: https://yourwebsite.com
- 💼 LinkedIn: https://linkedin.com/in/yourusername
- 🐙 GitHub: https://github.com/yourusername
- 🐦 Twitter: https://twitter.com/yourusername

I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.`;
