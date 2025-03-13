"use client";
import { footerLinks, socialLinks } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 pt-6">
      <div className="container mx-auto px-4 py-2">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="mb.6 inline-block">
              <span className="text-2xl font-bold">Streamline</span>
            </Link>
            <p className="mb-6 max-w-25 text-muted-foreground">
              Streamline helps teams work more efficiently with powerful
              projects management tools.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, id) => (
                <motion.a
                  key={id}
                  href={social.href}
                  aria-label={social.name}
                  whileHover={{ y: -3 }}
                  className="rounded-full border bg-background p-2 transition-colors hover:border-primary"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {footerLinks.map((category, index) => (
                <div key={index}>
                  <h3 className="mb-4 font-semibold">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.links.map((link, id) => (
                      <li key={id}>
                        <Link
                          href={link.href}
                          className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Streamline, Inc. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <p className="text-sm text-muted-foreground">
              Made with ❤️ by Streamline Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
