import goFoodLogo from "@/assets/gofood-logo.png";
import grabFoodLogo from "@/assets/grabfood-logo.png";
import shopeeFoodLogo from "@/assets/shopeefood-logo.png";
import tokopediaLogo from "@/assets/tokopedia-logo.png";
import whatsAppsAppLogo from "@/assets/whatsapp-logo.png";

const OrderPlatforms = () => {
  const platforms = [
    {
      name: "GoFood",
      link: "https://gofood.link/a/yM9Rivs",
      color: "bg-white",
      logo: goFoodLogo,
      location: "Bandung",
    },
    {
      name: "GrabFood",
      link: "https://r.grab.com/g/6-20260119_211935_49F77F6A19FC4886A653478471F6AEC8_MEXMPS-6-CYLYAJKKSBWAUE",
      color: "bg-white",
      logo: grabFoodLogo,
      location: "Bandung",
    },
    {
      name: "ShopeeFood",
      link: "https://shopee.co.id/universal-link/now-food/shop/20074426?deep_and_deferred=1&shareChannel=copy_link",
      color: "bg-white",
      logo: shopeeFoodLogo,
      location: "Bandung",
    },
    {
      name: "Tokopedia",
      link: "https://tk.tokopedia.com/ZSaNNceHw/",
      color: "bg-white",
      logo: tokopediaLogo,
      location: "Bandung",
    },
  ];

  return (
    <section id="order" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-brand">Pesan Sekarang</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nikmati Smoochi dari platform favorit kamu! Tersedia di berbagai
            platform delivery dan marketplace.
          </p>
        </div>

        {/* REVISI UTAMA DI SINI:
           1. 'grid-cols-2' (tanpa sm/md) -> Memaksa 2 kolom di HP.
           2. 'gap-3' -> Jarak diperkecil agar muat 2 kolom di layar sempit.
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl justify-content-center mx-auto">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              // Padding diperkecil (p-4) di mobile agar tidak sesak
              className="group bg-background rounded-2xl p-4 md:p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2 text-center"
            >
              {/* Ukuran box logo disesuaikan utk mobile */}
              <div
                className={`w-14 h-14 md:w-16 md:h-16 ${platform.color} rounded-2xl mx-auto mb-3 md:mb-4 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
              >
                {/* Ukuran gambar logo disesuaikan */}
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="w-10 h-10 md:w-14 md:h-14 object-contain"
                />
              </div>

              {/* Ukuran font nama platform */}
              <h3 className="font-display font-bold text-foreground mb-1 text-sm md:text-base">
                {platform.name}
              </h3>

              {/* Ukuran font lokasi */}
              <p className="text-xs md:text-sm text-muted-foreground">
                {platform.location}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Atau pesan langsung via WhatsApp
          </p>
          <a
            href="https://wa.me/6281220499249"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 mt-6 rounded-full font-bold shadow-md hover:bg-green-600 transition-colors animate-bounce"
          >
            <img
              src={whatsAppsAppLogo}
              alt="Animasi Mochi"
              loading="lazy"
              className="w-8 h-8 object-cover"
            />
            <span className="hidden md:inline">Chat Wa</span>
            <span className="md:hidden">Chat WA</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderPlatforms;
