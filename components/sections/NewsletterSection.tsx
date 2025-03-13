"use client";

import useForm from "@/lib/handleChange";
import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { variantProps } from "@/lib/variants";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function NewsletterSection() {
  const initialValues = {
    email: "",
  };
  const { formData, handleChange, setFormData } = useForm(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log(formData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email) return alert("Please enter your email address");
    setIsSubmitting(true);

    //Simulate API call
    setTimeout(() => {
      alert("Thank you for subscribing!");
      setFormData(initialValues);
      setIsSubmitting(false);
    }, 1000);
  };
  return (
    <section className="bg-primary/5 py-16">
      <div className="container mx-auto px-4">
        <motion.div {...variantProps} className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Stay updated with our newsletter
          </h2>
          <p className="mb-8 text-muted-foreground">
            Get the latest news, updates and special offers delivered directly
            to your inbox.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="flex-grow"
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
