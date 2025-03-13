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
