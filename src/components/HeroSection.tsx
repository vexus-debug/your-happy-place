import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, ArrowRight, Star, Award, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import spaImage from "@/assets/hero-spa-towel.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-soft/15 via-background to-secondary pt-16">
      {/* Split Screen Layout */}
      <div className="container mx-auto px-4 lg:px-8 h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        
        {/* Left Side - Content (40%) */}
        <div className="w-full lg:w-[45%] z-10 text-center lg:text-left pt-24 lg:pt-0 order-2 lg:order-1">
          {/* Luxury Badge with Glassmorphism */}
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full mb-6 border border-primary/30 bg-background/90 backdrop-blur-xl shadow-soft animate-fade-in">
            <Sparkles className="w-4 h-4 text-gold animate-pulse" />
            <span className="text-foreground font-medium tracking-wide text-sm">Mobile Spa • Premium Aesthetics</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            <span className="block text-foreground">
              Transform Your Beauty with
            </span>
            <span className="block bg-gradient-to-r from-primary-deep via-primary to-accent-green bg-clip-text text-transparent" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              Premium Aesthetic Treatments
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Expert Botox, dermal fillers, PDO thread lifts, and massage therapy. Mobile spa services bringing world-class aesthetics directly to you.
          </p>

          {/* Key Features List */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className="w-4 h-4 text-gold" />
              <span>Certified Professional</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="w-4 h-4 text-gold" />
              <span>Premium Products</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-primary" />
              <span>Mobile Service</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={() => navigate('/booking')}
              size="lg"
              className="group relative overflow-hidden w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10 font-semibold">Book Appointment</span>
            </Button>
            <Button 
              onClick={() => navigate('/services')}
              variant="outline"
              size="lg"
              className="group w-full sm:w-auto"
            >
              <span className="font-semibold">View Services</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Curved Divider - Desktop Only */}
        <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 pointer-events-none">
          <svg 
            className="absolute inset-0 w-32 h-full -translate-x-1/2" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
            style={{ transform: 'translateX(-50%) scaleY(1)' }}
          >
            <path
              d="M 50 0 Q 80 50 50 100"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              opacity="0.2"
            />
          </svg>
        </div>

        {/* Right Side - Image (60%) */}
        <div className="w-full lg:w-[55%] h-[50vh] lg:h-[85vh] relative order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {/* Main Image with Elegant Border */}
          <div className="relative h-full rounded-3xl overflow-hidden shadow-elegant group">
            <img 
              src={spaImage}
              alt="Premium aesthetic treatment at Janna Aesthetics"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              fetchPriority="high"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Decorative Corner Accent */}
            <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-gold/40"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-gold/40"></div>
          </div>

          {/* Floating Stats Cards */}
          <div className="absolute -left-4 lg:left-4 top-1/4 glass-card p-4 rounded-2xl border border-primary/20 bg-background/80 backdrop-blur-xl shadow-elegant animate-float max-w-[140px]" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2 mb-1">
              <Star className="w-5 h-5 text-gold fill-gold" />
              <span className="text-2xl font-bold text-foreground">Premium</span>
            </div>
            <p className="text-xs text-muted-foreground">Quality Products</p>
          </div>

          <div className="absolute -right-4 lg:right-4 bottom-1/3 glass-card p-4 rounded-2xl border border-primary/20 bg-background/80 backdrop-blur-xl shadow-elegant animate-float max-w-[140px]" style={{ animationDelay: '0.7s', animationDuration: '4s' }}>
            <div className="flex items-center gap-2 mb-1">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold text-foreground">Expert</span>
            </div>
            <p className="text-xs text-muted-foreground">Certified Care</p>
          </div>

          {/* Subtle Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-gold/30 rounded-full animate-float-particle"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${10 + Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10 hidden lg:flex">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center backdrop-blur-sm bg-background/20">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
