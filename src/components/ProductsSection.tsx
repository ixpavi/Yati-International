import { ArrowRight } from "lucide-react";
import hydraulicsImg from "@/assets/hydraulics.jpg";
import filtrationImg from "@/assets/filtration.jpg";
import valvesImg from "@/assets/valves.jpg";
import hosesImg from "@/assets/hoses.jpg";
import sealsImg from "@/assets/seals.jpg";
import pumpsImg from "@/assets/pumps.jpg";

const products = [
  {
    title: "Hydraulic Systems",
    description: "Cylinders, pumps, motors, and complete hydraulic solutions",
    image: hydraulicsImg,
  },
  {
    title: "Filtration",
    description: "Industrial filters for hydraulic, air, and fuel applications",
    image: filtrationImg,
  },
  {
    title: "Valves & Fittings",
    description: "Precision valves, connectors, and fluid control components",
    image: valvesImg,
  },
  {
    title: "Hoses & Tubing",
    description: "Industrial hoses, tubes, and fluid conveyance systems",
    image: hosesImg,
  },
  {
    title: "Seals & O-Rings",
    description: "Precision sealing solutions for all applications",
    image: sealsImg,
  },
  {
    title: "Pumps & Motors",
    description: "High-performance pumps and hydraulic motors",
    image: pumpsImg,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-[90px] bg-secondary section-animate">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
            Industrial Components & Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            We supply a comprehensive range of industrial components from world-leading 
            manufacturers, ensuring quality and reliability for your operations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-card p-6 border-l-[5px] border-accent card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center text-primary font-semibold hover:text-accent hover:gap-2 transition-all"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
