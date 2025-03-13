"use client";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  containerVariants,
  itemVariants,
  variantProps,
  variantPropsDelay,
} from "@/lib/variants";

interface Testimonial {
  id: number;
  name: string;
  body: string;
  email: string;
  rating: number;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
  loading: boolean;
}
export default function TestimonialSection({
  testimonials,
  loading,
}: TestimonialSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  /* Extract first name from email */
  const getFirstName = (email: string) => {
    const name = email.split("@")[0];
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2
            {...variantProps}
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            What our customers say
          </motion.h2>
          <motion.p
            {...variantPropsDelay}
            className="mx-auto max-w-2xl text-xl text-muted-foreground"
          >
            Don't just take our word for it - hear from some of our amazing
            customers
          </motion.p>
        </div>

        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-primary"></div>
          </div>
        ) : (
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials?.map((testimonial) => {
              const firstName = getFirstName(testimonial.email);
              return (
                <motion.div key={testimonial.id} variants={itemVariants}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4 flex">
                        {[
                          [1, 2, 3, 4, 5].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < testimonial.rating ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                            />
                          )),
                        ]}
                      </div>
                      <p>
                        {testimonial.body?.length > 120
                          ? `${testimonial.body.substring(0, 120)}...`
                          : testimonial.body}
                      </p>
                      <div className="mt-4 flex items-center">
                        <Avatar className="mr-4 h-12 w-12">
                          <AvatarImage
                            src={`https://ui-avatars.com/api/?name=${firstName}&background=0D8ABC&color=fff&size=128`}
                          />
                        </Avatar>
                        <div>
                          <p className="text-lg font-medium">{firstName}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.email}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
