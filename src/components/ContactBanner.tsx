import { useNavigate } from "react-router-dom";
import { Calendar, MessageSquare, MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactBanner = () => {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open("https://wa.me/2348022936328", "_blank");
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Book Now</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Transform Your Beauty with
            <span className="block text-primary mt-2">Janna Aesthetics</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Premium Botox, dermal fillers, PDO thread lifts, and massage therapy. 
            Mobile spa services bringing world-class aesthetics directly to you.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          
          {/* Service Info Card */}
          <div className="card-elegant p-8 hover:shadow-2xl transition-all duration-300 group animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Mobile Spa Services</h3>
                <p className="text-muted-foreground">We bring premium aesthetics to you</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="font-semibold text-foreground">Currently Operating</p>
                  <p className="text-sm text-muted-foreground">Mobile Spa — We come to your location</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="font-semibold text-foreground">Coming Soon</p>
                  <p className="text-sm text-muted-foreground">Full clinic services expanding</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleWhatsApp}
              className="w-full btn-gold group"
            >
              <MessageSquare className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Book via WhatsApp
            </Button>
          </div>

          {/* Contact Info Card */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            
            {/* Payment Details */}
            <div className="card-elegant p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Payment Details</h4>
                  <p className="text-sm text-muted-foreground">Providus Bank</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">Account Name: <span className="text-foreground font-medium">Jane Ikoro</span></p>
                <p className="text-muted-foreground">Account Number: <span className="text-foreground font-medium">6505336149</span></p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="card-elegant p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground mb-3">Contact Us</h4>
                  <div className="space-y-2">
                    <a 
                      href="tel:+2348022936328"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/link"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="group-hover/link:underline">+234 802 293 6328</span>
                    </a>
                    <a 
                      href="https://instagram.com/Jannaaesthetics.ng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/link"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="group-hover/link:underline">@Jannaaesthetics.ng</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="section-gold rounded-xl p-4 text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-primary mb-1">20+</div>
                <div className="text-xs text-muted-foreground">Premium Treatments</div>
              </div>
              <div className="section-gold rounded-xl p-4 text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-gold mb-1">Mobile</div>
                <div className="text-xs text-muted-foreground">Spa Service</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary-deep to-gold p-1">
            <div className="bg-background rounded-[22px] p-8 md:p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Ready to Begin Your Transformation?
                </h3>
                <p className="text-muted-foreground">
                  Book your appointment today and discover the perfect treatment for your beauty goals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  onClick={() => navigate('/booking')}
                  size="lg"
                  className="btn-gold w-full sm:w-auto group"
                >
                  <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Book Appointment
                </Button>
                
                <a 
                  href="https://wa.me/2348022936328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full group border-2 hover:bg-secondary"
                  >
                    <MessageSquare className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
