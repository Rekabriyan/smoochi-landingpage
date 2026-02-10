import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

// Import gambar tetap sama
import product1 from "@/assets/product-1.webp";
import product2 from "@/assets/product-2.webp";
import product3 from "@/assets/product-3.webp";
import product4 from "@/assets/product-4.webp";
import product5 from "@/assets/product-5.webp";
import product6 from "@/assets/product-6.webp";
import product7 from "@/assets/product-7.webp";
import product8 from "@/assets/product-8.webp";
import product9 from "@/assets/product-9.webp";

// --- KOMPONEN SKELETON SHIMMER ---
const ImageSkeleton = () => (
  <div className="absolute inset-0 bg-gray-200 overflow-hidden">
    <div className="h-full w-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]" />
    {/* Menambahkan Style CSS inline untuk animasi shimmer jika belum ada di tailwind.config */}
    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
    `}} />
  </div>
);

// --- KOMPONEN LAZY IMAGE DENGAN SKELETON ---
const LazyImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full bg-muted overflow-hidden">
      {/* Skeleton hanya muncul saat isLoaded false */}
      {!isLoaded && <ImageSkeleton />}
      
      <img
        src={src}
        alt={alt || "Produk Mochi"}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`
          w-full h-full object-cover transition-all duration-700 ease-out
          ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"}
          group-hover:scale-110
        `}
      />
    </div>
  );
};

const Products = () => {
  const products = [
    { image: product1, title: "Mochi Original" },
    { image: product2, title: "Mochi Matcha" },
    { image: product3, title: "Mochi Cokelat" },
    { image: product4, title: "Mochi Strawberry" },
    { image: product5, title: "Mochi Durian" },
    { image: product6, title: "Mochi Taro" },
    { image: product7, title: "Mochi Cheese" },
    { image: product8, title: "Mochi Oreo" },
    { image: product9, title: "Mochi Red Velvet" },
  ];

  const advantages = [
    "Kualitas stabil & konsisten",
    "Cocok B2B & skala besar",
    "Banyak varian rasa (20+)",
    "Mudah disajikan & disimpan",
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    breakpoints: {
      "(min-width: 768px)": { active: false },
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="products" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-brand">Produk Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">Setiap mochi dibuat dengan cermat untuk menghadirkan keseimbangan sempurna antara kulit mochi yang lembut dan es krim yang creamy.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-accent px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium text-sm">{adv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel / Grid Section */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden md:overflow-visible">
            <div className="flex md:grid md:grid-cols-3 md:gap-8 touch-pan-y">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex-[0_0_85%] min-w-0 pl-4 first:pl-0 md:flex-none md:pl-0 md:w-auto"
                >
                  <div className="group h-full bg-background rounded-2xl md:rounded-3xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 md:hover:-translate-y-2 flex flex-col">
                    <div className="aspect-square overflow-hidden relative bg-gray-100">
                      <LazyImage src={product.image} alt={product.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls Mobile */}
          <div className="mt-8 md:hidden">
            <div className="flex justify-center gap-2 mb-4">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex ? "w-8 bg-primary" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-center gap-4">
              <button 
                onClick={scrollPrev} 
                disabled={!canScrollPrev} 
                className="p-3 border rounded-full bg-white shadow-sm disabled:opacity-30"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={scrollNext} 
                disabled={!canScrollNext} 
                className="p-3 border rounded-full bg-white shadow-sm disabled:opacity-30"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;