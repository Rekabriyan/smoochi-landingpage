import { Instagram, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-10 sm:py-20 md:py-20 lg:py-20 bg-gradient-to-b from-card to-smoochi-turquoise-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Hubungi </span>
            <span className="text-secondary">Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Punya pertanyaan atau ingin memesan? 
            Hubungi kami atau kunjungi lokasi kami di Bandung!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-card rounded-3xl p-8 shadow-card">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Informasi Kontak
            </h3>
            
            <div className="space-y-6">
              <a 
                href="https://instagram.com/smoochi.id" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-accent rounded-2xl hover:bg-primary hover:text-primary-foreground transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-pink rounded-full flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">@smoochi.id</p>
                  <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">Follow kami di Instagram</p>
                </div>
              </a>

              <a 
                href="https://wa.me/6281220499249"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-accent rounded-2xl hover:bg-green-500 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">0812-2049-9249</p>
                  <p className="text-sm text-muted-foreground group-hover:text-white/80">WhatsApp untuk pemesanan</p>
                </div>
              </a>

              <a 
                href="https://maps.app.goo.gl/EyJ87BcPzVQnzcdE9?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-accent rounded-2xl hover:bg-primary hover:text-primary-foreground transition-colors group"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Bandung, Indonesia</p>
                  <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">Klik untuk buka Maps</p>
                </div>
              </a>
            </div>
          </div>

          {/* Map Embed */}
          <div className="bg-card rounded-3xl overflow-hidden shadow-card">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.649660881181!2d107.6354269!3d-6.932410099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e870ccda16c5%3A0xe080ed78ecaca923!2sPusat%20Mochi%20Ice%20Cream%20Smoochi!5e0!3m2!1sid!2sid!4v1768896497764!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Smoochi Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
