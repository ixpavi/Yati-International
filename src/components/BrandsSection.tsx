import { Award, Shield, CheckCircle } from "lucide-react";
import parkerDistributor from "@/assets/parker-distributor.png";

const brands = [
  { name: "Parker Hannifin", featured: true },
  { name: "Eaton", featured: false },
  { name: "Bosch Rexroth", featured: false },
  { name: "Danfoss", featured: false },
  { name: "SMC", featured: false },
  { name: "Festo", featured: false },
  { name: "Gates", featured: false },
  { name: "Donaldson", featured: false },
];

const BrandsSection = () => {
  return (
    <section id="brands" className="py-[90px] bg-background section-animate">
      <div className="container mx-auto px-4">
        {/* Featured Partner - Parker */}
        <div className="bg-card p-8 md:p-12 mb-16 border-l-[6px] border-accent card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1.5 max-w-[600px]">
          <div className="flex flex-col gap-6">
            <img src={parkerDistributor} alt="Parker Authorized Distributor" className="h-16 w-auto object-contain object-left mb-2 max-w-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Parker Hannifin Corporation
            </h2>
            <p className="text-muted-foreground">
              As an authorized Parker Hannifin distributor, we provide genuine products
              backed by full manufacturer warranty and technical support. Parker is the
              global leader in motion and control technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Genuine Products", "Full Warranty", "Technical Support", "Competitive Pricing"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-foreground text-sm">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Other Brands */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            We Also Supply Products From
          </h3>
          <p className="text-muted-foreground">
            Leading industrial manufacturers trusted worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {brands.filter(b => !b.featured).map((brand) => (
            <div
              key={brand.name}
              className="bg-card border-l-[5px] border-accent p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1.5 group"
            >
              <span className="text-foreground font-semibold group-hover:text-primary transition-colors">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
