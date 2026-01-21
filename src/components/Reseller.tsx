import { Building2, Hotel, ShoppingBag, Calendar, Truck, CheckCircle } from "lucide-react";
import whatsappLogo from "@/assets/whatsapp-logo.png";

const Reseller = () => {
  const benefits = [
    "Harga khusus reseller",
    "Support bisnis (konten / katalog)",
    "Supply konsisten",
    "Pengiriman cepat",
  ];

  const targetMarkets = [
    { icon: Building2, label: "Resto & Café" },
    { icon: Hotel, label: "Hotel" },
    { icon: ShoppingBag, label: "Toko & Supermarket" },
    { icon: Calendar, label: "Wedding & Event" },
    { icon: Truck, label: "Online Delivery" },
  ];

  const workScheme = [
    "Minimum order terjangkau",
    "Sistem pemesanan mudah via WhatsApp",
    "Pengiriman cepat & aman",
    "Area distribusi seluruh Indonesia",
  ];

  return (
    <section id="reseller" className="py-24 bg-gradient-to-b from-smoochi-cream to-smoochi-turquoise-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Jadi </span>
            <span className="text-secondary">Reseller</span>
            <span className="text-foreground"> Smoochi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Supplier Mochi Ice Cream untuk Bisnis Anda. 
            Bergabunglah bersama kami dan nikmati keuntungan menjadi reseller Smoochi!
          </p>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-display text-2xl font-bold text-center mb-8">Keuntungan Reseller</h3>
          
          {/* UBAHAN 1: grid-cols-2 (tanpa sm:) dan gap-3 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-card rounded-2xl p-4 md:p-6 shadow-card text-center flex flex-col items-center justify-center h-full">
                <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3" />
                <p className="font-semibold text-sm md:text-base">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Market Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-display text-2xl font-bold text-center mb-8">Cocok Untuk</h3>
          
          {/* UBAHAN 2: Memastikan tetap 2 kolom, gap disesuaikan */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            {targetMarkets.map((market, idx) => (
              <div key={idx} className="bg-card rounded-2xl p-4 md:p-6 shadow-card text-center hover:shadow-soft transition-all hover:-translate-y-1 flex flex-col items-center justify-center">
                <market.icon className="w-10 h-10 md:w-12 md:h-12 text-secondary mb-3" />
                <p className="font-semibold text-sm md:text-base">{market.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Scheme */}
        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="font-display text-2xl font-bold text-center mb-8">Skema Kerja Sama</h3>
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card">
            <ul className="space-y-4">
              {workScheme.map((scheme, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex-shrink-0 flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {idx + 1}
                  </div>
                  <span className="text-base md:text-lg">{scheme}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-pink rounded-3xl p-8 md:p-12 max-w-xl mx-auto shadow-pink">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              Tertarik Jadi Reseller?
            </h3>
            <p className="text-secondary-foreground/90 mb-6">
              Hubungi kami sekarang untuk informasi lebih lanjut dan harga khusus reseller!
            </p>
            <a 
              href="https://wa.me/6281220499249?text=Halo%20Smoochi,%20saya%20tertarik%20menjadi%20reseller"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-card text-primary px-8 py-4 rounded-full font-bold shadow-card hover:bg-foreground hover:text-background transition-colors animate-bounce"
            >
              <img
                src={whatsappLogo}
                alt="WhatsApp Logo"
                className="w-6 h-6 inline-block mr-2"
              />
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reseller;