"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { features } from "@/lib/data";
import {
  containerVariants,
  itemVariants,
  variantProps,
  variantPropsDelay,
} from "@/lib/variants";

export default function FeatureSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2
            {...variantProps}
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Powerful features for modern teams
          </motion.h2>
          <motion.p
            {...variantPropsDelay}
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
              <h3 className="mb-3 text-2xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
