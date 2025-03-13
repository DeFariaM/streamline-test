"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background to-background/50 dark:from-background dark:to-background/50" />
      {/* Background pattern */}
      <div className="bg-grid-pattern absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]" />
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-8"
          >
            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              >
                Streamline your workflow with{" "}
                <span className="text-primary">Streamline</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="max-w-lg text-xl text-muted-foreground"
              >
                The all-in-one platform for teams to collaborate, manage
                projects, and deliver results faster than ever before.
              </motion.p>
            </div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button size="lg" asChild className="text-md">
                <Link href="#pricing">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-md">
                <Link href="#features">Learn More</Link>
              </Button>
            </motion.div>

            {/* testimonials */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex items-center space-x-4 text-sm text-muted-foreground"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 overflow-hidden rounded-full border-2 border-background bg-muted"
                  >
                    <Image
                      src={`/placeholder.svg?height=32&width=32&text=${i}`}
                      alt="User avatar"
                      width={32}
                      height={32}
                    />
                  </div>
                ))}
              </div>
              <span>Trusted by 10,000+ teams worldwide</span>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="/hero2.svg"
                alt="Streamline Dashboard"
                width={800}
                height={600}
                className="h-auto w-full rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating elements for visual interest */}
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-primary/10 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-secondary/10 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
