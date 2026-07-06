import type { project } from "../lists/Projects";

export const projects: project[] = [
  {
    title: "#Include Marketplace",
    description:
      "A marketplace for students to buy or sell items within the UC Davis community.",
    techStack: ["Typescript", "Next.js", "MongoDB", "Cloudinary"],
    src: "Marketplace-Demo.mp4",
    link: "https://github.com/include-davis/marketplace",
  },
  {
    title: "Free Unity Hoverbike Controller demo",
    description: "Fun Controllable Bike Physics template using rigidbody.",
    techStack: ["C#"],
    src: "Hoverbike-Demo.mp4",
    link: "https://github.com/DrewCoding/Speeder-Driver-Controller",
  },
  {
    title: "Free Unity A* Pathfinding Demo",
    description:
      "Implements A* pathfinding to AI controllers, includes collision avoidance system.",
    techStack: ["C#"],
    src: "Astar-Demo.mp4",
    link: "https://github.com/DrewCoding/A-Star-Civilian-Handling",
  },
  {
    title: "Battlefront-style Flight Controller",
    description:
      "A battle flight system using Rigidbody physics to propel the ship or plane forward.",
    techStack: ["C#"],
    src: "Flight-Demo.mp4",
    link: "https://github.com/DrewCoding/Space-Ship-Controler",
  },
];
