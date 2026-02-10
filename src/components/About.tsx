import mochiVariety from "@/assets/mochi-variety.webp";

const About = () => {
  const stats = [
    { number: "20+", label: "Varian Rasa" },
    { number: "2013", label: "Berdiri Sejak" },
    { number: "100%", label: "Segar Setiap Hari" },
    { number: "❤️", label: "Dibuat dengan Cinta" },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src={mochiVariety}
              alt="Berbagai varian Smoochi mochi"
              className="rounded-3xl shadow-card"
            />
            <div className="absolute -top-6 -right-6 bg-secondary text-secondary-foreground px-6 py-3 rounded-2xl font-display font-bold shadow-pink animate-bounce-soft">
              Handmade! 🎉
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-foreground">Apa yang Membuat</span>
              <br />
              <span className="text-gradient-brand">Smoochi Istimewa?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Lahir di jantung kota Bandung, Smoochi menghadirkan perpaduan sempurna antara tradisi mochi Jepang 
              dan kelezatan es krim yang creamy. Setiap potong dibuat secara handmade setiap hari 
              menggunakan bahan-bahan premium untuk memastikan kesegaran terbaik.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              Rahasia kami? Keseimbangan sempurna antara kulit mochi yang lembut dan kenyal 
              dengan isian es krim yang kaya dan creamy. Begitu kamu mencoba, kamu akan paham 
              kenapa Smoochi berarti "Smooth Ice Cream Mochi."
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-accent rounded-2xl p-4 text-center"
                >
                  <div className="font-display text-2xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
