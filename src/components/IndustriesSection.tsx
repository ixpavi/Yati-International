import { Factory, Truck, Droplet, Wrench, Building, Plane } from "lucide-react";

const industries = [
  { icon: Factory, name: "Manufacturing", description: "Automotive, aerospace, and general manufacturing" },
  { icon: Truck, name: "Mobile Equipment", description: "Construction, agriculture, and material handling" },
  { icon: Droplet, name: "Oil & Gas", description: "Upstream, midstream, and downstream applications" },
  { icon: Wrench, name: "Machine Tools", description: "CNC machines and precision equipment" },
  { icon: Building, name: "Industrial Plants", description: "Power generation and process industries" },
  { icon: Plane, name: "Aerospace", description: "Aviation and defense applications" },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-[90px] bg-secondary section-animate">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
            Solutions for Every Industry
          </h2>
          <p className="text-muted-foreground text-lg">
            From manufacturing to aerospace, we provide specialized industrial components 
            and solutions tailored to the unique demands of each sector.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group p-6 bg-card border-l-[5px] border-accent card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 transition-colors">
                <industry.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary mb-2 transition-colors">
                {industry.name}
              </h3>
              <p className="text-muted-foreground">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
