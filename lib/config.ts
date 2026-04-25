// ============================================================
//  SITE CONFIG — edit this file for each new client project
//  Everything else in the project stays the same
// ============================================================

const siteConfig = {
  // ── Business identity ──────────────────────────────────────
  name:        "Swift Fix",
  tagline:     "Manchester",
  description: "Manchester's No. 1 plumbing and heating specialists.",
  logo:        "🔧",                  // emoji OR path to image in /public e.g. "/logo.png"

  // ── SEO (fills <head> meta tags automatically) ──────────────
  seo: {
    title:       "Swift Fix Manchester | Emergency Plumbing & Heating | 24/7 Service",
    description: "Swift Fix Manchester - Gas Safe registered plumbers and heating engineers. Emergency callouts, boiler repair, bathroom fitting, central heating and drain clearing. 24/7 response across Greater Manchester.",
    keywords:    "emergency plumbing Manchester, plumber Manchester, heating engineer, boiler repair Manchester, gas safe, plumbing services M1, M3, M5",
    ogImage:     "/og-image.jpg",
    favicon:     "/favicon.ico",
    themeColor:  "#f5c518",
  },

  // ── Contact & location ─────────────────────────────────────
  contact: {
    phone:         "0161 478 9900",
    whatsapp:      "+441614789900",
    email:         "hello@swiftfixplumbing.co.uk",
    address:       "Salford, Greater Manchester",
    googleMapsUrl: "https://maps.google.com/?q=Salford+Greater+Manchester",
  },

  // ── Opening hours ──────────────────────────────────────────
  hours: [
    { days: "Mon – Fri", time: "7am – 7pm" },
    { days: "Saturday",  time: "8am – 5pm" },
    { days: "24/7",      time: "Emergency Line" },
  ],

  // ── Service platforms (set to null to hide) ────────────────
  ordering: {
    directPhone:    true,
    directWhatsapp: true,
    justEat:        null,
    uberEats:       null,
    deliveroo:      null,
  },

  // ── Brand colours ─────────────────────────────────────────
  colors: {
    primary:   "#f5c518",
    secondary: "#0c1829",
    dark:      "#0c1829",
    card:      "#111f35",
    border:    "rgba(255,255,255,0.07)",
  },

  // ── Social links (null = hidden) ──────────────────────────
  social: {
    facebook:  "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok:    null as string | null,
    twitter:   null as string | null,
  },

  // ── Footer ────────────────────────────────────────────────
  footer: {
    copy:    "© 2024 Swift Fix Plumbing & Heating Ltd. All rights reserved.",
    tagline: "Quick. Professional. Reliable.",
  },
}

export default siteConfig
