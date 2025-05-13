import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  collaboration: "solo" | "team";
  isInternship?: boolean;
}

const projects: Project[] = [
  {
    title: "Callisto E-commerce Platform, Partnersense",
    description:
      "Contributed to the development and implementation of a modern composable commerce platform. Implemented and customized solutions for Strandberg Guitars and Babyshop, focusing on performance optimization, user experience improvements, and seamless integration with various e-commerce services.",
    image: "/callisto.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Storyblok",
      "Norce",
      "GTM/GA4",
      "Jira",
      "Figma",
      "Bruno",
    ],
    liveUrl: "https://www.partnersense.se/callisto",
    featured: true,
    collaboration: "team",
    isInternship: true,
  },
  {
    title: "Portfolio Website (you're already here)",
    description:
      "This is my portfolio website, built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and a clean design.",
    image: "/nextImg.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn/UI",
    ],
    liveUrl: "/",
    githubUrl: "https://github.com/borg98/borg",
    featured: true,
    collaboration: "solo",
  },
  {
    title: "RTS Webshop",
    description:
      "Webshop for a fictional ski brand called RTS. Frontend built with Next.js, TypeScript and Tailwind CSS + a backend with Node.js,Express.js and Supabase. Payment is handled with Stripe. Content is managed with Storyblok.",
    image: "/rts.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Supabase",
      "Stripe",
      "Storyblok",
    ],
    liveUrl: "https://rts-examensarbete.vercel.app/",
    githubUrl: "https://github.com/yourusername/rts-webshop",
    featured: true,
    collaboration: "solo",
  },
  {
    title: "Chatroom",
    description:
      "A chatroom built with React, Node.js, Express.js and Socket.io.",
    image: "/socketChatLanding.png",
    technologies: ["React", "Node.js", "Express.js", "Socket.io"],
    githubUrl: "https://github.com/borg98/chat-med-socket-io",
    featured: false,
    collaboration: "team",
  },
  {
    title: "The Restaurant",
    description:
      "Booking platform for a fictional restaurant located on the moon. Features a admin page for handling bookings and a dashboard for the restaurant staff.",
    image: "/resturantLanding.png",
    technologies: ["React", "TypeScript", "Sass"],
    liveUrl: "https://the-restaurant-hadetsakultparestaurangen.vercel.app/",
    githubUrl:
      "https://github.com/borg98/the-restaurant-hadetsakultparestaurangen",
    featured: false,
    collaboration: "team",
  },
  {
    title: "F1 Store",
    description:
      "A place where Günther Steiner could have visited to buy a new team and drivers. Built with PHP and a database in MySQL.",
    image: "/projects/f1-store.png",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    githubUrl: "https://github.com/borg98/phpLogin",
    featured: false,
    collaboration: "solo",
  },
  {
    title: "Secret Santa",
    description: "A site that creates a secret santa for a group of people.",
    image: "/secretSantaLanding.png",
    technologies: ["React", "TypeScript"],
    githubUrl: "https://github.com/borg98/SecretSanta",
    liveUrl: "https://borg98.github.io/SecretSanta/",
    featured: false,
    collaboration: "solo",
  },
];

export default function Projects() {
  return (
    <div className="h-full">
      <section className="h-full flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 py-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12 mt-6"
          >
            My Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gray-50/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      {project.featured && (
                        <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </div>
                      )}
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.collaboration === "team"
                            ? "bg-purple-500 text-white"
                            : "bg-green-500 text-white"
                        }`}
                      >
                        {project.collaboration === "team"
                          ? "Team Project"
                          : "Solo Project"}
                      </div>
                      {project.isInternship && (
                        <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Internship
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300">{project.description}</p>
                    </div>

                    <div className="mt-6">
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        {project.liveUrl && (
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <span>
                              {project.isInternship ? "Read more" : "Live Demo"}
                            </span>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </Link>
                        )}
                        {project.githubUrl && (
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                          >
                            <span>GitHub</span>
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
