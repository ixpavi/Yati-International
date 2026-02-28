import { Users, Target, Zap, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "We source only genuine products from authorized channels, ensuring reliability and performance.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our priority. We provide personalized solutions tailored to your needs.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Extensive inventory and efficient logistics ensure quick turnaround times.",
  },
  {
    icon: Globe,
    title: "Industry Expertise",
    description: "Decades of experience serving diverse industries with specialized knowledge.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-[90px] bg-background section-animate">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              Your Trusted Industrial Partner Since 2004
            </h2>
            <p className="text-muted-foreground mb-6">
              Yati International Inc. has been a leading distributor of industrial components 
              for over two decades. Based on a foundation of quality, reliability, and customer 
              service, we've grown to become a trusted partner for businesses across multiple industries.
            </p>
            <p className="text-muted-foreground mb-8">
              As an authorized distributor for Parker Hannifin and other premium brands, we 
              provide genuine products backed by manufacturer warranties and comprehensive 
              technical support. Our team of experts is dedicated to helping you find the 
              right solutions for your applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 p-4 bg-card border-l-4 border-accent card-shadow">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">20+</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Years</div>
                  <div className="text-sm text-muted-foreground">In Business</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card border-l-4 border-accent card-shadow">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">15+</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Brands</div>
                  <div className="text-sm text-muted-foreground">We Represent</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-card border-l-[5px] border-accent card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
