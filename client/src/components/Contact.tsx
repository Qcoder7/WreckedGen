import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { SiDiscord } from "react-icons/si";
import { Users, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    discord: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! We'll get back to you soon via Discord.",
    });
    setFormData({ name: "", discord: "", service: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const joinDiscord = () => {
    toast({
      title: "Redirecting to Discord",
      description: "Opening Discord server: dc.gg/wrecked",
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to enhance your Discord experience? Join our community or contact us directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Discord Community Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <Card className="glass-effect h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold gradient-text">Join Our Discord Server</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300">
                  Join thousands of satisfied customers in our Discord community. Get instant support, 
                  updates, and exclusive offers.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <SiDiscord className="text-2xl text-primary mr-4" />
                    <div>
                      <div className="font-semibold text-white">Discord Server</div>
                      <div className="text-gray-400">dc.gg/wrecked</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-2xl text-accent mr-4" />
                    <div>
                      <div className="font-semibold text-white">Active Members</div>
                      <div className="text-gray-400">1000+ members</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-2xl text-[hsl(353,83%,69%)] mr-4" />
                    <div>
                      <div className="font-semibold text-white">Support Hours</div>
                      <div className="text-gray-400">24/7 Available</div>
                    </div>
                  </div>
                </div>
                
                <Button
                  onClick={joinDiscord}
                  className="w-full py-4 bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 text-white font-semibold"
                >
                  <SiDiscord className="mr-2 h-5 w-5" />
                  Join Discord Server
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass-effect h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold gradient-text">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Your Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-[hsl(240,5%,17%)] border-gray-600 text-white focus:border-primary mt-2"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="discord" className="text-gray-300">Discord Username</Label>
                    <Input
                      id="discord"
                      type="text"
                      value={formData.discord}
                      onChange={(e) => handleInputChange("discord", e.target.value)}
                      className="bg-[hsl(240,5%,17%)] border-gray-600 text-white focus:border-primary mt-2"
                      placeholder="Eg. wcoder1008"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="service" className="text-gray-300">Service Interest</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="bg-[hsl(240,5%,17%)] border-gray-600 text-white focus:border-primary mt-2">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-[hsl(240,5%,17%)] border-gray-600">
                        <SelectItem value="accounts">Premium Accounts</SelectItem>
                        <SelectItem value="tools">Custom Tools</SelectItem>
                        <SelectItem value="bots">Discord Bots</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-300">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-[hsl(240,5%,17%)] border-gray-600 text-white focus:border-primary mt-2 min-h-[100px]"
                      placeholder="Tell us about your requirements..."
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-accent to-primary hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105 text-white font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
