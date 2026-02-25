import { KEYWORDS } from "./keyword";

// Structured Data / Schema.org for GEO (invisible optimization)
export const HOME_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Smoochi Mochi Ice Cream Bandung",
  "description": "Supplier mochi ice cream premium di Bandung dengan berbagai varian rasa. Menerima reseller dan pesanan untuk event/hotel.",
  "image": "https://ulxsjmmovxikpweo.public.blob.vercel-storage.com/smoochi-og-D6vXk9Yp.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bandung",
    "addressRegion": "Jawa Barat",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-6.917464", // General Bandung Coordinates
    "longitude": "107.619123"
  },
  "url": "https://mochiicecreamsmoochi.com",
  "telephone": "+6281234567890", // Placeholder, ideally should be real
  "priceRange": "$$",
  "servesCuisine": "Dessert, Ice Cream, Japanese",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/mochiicecreamsmoochi/",
    "https://www.tiktok.com/@smoochiicecream"
  ]
};

export const HOME_META = {
  title: "Smoochi - Smooth Ice Cream Mochi Bandung",
  description:
    "Cari es krim mochi Bandung yang enak dan halal? Smoochi hadir dengan banyak varian rasa dan siap delivery ke seluruh Bandung. Pesan sekarang!",
  keywords: KEYWORDS.join(", "),
};
