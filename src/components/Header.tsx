import logo from "@/assets/smoochi-logo.jpeg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Smoochi Logo" 
            className="h-12 w-12 rounded-full object-cover shadow-soft"
          />
          <span className="font-display text-2xl font-bold text-primary">SMOOCHI</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#products" className="font-medium text-foreground/80 hover:text-primary transition-colors">
            Produk
          </a>
          <a href="#flavors" className="font-medium text-foreground/80 hover:text-primary transition-colors">
            Varian Rasa
          </a>
          <a href="#reseller" className="font-medium text-foreground/80 hover:text-primary transition-colors">
            Reseller
          </a>
          <a href="#order" className="font-medium text-foreground/80 hover:text-primary transition-colors">
            Pesan
          </a>
          <a href="#contact" className="font-medium text-foreground/80 hover:text-primary transition-colors">
            Kontak
          </a>
        </nav>
        <a 
          href="https://wa.me/6281220499249"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-pink text-secondary-foreground px-6 py-2.5 rounded-full font-semibold shadow-pink hover:opacity-90 transition-opacity"
        >
          Pesan Sekarang
        </a>
      </div>
    </header>
  );
};

export default Header;
