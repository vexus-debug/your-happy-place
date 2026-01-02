import { MapPin, Phone, Clock, Facebook, Instagram, Heart, Sparkles, Mail, Send, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter submission logic would go here
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a1a2a] to-[#1a1a1a] text-background overflow-hidden">
      {/* Decorative Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
        </svg>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="pt-24 pb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand & Contact */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src="/logo.png" 
                    alt="Janna Aesthetics" 
                    className="h-16 w-auto"
                  />
                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-gold-light to-gold bg-clip-text text-transparent">
                      Janna Aesthetics
                    </h3>
                    <p className="text-background/70 text-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-gold" />
                      Premium Aesthetics
                    </p>
                  </div>
                </div>
                <p className="text-background/80 leading-relaxed max-w-md text-base">
                  Your premier destination for authentic traditional spa and health club treatments in Abuja. 
                  We're dedicated to making every woman feel beautiful, confident, and pampered.
                </p>
              </div>

              {/* Decorative Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <MapPin className="w-5 h-5 text-gold mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-background/90 group-hover:text-gold/90 transition-colors">
                    Mall of Dubai, Garki & Lakota Street, Wuse, Abuja
                  </span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone className="w-5 h-5 text-gold group-hover:rotate-12 transition-transform" />
                  <div className="space-y-1">
                    <a href="tel:+2347068121733" className="block text-background/90 hover:text-gold transition-colors font-medium">
                      0706 812 1733
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                  <span className="text-background/90">faridazspa@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-gold to-transparent"></div>
                <h4 className="text-lg font-semibold text-gold">Quick Links</h4>
              </div>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/services", label: "Our Services" },
                  { to: "/gallery", label: "Gallery" },
                  { to: "/booking", label: "Book Appointment" },
                  { to: "/contact", label: "Contact Us" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to}
                      className="text-background/80 hover:text-gold hover:translate-x-1 transition-all inline-flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/40 mr-2 group-hover:bg-gold group-hover:scale-125 transition-all"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Hours */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-gold to-transparent"></div>
                <h4 className="text-lg font-semibold text-gold">Opening Hours</h4>
              </div>
              <div className="space-y-4 text-background/80">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gold animate-pulse" />
                  <span className="text-sm font-medium">Business Hours</span>
                </div>
                <div className="space-y-2 text-sm bg-background/5 rounded-lg p-4 border border-background/10">
                  <div className="flex justify-between items-center">
                    <span>Monday - Saturday</span>
                    <span className="text-gold font-medium">9am - 10pm</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="text-gold font-medium">12pm - 8pm</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h5 className="font-semibold mb-4 text-gold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Popular Services
                </h5>
                <ul className="space-y-2 text-sm text-background/80">
                  {["Spa & Massage", "Nail Care & Art", "Hair & Braids", "Body Sculpting"].map((service) => (
                    <li key={service} className="flex items-center gap-2 hover:text-gold transition-colors">
                      <span className="w-1 h-1 rounded-full bg-gold"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter & Social Section */}
          <div className="mt-16 pt-12 border-t border-background/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Newsletter */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold animate-pulse" />
                  <h4 className="text-xl font-semibold text-gold">Stay Connected</h4>
                </div>
                <p className="text-background/70 text-sm">
                  Subscribe to our newsletter for exclusive offers and beauty tips!
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 bg-background/5 border border-gold/20 rounded-lg text-background placeholder:text-background/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all flex items-center gap-2 group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Social Media & WhatsApp */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gold flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Follow Our Journey
                  </h4>
                  <div className="flex space-x-3">
                    <a 
                      href="https://www.facebook.com/profile.php?id=61576040651375" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-primary/20 to-gold/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gold/20 hover:border-gold hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all group"
                    >
                      <Facebook className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                    </a>
                    <a 
                      href="https://www.instagram.com/nayaspa1?igsh=NTc4MTIwNjQ2YQ==" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-primary/20 to-gold/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gold/20 hover:border-gold hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all group"
                    >
                      <Instagram className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gold/10 to-primary/10 border border-gold/20 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-background/80 text-sm mb-3 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-gold" />
                    Ready to book your appointment?
                  </p>
                  <a 
                    href="https://wa.me/2347068121733"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all w-full justify-center group"
                  >
                    <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    WhatsApp Us Now
                    <Sparkles className="w-4 h-4 animate-pulse" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gold/10 bg-background/5 -mx-4 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-background/70 text-sm">
              <span>&copy; {currentYear} Faridaz Spa. All rights reserved.</span>
              <span className="text-background/40">•</span>
              <span className="flex items-center gap-1.5">
                Crafted with 
                <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
                by 
                <a 
                  href="https://vexus.com.ng/vexusdev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors font-semibold hover:underline"
                >
                  VexusDev
                </a>
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-background/70">
              <a href="#" className="hover:text-gold transition-colors hover:underline">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors hover:underline">Terms of Service</a>
              <a href="#" className="hover:text-gold transition-colors hover:underline">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;