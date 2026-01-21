import mochiDisplay from "@/assets/mochi-display.png";
import mochiSliced from "@/assets/mochi-sliced.png";
import mochiPackaged from "@/assets/mochi-packaged.png";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import { CheckCircle } from "lucide-react";

const Products = () => {
  const products = [
    {
      image: mochiDisplay,
      title: "Koleksi Klasik",
      description: "Mochi ice cream signature kami dalam berbagai rasa favorit",
      price: "Mulai Rp 8.000",
    },
    {
      image: mochiSliced,
      title: "Pilihan Premium",
      description: "Rasa artisan dengan bahan premium untuk penikmat sejati",
      price: "Mulai Rp 12.000",
    },
    {
      image: mochiPackaged,
      title: "Paket Hampers",
      description: "Kemasan cantik yang cocok untuk berbagai acara spesial",
      price: "Mulai Rp 75.000",
    },
    {
      image: product1,
      title: "Paket Hampers",
      description: "Kemasan cantik yang cocok untuk berbagai acara spesial",
      price: "Mulai Rp 75.000",
    },
    {
      image: product2,
      title: "Paket Hampers",
      description: "Kemasan cantik yang cocok untuk berbagai acara spesial",
      price: "Mulai Rp 75.000",
    },
    {
      image: product3,
      title: "Paket Hampers",
      description: "Kemasan cantik yang cocok untuk berbagai acara spesial",
      price: "Mulai Rp 75.000",
    },
    {
      image: product4,
      title: "Paket Hampers",
      description: "Kemasan cantik yang cocok untuk berbagai acara spesial",
      price: "Mulai Rp 75.000",
    },
    {
      image: product5,
      title: "Paket Hampers",
      description: "Kemasan cantik yang cocok untuk berbagai acara spesial",
      price: "Mulai Rp 75.000",
    },
    {
      image: product6,
      title: "Paket Hampers",
      description: "Kemasan cantik yang cocok untuk berbagai acara spesial",
      price: "Mulai Rp 75.000",
    },
  ];

  const advantages = [
    "Kualitas stabil & konsisten",
    "Cocok B2B & skala besar",
    "Banyak varian rasa (20+)",
    "Mudah disajikan & disimpan",
  ];

  return (
    <section id="products" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-brand">Produk Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Setiap mochi dibuat dengan cermat untuk menghadirkan keseimbangan sempurna 
            antara kulit mochi yang lembut dan es krim yang creamy.
          </p>
          
          {/* Keunggulan */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {advantages.map((adv, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-accent px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium text-sm">{adv}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-background rounded-2xl md:rounded-3xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;