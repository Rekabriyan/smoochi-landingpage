import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Flavors from "@/components/Flavors";
import About from "@/components/About";
import Reseller from "@/components/Reseller";
import OrderPlatforms from "@/components/OrderPlatforms";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Flavors />
      <About />
      <Reseller />
      <OrderPlatforms />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
