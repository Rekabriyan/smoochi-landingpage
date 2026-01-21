const Flavors = () => {
  const flavors = [
    { name: "Vanila", color: "bg-yellow-100", emoji: "🍨" },
    { name: "Strawberry", color: "bg-pink-400", emoji: "🍓" },
    { name: "Coklat", color: "bg-amber-800", emoji: "🍫" },
    { name: "Oreo Milk", color: "bg-gray-800", emoji: "🍪" },
    { name: "Tiramisu", color: "bg-amber-600", emoji: "🍰" },
    { name: "Durian", color: "bg-yellow-300", emoji: "🍈" },
    { name: "Froyo (Yogurt)", color: "bg-pink-200", emoji: "🍦" },
    { name: "Cizz", color: "bg-orange-300", emoji: "🧀" },
    { name: "Taro", color: "bg-purple-400", emoji: "🍠" },
    { name: "Green Tea", color: "bg-green-400", emoji: "🍵" },
    { name: "Blueberry", color: "bg-indigo-400", emoji: "🫐" },
    { name: "Mango", color: "bg-orange-400", emoji: "🥭" },
    { name: "Kuromochi", color: "bg-gray-900", emoji: "🖤" },
    { name: "Red Velvet", color: "bg-red-500", emoji: "🎂" },
    { name: "Nutella", color: "bg-amber-700", emoji: "🌰" },
    { name: "Sweet Corn", color: "bg-yellow-400", emoji: "🌽" },
    { name: "Banana", color: "bg-yellow-400", emoji: "🍌" },
    { name: "Cappuccino", color: "bg-amber-600", emoji: "☕" },
    { name: "Chocomint", color: "bg-emerald-400", emoji: "🌿" },
    { name: "Bubble Gum", color: "bg-pink-400", emoji: "🫧" },
    { name: "Choconut", color: "bg-amber-700", emoji: "🥥" },
    { name: "Milo Crispy", color: "bg-amber-500", emoji: "🥤" },
    { name: "Kacang Ijo", color: "bg-green-500", emoji: "🫛" },
    { name: "Thai Tea", color: "bg-orange-500", emoji: "🧋" },
  ];

  return (
    <section id="flavors" className="py-24 bg-gradient-to-b from-card to-smoochi-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Varian </span>
            <span className="text-secondary">Rasa</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dari rasa klasik favorit hingga kreasi unik khas Indonesia, 
            ada Smoochi untuk semua orang.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
          {flavors.map((flavor, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-3 md:p-4 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 ${flavor.color} rounded-full mx-auto mb-2 md:mb-3 flex items-center justify-center text-2xl md:text-3xl shadow-md group-hover:scale-110 transition-transform`}>
                {flavor.emoji}
              </div>
              <p className="font-semibold text-center text-foreground text-xs md:text-sm">
                {flavor.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flavors;
