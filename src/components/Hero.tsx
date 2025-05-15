import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-screen snap-center">
      <section className="h-screen sticky top-0 flex flex-col items-center justify-center z-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-48 h-48 md:w-80 md:h-80"
            >
              <Image
                src="/bildCVv1.jpg"
                alt="Martin Borg"
                fill
                className="rounded-full object-cover border-4 border-blue-600"
                priority
              />
            </motion.div>
            <div className="text-center md:text-left max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-6xl font-bold mb-6 text-white"
              >
                Hi, I&apos;m Martin Borg 👋
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-2xl text-gray-300 mb-8"
              >
                I&apos;m a newly graduated web developer who is eager to learn
                and grow.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm md:text-base text-gray-400 mb-12"
              >
                I&apos;m currently seeking opportunities to apply my skills in
                frontend development, create impactful user experiences, and
                grow as a developer in a collaborative environment.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
                >
                  Let&apos;s get in touch!
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
