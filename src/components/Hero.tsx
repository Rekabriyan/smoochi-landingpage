import mochiHands from "@/assets/mochi-hands.webp";
import whatsAppsAppLogo from "@/assets/whatsapp-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-wave-pattern">
      {/* Decorative blobs - Tetap ringan dengan CSS saja */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-smoochi-turquoise-light rounded-full blur-3xl opacity-50 animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-smoochi-pink-light rounded-full blur-3xl opacity-40 animate-float-delayed" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            {/* <span className="text-gradient-brand">Smoochi</span>
            <br /> */}
            <span className="text-foreground">Smooth</span>
            <br />
            <span className="text-gradient-brand"> Ice Cream</span>
            <br />
            <span className="text-foreground"> Mochi</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8">
            Nikmati perpaduan sempurna antara es krim lembut dalam balutan mochi
            yang kenyal. Dibuat dengan cinta di Bandung, Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#flavors"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-soft hover:opacity-90 transition-all hover:scale-105"
            >
              Lihat Varian Rasa
            </a>
            <a
              href="#reseller"
              className="bg-gradient-pink text-secondary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-pink hover:opacity-90 transition-all hover:scale-105"
            >
              Jadi Reseller
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Image Optimization */}
            <img
              src={mochiHands}
              alt="Smoochi Ice Cream Mochi"
              loading="eager"
              decoding="async"
              className="rounded-3xl shadow-card max-w-md w-full object-cover"
              width="448"
              height="448"
            />

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card px-6 py-3 rounded-2xl shadow-card animate-float">
              <div className="flex items-center gap-2">
                <span className="text-3xl" role="img" aria-label="mochi">
                  🍡
                </span>
                <div>
                  <p className="font-display font-bold text-secondary">
                    20+ Varian Rasa
                  </p>
                  <p className="text-sm text-muted-foreground">Selalu segar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration - Dioptimasi dengan loading="lazy" jika berupa elemen berat */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-card"
          />
        </svg>
      </div>

      <a
        href="https://wa.me/6281220499249"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center group bg-[#25D366] p-4 rounded-full shadow-2xl transition-all duration-300 hover:pr-6"
      >
        {/* Teks yang akan muncul saat hover */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-white font-bold transition-all duration-500 group-hover:max-w-xs group-hover:mr-3">
          Hubungi Sekarang
        </span>

        {/* Ikon WhatsApp */}
        <img
          src={whatsAppsAppLogo}
          className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12"
          alt="WhatsApp"
        />
      </a>
    </section>
  );
};

export default Hero;
