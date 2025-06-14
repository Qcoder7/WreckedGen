import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiDiscord } from "react-icons/si";
import { teamData } from "@/data/teamData";

export default function Team() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="team" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our dedicated team of developers and Discord experts working to provide you with the best services.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {teamData.map((member, index) => (
            <motion.div key={member.id} variants={item}>
              <Card className="team-card glass-effect text-center hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <motion.img
                    src={member.avatar}
                    alt={`Team member ${member.name} - ${member.role}`}
                    className={`w-24 h-24 rounded-full mx-auto mb-4 border-4 ${member.borderColor} object-cover`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-accent mb-3 font-medium">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="flex justify-center items-center text-gray-400">
                    <SiDiscord className="mr-2 h-4 w-4" />
                    <span className="text-sm">{member.discord}</span>
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
