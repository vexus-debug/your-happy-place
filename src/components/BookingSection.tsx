import { useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Calendar, Clock, User, Phone, MessageSquare, CalendarIcon, Sparkles } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";
import { servicesData, Service } from "@/data/servicesData";

const BookingSection = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '',
    service: '',
    servicePrice: '',
    date: '',
    time: '',
    message: ''
  });
  const [availableServices, setAvailableServices] = useState<Service[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.category || !formData.service || !date || !formData.time) {
      toast({
        title: "Missing Information",
        description: "Please select both a category and specific service before booking.",
        variant: "destructive",
      });
      return;
    }
    
    // Create WhatsApp message
    const message = `Hello Janna Aesthetics! I'd like to book an appointment:
    
Name: ${formData.name}
Phone: ${formData.phone}
Service Category: ${formData.category}
Specific Service: ${formData.service}
Price: ${formData.servicePrice}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
Additional Notes: ${formData.message}

Please confirm my appointment. Thank you!`;
    
    const whatsappURL = `https://wa.me/2348022936328?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="booking" className="relative py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-gold-50"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-gold/10 to-transparent rounded-full opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Book Your Appointment
            </h2>
            <p className="text-xl text-elegant max-w-2xl mx-auto leading-relaxed">
              Ready to treat yourself? Schedule your appointment and let us pamper you 
              with our world-class beauty and spa and health club services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Booking Form */}
            <div className="lg:col-span-2 relative">
              <div className="relative bg-white/95 border border-border/50 shadow-lg p-8 md:p-10 rounded-2xl hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-8 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-gold" />
                  Schedule Your Visit
                </h3>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold tracking-wide text-foreground">
                        Full Name *
                      </label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border/50 bg-white/70 hover:bg-white/90 focus:bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 placeholder:text-muted-foreground/60"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-semibold tracking-wide text-foreground">
                        Phone Number *
                      </label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border/50 bg-white/70 hover:bg-white/90 focus:bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 placeholder:text-muted-foreground/60"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Category Selection */}
                    <div className="space-y-2">
                      <label htmlFor="category" className="block text-sm font-semibold tracking-wide text-foreground">
                        Service Category *
                      </label>
                      <Select 
                        value={formData.category} 
                        onValueChange={(value) => {
                          const selectedCategory = servicesData.find(cat => cat.category === value);
                          setAvailableServices(selectedCategory?.services || []);
                          setFormData({ 
                            ...formData, 
                            category: value,
                            service: '',
                            servicePrice: ''
                          });
                        }}
                        required
                      >
                        <SelectTrigger className="w-full px-4 py-3.5 rounded-xl border border-border/50 bg-white/70 hover:bg-white/90 focus:bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300">
                          <SelectValue placeholder="Select a service category" />
                        </SelectTrigger>
                        <SelectContent className="bg-white z-50 max-h-[300px]">
                          {servicesData.map((category, index) => (
                            <SelectItem key={index} value={category.category}>
                              <div className="flex items-center gap-2">
                                {category.category}
                                {category.badge && (
                                  <span className="text-xs px-2 py-0.5 rounded-full bg-gold/20 text-gold font-medium">
                                    {category.badge}
                                  </span>
                                )}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Service Selection - Only shown after category selected */}
                    {formData.category && (
                      <div className="space-y-2 animate-fade-in">
                        <label htmlFor="service" className="block text-sm font-semibold tracking-wide text-foreground">
                          Specific Service *
                        </label>
                        <Select 
                          value={formData.service} 
                          onValueChange={(value) => {
                            const selectedService = availableServices.find(s => s.name === value);
                            setFormData({ 
                              ...formData, 
                              service: value,
                              servicePrice: selectedService?.price || ''
                            });
                          }}
                          required
                        >
                          <SelectTrigger className="w-full px-4 py-3.5 rounded-xl border border-border/50 bg-white/70 hover:bg-white/90 focus:bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300">
                            <SelectValue placeholder="Select specific service" />
                          </SelectTrigger>
                          <SelectContent className="bg-white z-50 max-h-[300px]">
                            {availableServices.map((service, index) => (
                              <SelectItem key={index} value={service.name}>
                                <div className="flex justify-between items-center w-full gap-4">
                                  <span className="flex-1 text-left">{service.name}</span>
                                  <span className="font-semibold text-gold whitespace-nowrap ml-4">{service.price}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-muted-foreground mt-1">
                          {availableServices.length} services available in this category
                        </p>
                      </div>
                    )}

                    {/* Price Display - Only shown after service selected */}
                    {formData.servicePrice && (
                      <div className="bg-gradient-to-r from-gold/10 via-primary/10 to-gold/10 border-2 border-gold/30 rounded-xl p-4 animate-fade-in">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-elegant flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-gold" />
                            Selected Service Price:
                          </span>
                          <span className="text-2xl font-bold text-gold">{formData.servicePrice}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold tracking-wide text-foreground">
                        Preferred Date *
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full px-4 py-3.5 h-auto rounded-xl border border-border/50 bg-white/70 hover:bg-white/90 focus:bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-5 w-5 text-muted-foreground" />
                            {date ? format(date, "PPP") : <span className="text-muted-foreground/60">Select a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-white z-[100]" align="start">
                          <CalendarComponent
                            mode="single"
                            selected={date}
                            onSelect={(selectedDate) => {
                              setDate(selectedDate);
                              setFormData({
                                ...formData,
                                date: selectedDate ? format(selectedDate, "PPP") : ''
                              });
                            }}
                            disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="time" className="block text-sm font-semibold tracking-wide text-foreground">
                        Preferred Time *
                      </label>
                      <Select 
                        value={formData.time} 
                        onValueChange={(value) => setFormData({ ...formData, time: value })}
                      >
                        <SelectTrigger className="w-full px-4 py-3.5 rounded-xl border border-border/50 bg-white/70 hover:bg-white/90 focus:bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent className="bg-white z-[100] max-h-[300px]">
                          <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                          <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                          <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                          <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                          <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                          <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                          <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                          <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                          <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                          <SelectItem value="6:00 PM">6:00 PM</SelectItem>
                          <SelectItem value="7:00 PM">7:00 PM</SelectItem>
                          <SelectItem value="8:00 PM">8:00 PM</SelectItem>
                          <SelectItem value="9:00 PM">9:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold tracking-wide text-foreground">
                      Additional Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-border/50 bg-white/70 hover:bg-white/90 focus:bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none placeholder:text-muted-foreground/60"
                      placeholder="Any special requests or additional information..."
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-gradient-to-r from-primary via-primary/90 to-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <MessageSquare className="w-5 h-5 mr-2 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
                    Book via WhatsApp
                  </Button>
                </form>
              </div>
            </div>

            {/* Quick Info & Contact */}
            <div className="space-y-6 lg:col-span-1">
              {/* Opening Hours */}
              <div className="bg-white/95 border border-border/50 shadow-md p-6 rounded-2xl hover:border-gold/50 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-serif font-bold text-foreground mb-5 flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-gold" />
                  Opening Hours
                </h3>
                <div className="space-y-4 text-elegant">
                  <div className="flex flex-col items-center justify-center py-4">
                    <span className="text-3xl font-bold text-gold mb-2">24/7</span>
                    <span className="font-medium text-center">Open Every Day, All Day</span>
                    <span className="text-sm text-muted-foreground mt-1">We're always here for you</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white/95 border border-border/50 shadow-md p-6 rounded-2xl hover:border-gold/50 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-serif font-bold text-foreground mb-5">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a 
                    href="tel:+2347068121733"
                    className="flex items-center space-x-3 text-elegant hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-white/50"
                  >
                    <Phone className="w-5 h-5 text-gold" />
                    <span className="font-medium">+234 706 812 1733</span>
                  </a>
                  <a 
                    href="https://wa.me/2347068121733"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full py-3 px-4 border-2 border-gold/40 bg-gradient-to-r from-gold/5 to-gold/10 text-gold font-semibold rounded-xl hover:border-gold hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>WhatsApp: +234 706 812 1733</span>
                  </a>
                </div>
              </div>

              {/* Booking Notes */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-gold/10 to-transparent"></div>
                <div className="relative bg-white/90 border border-gold/40 p-6 rounded-2xl">
                  <h4 className="font-serif font-bold text-foreground mb-4 flex items-center">
                    <span className="w-1.5 h-6 bg-gradient-to-b from-primary to-gold rounded-full mr-3"></span>
                    Booking Notes
                  </h4>
                  <ul className="space-y-3 text-sm text-elegant">
                    <li className="flex items-start">
                      <span className="text-gold mr-2 text-lg">✓</span>
                      <span>We're open 24/7 for your convenience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2 text-lg">✓</span>
                      <span>Appointments are confirmed via WhatsApp</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2 text-lg">✓</span>
                      <span>Please arrive 10 minutes early</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2 text-lg">✓</span>
                      <span>Home services available with extra ₦20,000</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;