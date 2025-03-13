"use client";
import ContactSection from "@/components/sections/ContactSection";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { RemoveFormattingIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments",
        );
        const data = await response.json();
        //only take the first 6 testimonials
        const firstTestimonials = data.slice(0, 6);
        const result = firstTestimonials.map((testimonials) => ({
          ...testimonials,
          rating: Math.floor(Math.random() * 2) + 4,
        }));
        setTestimonials(result);
        console.log("Listo");
        setLoading(false);
      } catch (error) {
        console.log("Error fetching testimonials:", error);
        setLoading(true);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection testimonials={testimonials} loading={loading} />
      <NewsletterSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}
