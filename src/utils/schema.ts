import { FAQ } from '../types';

export const createWebsiteSchema = (faqs: FAQ[]) => ({
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "M3M City of Dreams Panipat",
  "description": "Premium residential plots at Sector 36 Panipat. Book at 20% now, pay rest after 1 year.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sector 36",
    "addressLocality": "Panipat",
    "addressRegion": "Haryana",
    "postalCode": "132103",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "29.3909",
    "longitude": "76.9635"
  },
  "priceRange": "₹85,000/sq.yd onwards",
  "telephone": "+918527134491",
  "url": window.location.origin,
  "sameAs": [
    "https://www.facebook.com/M3MIndia",
    "https://twitter.com/M3MIndia",
    "https://www.instagram.com/m3mindia"
  ],
  "keywords": "M3M Panipat, City of Dreams Panipat, Panipat M3M, residential plots in Panipat, M3M plots Panipat",
  "openingHours": "Mo-Su 09:00-18:00"
});

export const createFAQSchema = (faqs: FAQ[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
});

export const createBreadcrumbSchema = () => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": window.location.origin
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "M3M City of Dreams",
      "item": `${window.location.origin}/about`
    }
  ]
});