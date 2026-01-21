import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import mochiDisplay from "@/assets/mochi-display.png";
import mochiSliced from "@/assets/mochi-sliced.png";
import mochiPackaged from "@/assets/mochi-packaged.png";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const Products = () => {
  const products = [
    { image: mochiDisplay, title: "Koleksi Klasik", price: "Mulai Rp 8.000" },
    { image: mochiSliced, title: "Pilihan Premium", price: "Mulai Rp 12.000" },
    { image: mochiPackaged, title: "Paket Hampers", price: "Mulai Rp 75.000" },
    { image: product1, title: "Paket Hampers", price: "Mulai Rp 75.000" },
    { image: product2, title: "Paket Hampers", price: "Mulai Rp 75.000" },
    { image: product3, title: "Paket Hampers", price: "Mulai Rp 75.000" },
    { image: product4, title: "Paket Hampers", price: "Mulai Rp 75.000" },
    { image: product5, title: "Paket Hampers", price: "Mulai Rp 75.000" },
    { image: product6, title: "Paket Hampers", price: "Mulai Rp 75.000" },
  ];

  const advantages = [
    "Kualitas stabil & konsisten",
    "Cocok B2B & skala besar",
    "Banyak varian rasa (20+)",
    "Mudah disajikan & disimpan",
  ];

  // --- EMBLA CAROUSEL SETUP ---
  // active: false pada breakpoint 768px agar di desktop kembali jadi Grid murni
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

  // Update state saat slide berubah
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Init carousel data
  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Navigasi Manual
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  return (
    <section id="products" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-brand">Produk Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Setiap mochi dibuat dengan cermat untuk menghadirkan keseimbangan
            sempurna antara kulit mochi yang lembut dan es krim yang creamy.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-accent px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium text-sm">{adv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- PRODUCT CAROUSEL / GRID --- */}
        <div className="relative">
          
          {/* Viewport Embla (Hanya aktif di Mobile, di Desktop jadi div biasa) */}
          <div ref={emblaRef} className="overflow-hidden md:overflow-visible">
            
            {/* Container: Flex di Mobile (Slider), Grid di Desktop */}
            <div className="flex md:grid md:grid-cols-3 md:gap-8 touch-pan-y">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="
                    flex-[0_0_85%] min-w-0 pl-4 first:pl-0 
                    md:flex-none md:pl-0 md:w-auto
                  "
                >
                  <div className="group h-full bg-background rounded-2xl md:rounded-3xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 md:hover:-translate-y-2 flex flex-col">
                    <div className="aspect-square overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Info Produk */}
                    
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- MOBILE CONTROLS (Hanya muncul di Mobile) --- */}
          <div className="mt-6 md:hidden">
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mb-4">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`
                    h-2 rounded-full transition-all duration-300 
                    ${index === selectedIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"}
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Tombol Navigasi Kiri/Kanan Mobile (Opsional, UX Friendly) */}
            <div className="flex justify-center gap-4">
                <button 
                    onClick={scrollPrev} 
                    disabled={!canScrollPrev}
                    className="p-3 rounded-full bg-background border shadow-sm disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                    onClick={scrollNext} 
                    disabled={!canScrollNext}
                    className="p-3 rounded-full bg-background border shadow-sm disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all"
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