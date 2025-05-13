import { motion } from "framer-motion";

interface Skill {
  name: string;
  category: "languages" | "tools" | "cms" | "software" | "soft";
}

const skills: Skill[] = [
  // Languages & Frameworks
  { name: "HTML", category: "languages" },
  { name: "CSS", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "PHP", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "Node.js", category: "languages" },
  { name: "React", category: "languages" },
  { name: "Next.js", category: "languages" },
  { name: "Sass", category: "languages" },
  { name: "Vue", category: "languages" },
  { name: "JSON", category: "languages" },
  { name: "Tailwind CSS", category: "languages" },
  { name: "Express.js", category: "languages" },
  { name: "Zod", category: "languages" },
  { name: "Framer Motion", category: "languages" },
  { name: "Shadcn/UI", category: "languages" },
  { name: "Material UI", category: "languages" },
  { name: "Socket.io", category: "languages" },
  { name: "REST-APIs", category: "languages" },

  // Tools & Platforms
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Jira", category: "tools" },
  { name: "Google Tag Manager", category: "tools" },
  { name: "Google Analytics", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "Cypress", category: "tools" },
  { name: "Supabase", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Bruno", category: "tools" },
  { name: "Slack", category: "tools" },
  { name: "Teams", category: "tools" },
  { name: "MongoDB", category: "tools" },
  { name: "MAMP", category: "tools" },
  { name: "UI/UX", category: "tools" },
  { name: "Responsive Design", category: "tools" },
  { name: "Accessibility", category: "tools" },
  { name: "a11y", category: "tools" },

  // CMS & E-commerce
  { name: "Storyblok", category: "cms" },
  { name: "WordPress", category: "cms" },
  { name: "WooCommerce", category: "cms" },
  { name: "Norce", category: "cms" },
  { name: "Shopify", category: "cms" },
  { name: "Elevate", category: "cms" },

  // Software
  { name: "VS Code", category: "software" },
  { name: "Cursor", category: "software" },
  { name: "GitKraken", category: "software" },
  { name: "GitHub Desktop", category: "software" },
  { name: "MySQLWorkbench", category: "software" },
  { name: "Adobe Illustrator", category: "software" },
  { name: "Photoshop", category: "software" },
  { name: "Premiere Pro", category: "software" },
  { name: "Lightroom", category: "software" },
  { name: "Logic X", category: "software" },
  { name: "Microsoft Office", category: "software" },
  { name: "Eclipse", category: "software" },

  // Soft Skills
  { name: "Problem-solving", category: "soft" },
  { name: "Solution-focused", category: "soft" },
  { name: "Persistent", category: "soft" },
  { name: "Adaptable", category: "soft" },
  { name: "Quick Learner", category: "soft" },
  { name: "Teamwork", category: "soft" },
];

export default function SkillsContent() {
  return (
    <div className="h-full">
      <section className="h-full flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 py-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12 mt-6"
          >
            My Skills
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Languages & Frameworks */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50/10 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-6">
                  Languages & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.category === "languages")
                    .map((skill, index) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm font-medium"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                </div>
              </motion.div>

              {/* Tools & Platforms */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-50/10 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-6">
                  Tools & Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.category === "tools")
                    .map((skill, index) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm font-medium"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* CMS & E-commerce */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50/10 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-6">
                  CMS & E-commerce
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.category === "cms")
                    .map((skill, index) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="px-3 py-1 bg-orange-500/10 text-orange-300 rounded-full text-sm font-medium"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                </div>
              </motion.div>

              {/* Software */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-50/10 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-6">Software</h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.category === "software")
                    .map((skill, index) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="px-3 py-1 bg-green-500/10 text-green-300 rounded-full text-sm font-medium"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                </div>
              </motion.div>

              {/* Soft Skills */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-50/10 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.category === "soft")
                    .map((skill, index) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="px-3 py-1 bg-pink-500/10 text-pink-300 rounded-full text-sm font-medium"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
