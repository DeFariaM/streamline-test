"use client";

import type React from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { variantProps, variantPropsDelay } from "@/lib/variants";
import InputForm from "../InputForm";
import TextareaForm from "../TextareaForm";
import { Button } from "../ui/button";
import useForm from "@/lib/handleChange";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
  const { formData, handleChange, setFormData } = useForm(initialValues);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    //simulate API call
    setTimeout(() => {
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2
            {...variantProps}
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            {...variantPropsDelay}
            className="mx-auto max-w-2xl text-xl text-muted-foreground"
          >
            Have questions or want to learn more? We&apos;d love to hear from
            you.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl rounded-lg border bg-card p-8 shadow-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputForm
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "border-destructive" : ""}
              label="Name"
              error={errors.name}
            />
            <InputForm
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "border-destructive" : ""}
              label="Email"
              error={errors.email}
            />
            <TextareaForm
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "border-destructive" : ""}
              label="Message"
              error={errors.message}
              rows={5}
            />

            <Button
              type="submit"
              className="text-md w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
