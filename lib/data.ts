import { Zap, BarChart3, Users, Lock } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export const navLinks = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const features = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description:
      "Optimized workflows that help your team move at maximum speed without compromising quality.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Gain valuable insights with real-time data visualization and comprehensive reporting tools.",
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description:
      "Connect your entire team with integrated chat, file sharing, and task management.",
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    description:
      "Rest easy with SOC 2 compliance, end-to-end encryption, and advanced permission controls.",
  },
];

export const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "FAQ", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Guides", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Support", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  },
];

export const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: 9,
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 5 projects",
      "Basic analytics",
      "24-hour support response time",
      "1 team member",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: 29,
    description: "Ideal for growing teams and businesses",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "4-hour support response time",
      "Up to 10 team members",
      "Custom integrations",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 99,
    description: "For large organizations with complex needs",
    features: [
      "Unlimited everything",
      "Real-time analytics",
      "1-hour support response time",
      "Unlimited team members",
      "Advanced security features",
      "Dedicated account manager",
      "Custom training",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];
