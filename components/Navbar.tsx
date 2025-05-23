"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/data";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navDesk = "text-lg font-medium hover:text-primary transition-colors";
  const navMob =
    "block py-2 text-sm font-medium hover:text-primary transition-colors";
  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-background/80 shadow-sm backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"} className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-4xl font-bold"
            >
              <span className="text-2xl font-bold">Streamline</span>
            </motion.div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={navDesk}>
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center space-x-4 md:flex">
            <ModeToggle />
            <Button variant="outline" size="lg" className="text-md">
              Log in
            </Button>
            <Button size="lg" className="text-md bg-primary">
              Sign up
            </Button>
          </div>
          {/* Mobile navigation */}
          <div className="flex items-center space-x-4 md:hidden">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-4 py-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={navMob}>
                {link.name}
              </Link>
            ))}
            <Button
              variant="outline"
              size="lg"
              className="text-md inline-block w-full"
            >
              Log in
            </Button>
            <Button
              size="lg"
              className="text-md inline-block w-full bg-primary"
            >
              Sign up
            </Button>
          </motion.div>
        )}
      </div>
    </header>
  );
}
