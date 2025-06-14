export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  discord: string;
  avatar: string;
  borderColor: string;
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Wcoder",
    role: "Founder & Developer",
    description: "Founder and lead developer with 5+ years of Discord bot development experience. Specializes in automation and custom tools.",
    discord: "wcoder1008",
    avatar: "https://cdn.discordapp.com/avatars/1377096561133092977/5d3ce679afbf871ce1820bbc7bef423c.png?size=4096",
    borderColor: "border-primary"
  },
  {
    id: 2,
    name: "Kurapika",
    role: "Founder & Manager",
    description: "Founder and manager of our server, leading all the staff and members with new feautures and ideas",
    discord: "kurapika_alt",
    avatar: "https://cdn.discordapp.com/avatars/1196132788601110573/4593f25622f25871fb84a8985c4a8498.png?size=4096",
    borderColor: "border-accent"
  },
  {
    id: 3,
    name: "ItsMeBoi",
    role: "Owner & Developer",
    description: "Server-side expert handling databases, APIs, and bot hosting infrastructure. Ensures everything runs smoothly 24/7.",
    discord: "itsmeboi0923",
    avatar: "https://cdn.discordapp.com/avatars/1153479317519605791/8e9937e69dec8dc64b1b70696e62996e.png?size=4096",
    borderColor: "border-[hsl(353,83%,69%)]"
  },
  {
    id: 4,
    name: "M1NX",
    role: "Co Owner & Hosting Provider",
    description: "Oversees server infrastructure and uptime, ensuring smooth performance while supporting the community and platform growth.",
    discord: "anush.exe",
    avatar: "https://cdn.discordapp.com/avatars/957187473342070804/716d438b1118f97c1c4968616832a968.png?size=4096",
    borderColor: "border-primary"
  },
  {
    id: 5,
    name: "Madara",
    role: "Head Admin",
    description: "Oversees overall operations and team management.Ensures smooth coordination and effective leadership across all departments.",
    discord: "mahathir0712",
    avatar: "https://cdn.discordapp.com/avatars/757544009403990037/a_849583222096e7ee6ae5d819cdb5f726.gif?size=4096",
    borderColor: "border-accent"
  },
  {
    id: 6,
    name: "Zenoxsir",
    role: "Head Admin",
    description: "Leads the administrative team to maintain efficiency and order.Drives policy enforcement and supports cross-team collaboration.",
    discord: "z3n0xs1r",
    avatar: "https://cdn.discordapp.com/avatars/1241369897121091619/3a9d57d58e642016847e1930577b80ed.png?size=4096",
    borderColor: "border-[hsl(353,83%,69%)]"
  }
];
