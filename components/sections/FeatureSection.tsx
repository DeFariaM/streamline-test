"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { features } from "@/lib/data";

export default function FeatureSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <section id="features" className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Powerful features for modern teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-xl text-muted-foreground"
          >
            Everything you need to manage projects, collaborate with your team,
            and deliver exceptional results.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, id) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className="rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
