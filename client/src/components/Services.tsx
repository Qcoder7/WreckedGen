import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { servicesData } from "@/data/servicesData";

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  const handleServiceClick = (serviceName: string) => {
    alert(`Redirecting to our Discord server for ${serviceName} inquiries!`);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of Discord services designed to enhance your server and gaming experience.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {servicesData.map((service, index) => (
            <motion.div key={service.id} variants={item}>
              <Card className={`service-card glass-effect h-full hover:shadow-2xl hover:shadow-${service.color}/20 transition-all duration-300 group`}>
                <CardHeader className="text-center">
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 animate-float${index > 0 ? `-delayed${index > 1 ? '-2' : ''}` : ''} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="text-3xl text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold mb-3 gradient-text">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 mb-6">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="text-accent mr-3 h-4 w-4 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center pt-4">
                    <div className="text-3xl font-bold text-white mb-4">
                      Starting at {service.price}
                    </div>
                    <Button
                      onClick={() => handleServiceClick(service.title)}
                      className={`w-full py-3 bg-gradient-to-r ${service.gradient} hover:shadow-xl hover:shadow-${service.color}/25 transition-all duration-300 text-white font-semibold`}
                    >
                      {service.buttonText}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
