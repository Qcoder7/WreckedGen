import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">WreckedG3N</span>
          </h2>
        </motion.div>

        {/* Our Story Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-3xl font-bold mb-6 gradient-text">Our Story</h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                WreckedGen was born from a bold vision: to redefine access to powerful Discord tools for everyone. What started as a small passion project in 2021 between two friends—Kurapika and Wcoder—has grown into a trusted platform used by thousands of Discord users across the world.
              </p>
              <p>
                It all began when the duo noticed a glaring gap in the market: overpriced, unreliable Discord services with poor support and little innovation. Tired of the status quo, they set out to build something better—a platform made by Discord enthusiasts, for Discord enthusiasts.
              </p>
              <p>
                From coding late nights in their bedrooms to now leading a tight-knit team of six skilled experts, Kurapika and Wcoder have stayed true to the original mission: performance, affordability, and community-first support.

                WreckedGen isn’t just another gen—it’s the future of Discord automation, verification, backups, and more. Built for those who expect more, by those who demand better.
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <img
              src="https://media.discordapp.net/attachments/1377103676652519605/1381188707452719145/Banner.jpg?ex=684e84b9&is=684d3339&hm=346954377af40bb011dae984faf1b35d41d82ffde82f2ad97ab131c5519a479f&=&format=webp&width=1149&height=823"
              alt="Modern tech workspace with computers and developers"
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </motion.div>

        {/* Our Mission Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} className="lg:order-2">
            <h3 className="text-3xl font-bold mb-6 gradient-text">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At WreckedGen, our mission is to make powerful, premium Discord tools accessible to all. We’re committed to delivering high-performance, affordable solutions that elevate the Discord experience for communities of every size. Whether you're running a small friend group or managing a massive server, you deserve tools built with precision, reliability, and care.

              We believe in breaking barriers—no overpriced fluff, no gatekeeping—just pure utility designed by real Discord users, for real Discord users.
            </p>
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Provide reliable, high-quality Discord services",
                "Maintain competitive pricing without compromising quality",
                "Deliver exceptional customer support and satisfaction"
              ].map((mission, index) => (
                <motion.div key={index} className="flex items-start" variants={fadeInUp}>
                  <CheckCircle className="text-accent mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-300">{mission}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInUp} className="lg:order-1">
            <img
              src="https://media.discordapp.net/attachments/1377103676652519605/1383115877771247726/image.png?ex=684e474a&is=684cf5ca&hm=7072f219d5dc3c502527da4b7e200d9ce2df39fe78e1f2e89ec32d98e2bb9c8e&=&format=webp&quality=lossless&width=1399&height=585"
              alt="Digital services illustration with modern technology"
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </motion.div>

        {/* Our Vision Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-3xl font-bold mb-6 gradient-text">Our Vision</h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-6">
              <p>
                At WreckedGen, our mission is to empower every Discord community with cutting-edge, reliable, and accessible tools. We're building a platform that combines innovation, affordability, and ease of use—so that anyone, from small groups to large networks, can manage, grow, and secure their servers with confidence.
              </p>
              <p>
                By 2026, we’re committed to expanding WreckedGen into an all-in-one ecosystem—offering AI-powered bots, advanced server management solutions, and educational content to support the next generation of thriving Discord communities.

                We’re not just building tools—we’re building the future of Discord.
                grow and succeed.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Innovation", color: "primary" },
                { label: "Community", color: "accent" },
                { label: "Excellence", color: "accent-pink" }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className={`bg-${value.color}/20 border border-${value.color}/30 rounded-lg px-4 py-2`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={`text-${value.color} font-semibold`}>{value.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <img
              src="https://media.discordapp.net/attachments/1377103676652519605/1383419505673375765/image.png?ex=684eb950&is=684d67d0&hm=d8fd0156ab54f85c16b2d3911359a2382cd00fd478db59e590209a3a0111175e&=&format=webp&quality=lossless&width=1101&height=663"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
