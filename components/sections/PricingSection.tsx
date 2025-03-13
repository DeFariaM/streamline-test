"use client";

import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  variantProps,
  variantPropsDelay,
  variantPropsDelay3,
} from "@/lib/variants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { pricingPlans } from "@/lib/data";
import { Check } from "lucide-react";
import { Button } from "../ui/button";

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const classBtn = `px-4 py-2 rounded-md text-md font-medium transition-colors`;

  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2
            {...variantProps}
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Simple and transparent pricing
          </motion.h2>
          <motion.p
            {...variantPropsDelay}
            className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground"
          >
            No hidden fees, no surprises. Choose the plan that works best for
            you.
          </motion.p>

          <motion.div
            {...variantPropsDelay3}
            className="mb-8 flex items-center justify-center"
          >
            <div className="flex items-center space-x-2 rounded-lg bg-muted p-1">
              <button
                className={`${classBtn} ${!annual ? "bg-background shadow-sm" : "hover:bg-background/50"}`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
              <button
                className={`${classBtn} ${annual ? "bg-background shadow-sm" : "hover:bg-background/50"}`}
                onClick={() => setAnnual(true)}
              >
                Annual <span className="text-sm text-primary">Save 20%</span>
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-3"
        >
          {pricingPlans.map((plan, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card
                className={`flex h-full flex-col ${plan.popular && "relative border-primary shadow-lg"}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 translate-x-2 -translate-y-2 transform">
                    <span className="rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-3xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">
                      ${annual ? (plan.price * 0.8 * 12).toFixed() : plan.price}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="flex-srink-0 mr-2 h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className="text-md w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
