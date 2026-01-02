import { MapPin, Phone, Clock, Mail, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const FooterRevamped = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-background via-secondary/30 to-primary/5 border-t border-border/50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-gold to-primary"></div>
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Janna Aesthetics" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium aesthetic treatments including Botox, dermal fillers, and PDO thread lifts. Mobile spa services available.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" }
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-muted-foreground">
                  Mobile Spa Services<br />
                  Full clinic coming soon
                </p>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 group-hover:rotate-12 transition-transform" />
                <div className="space-y-1">
                  <a href="tel:+2348022936328" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    +234 802 293 6328
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="https://instagram.com/Jannaaesthetics.ng" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  @Jannaaesthetics.ng
                </a>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              Payment Details
            </h4>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-primary/5 to-gold/5 rounded-xl p-4 border border-primary/10">
                <div className="space-y-3 text-sm">
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
                    <span className="text-muted-foreground">Account No.</span>
                    <span className="font-semibold text-foreground">6505336149</span>
                  </div>
                </div>
              </div>
              <Link 
                to="/booking"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary to-primary-deep text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              © {currentYear} Janna Aesthetics. Made with 
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
              in Nigeria
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterRevamped;
