import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import AIChat from "@/components/AIChat";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "support@bharatroots.in",
      link: "mailto:support@bharatroots.in"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Mumbai, Maharashtra, India",
      link: null
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Sat: 9AM - 6PM IST",
      link: null
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-4 right-6 z-50">
        <ThemeToggle />
      </div>
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-4" data-testid="text-page-title">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8">
                <h2 className="font-serif text-3xl font-bold mb-6" data-testid="text-form-title">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      data-testid="input-name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      data-testid="input-subject"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      data-testid="input-message"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" data-testid="button-submit-contact">
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Contact Information */}
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6" data-testid="text-info-title">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-6 hover-elevate active-elevate-2 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1" data-testid={`text-contact-${info.title.toLowerCase()}`}>
                            {info.title}
                          </h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-muted-foreground hover:text-primary transition-colors"
                              data-testid={`link-contact-${info.title.toLowerCase()}`}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground" data-testid={`text-contact-value-${info.title.toLowerCase()}`}>
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* FAQ Section */}
                <div className="mt-12">
                  <h3 className="font-serif text-2xl font-bold mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <Card className="p-6">
                      <h4 className="font-semibold mb-2">How long does shipping take?</h4>
                      <p className="text-sm text-muted-foreground">
                        Delivery typically takes 5-7 business days within India. International shipping times vary by location.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-semibold mb-2">Can I return a product?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes, we offer a 14-day return policy for most products. Please refer to our return policy for details.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-semibold mb-2">How do I become a seller?</h4>
                      <p className="text-sm text-muted-foreground">
                        Artisans can apply through our seller program. Contact us at artisans@bharatroots.in to get started.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <AIChat />
    </div>
  );
}
