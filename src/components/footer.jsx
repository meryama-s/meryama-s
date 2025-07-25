import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Github,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-blue-800 text-white">
      {/* decorative blur blob */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/20 blur-3xl opacity-40" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl opacity-40" />

      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand / About */}
          <div>
            <h3 className="text-xl font-semibold tracking-tight mb-3">
              AutoSouk
            </h3>
            <p className="text-sm/6 text-white/90">
              AutoSouk is your go-to blog for everything cars — from latest
              models and market trends to buying guides and maintenance tips.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold tracking-tight mb-3">
              Contact
            </h3>
            <ul className="space-y-2 text-sm/6 text-white/90">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5" />
                contact@autosouk.com
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5" /> +212 6 12 34 56 78
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" /> Casablanca, Morocco
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold tracking-tight mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm/6 text-white/90">
              <li>
                <a href="#reviews" className="transition-opacity hover:opacity-80">
                  Car Reviews
                </a>
              </li>
              <li>
                <a href="#buying-guides" className="transition-opacity hover:opacity-80">
                  Buying Guides
                </a>
              </li>
              <li>
                <a href="#news" className="transition-opacity hover:opacity-80">
                  Industry News
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-opacity hover:opacity-80">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold tracking-tight mb-3">
              Stay in the Loop
            </h3>
            <p className="text-sm/6 text-white/90 mb-4">
              Get the latest car reviews and news delivered to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-md px-3 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/60"
                required
              />
              <button className="inline-flex shrink-0 items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-white text-blue-700 hover:bg-white/90 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-white/20" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80">
          <p>© {year} AutoSouk. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/autosouk"
              aria-label="Instagram"
              className="transition-transform hover:scale-110"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/autosouk"
              aria-label="GitHub"
              className="transition-transform hover:scale-110"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/company/autosouk"
              aria-label="LinkedIn"
              className="transition-transform hover:scale-110"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;