import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto leading-relaxed">
              Mobile spa services bringing premium aesthetic treatments directly to you. 
              Full clinic services expanding soon.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card-elegant p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  {/* Service Type */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Service Type</h4>
                      <p className="text-elegant leading-relaxed mb-3">
                        <strong>Mobile Spa Services</strong><br />
                        We come to your location for your convenience
                      </p>
                      <p className="text-elegant leading-relaxed">
                        <strong>Coming Soon:</strong><br />
                        Full clinic services expanding
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">WhatsApp / Call</h4>
                      <a 
                        href="tel:+2348022936328"
                        className="block text-elegant hover:text-primary transition-colors"
                      >
                        +234 802 293 6328
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Instagram</h4>
                      <a 
                        href="https://instagram.com/Jannaaesthetics.ng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-elegant hover:text-primary transition-colors"
                      >
                        @Jannaaesthetics.ng
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com/Jannaaesthetics.ng" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Why Choose Janna Aesthetics */}
              <div className="section-gold rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Why Choose Janna Aesthetics?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-primary mb-2">20+</div>
                    <div className="text-sm text-elegant">Treatments Available</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-gold mb-2">Premium</div>
                    <div className="text-sm text-elegant">Quality Products</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-primary mb-2">Certified</div>
                    <div className="text-sm text-elegant">Professional</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-gold mb-2">Mobile</div>
                    <div className="text-sm text-elegant">Spa Service</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="card-elegant p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Payment Details
              </h3>
              <div className="bg-gradient-to-br from-primary/5 to-gold/5 rounded-xl p-6 border border-primary/10 mb-6">
                <div className="space-y-4 text-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Bank</span>
                    <span className="font-semibold text-primary">Providus Bank</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Account Name</span>
                    <span className="font-semibold text-foreground">Jane Ikoro</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Account Number</span>
                    <span className="font-semibold text-foreground">6505336149</span>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/2348022936328"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full flex items-center justify-center"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
