import logo from "@/assets/smoochi-logo.jpeg";
import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Smoochi Logo" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <span className="font-display text-xl font-bold text-primary">SMOOCHI</span>
                <p className="text-sm opacity-70">Smooth Ice Cream Mochi</p>
              </div>
            </div>
            <p className="text-sm opacity-70">
              Supplier mochi ice cream terpercaya untuk bisnis Anda. 
              Dibuat dengan cinta di Bandung, Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Menu</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#products" className="opacity-70 hover:opacity-100 transition-opacity">Produk</a>
              <a href="#flavors" className="opacity-70 hover:opacity-100 transition-opacity">Varian Rasa</a>
              <a href="#reseller" className="opacity-70 hover:opacity-100 transition-opacity">Jadi Reseller</a>
              <a href="#order" className="opacity-70 hover:opacity-100 transition-opacity">Pesan</a>
              <a href="#contact" className="opacity-70 hover:opacity-100 transition-opacity">Kontak</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4">Kontak</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="https://www.instagram.com/mochiicecreamsmoochi?igsh=czh1MW9mY21jY21i" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
              >
                <Instagram className="w-4 h-4" />
                @smoochi.id
              </a>
              <a 
                href="https://wa.me/6281220499249"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                0812-2049-9249
              </a>
              <a 
                href="https://maps.app.goo.gl/EyJ87BcPzVQnzcdE9?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
              >
                <MapPin className="w-4 h-4" />
                Bandung, Jawa Barat
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-sm opacity-70">
            © 2026 Smoochi. Dibuat dengan 🍡 di Bandung
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
