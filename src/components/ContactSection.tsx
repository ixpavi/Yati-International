import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-[90px] bg-secondary section-animate">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              Let's Discuss Your Requirements
            </h2>
            <p className="text-muted-foreground mb-10">
              Whether you need a single component or a complete system solution, our team
              is ready to help. Contact us for product inquiries, technical support, or
              to request a quote.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919414180022" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 94141 80022
                    </a>
                    <a href="tel:+917442480036" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 0744 2480036
                    </a>
                    <a href="tel:+917442480037" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 0744 2480037
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:sales@yatiindia.com" className="text-muted-foreground hover:text-primary transition-colors">
                    sales@yatiindia.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    Shop No. S30-S31, Chambal Industrial Area, DCM Road, Opposite Multimetals Ltd, Kota – 324003 (Raj), India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 border-l-[6px] border-accent card-shadow hover:card-shadow-hover transition-all duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-6">Request a Quote</h3>
            <form
              action="https://formsubmit.co/sales@yatiindia.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New Quote Request - Yati International" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input name="First Name" placeholder="John" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input name="Last Name" placeholder="Doe" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input type="email" name="Email" placeholder="john@company.com" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <Input name="Company" placeholder="Your Company Name" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  name="Message"
                  placeholder="Tell us about your requirements..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-full hover:bg-primary hover:text-primary-foreground">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
