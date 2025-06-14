import { motion } from "framer-motion";
import { SiDiscord, SiX, SiInstagram, SiTiktok } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: SiDiscord, href: "https://discord.gg/jv8k48NaDR", color: "text-primary", hoverColor: "hover:text-primary" },
    { icon: SiTiktok, href: "https://www.tiktok.com/@wrecked_gen", color: "text-[hsl(353,83%,69%)]", hoverColor: "hover:text-[hsl(353,83%,69%)]" },
  ];

  return (
    <footer className="bg-card py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SiDiscord className="text-3xl text-primary mr-3" />
            <span className="text-2xl font-bold gradient-text">DiscordGen</span>
          </motion.div>
          
          <motion.p
            className="text-gray-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Premium Discord Services - Accounts, Tools & Custom Bots
          </motion.p>
          
          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className={`text-gray-400 ${social.hoverColor} transition-colors duration-300`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="text-2xl" />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div
            className="border-t border-gray-800 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500">
              &copy; {currentYear} WreckedG3N. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
