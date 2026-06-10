import RadiatorSpringSpeedway from "../assets/RadiatorSpringSpeedway.png";
import ThunderHollow from "../assets/ThunderHollow.png";
import FloridaInternationalSpeedway from "../assets/FloridaInternationalSpeedway.png";
import PortoCorsa from "../assets/PortoCorsa.png";
import WillyBute from "../assets/WillyBute.png";
import TailfinPass from "../assets/TailfinPass.png";
import NeonDessert from "../assets/NeonDessert.png";
import TokyoDrift from "../assets/TokyoDrift.png";
export const MockTracks: {
  title: string;
  url: string;
  image: string;
  length: number;
  surface: string;
  difficulty: string;
}[] = [
  {
    title: "Radiator Springs Speedway",
    url: "/tracks/radiator-springs-speedway",
    image: RadiatorSpringSpeedway,
    length: 4.2,
    surface: "Asphalt/Dirt",
    difficulty: "Hard",
  },
  {
    title: "Thunder Hollow Derby",
    url: "/tracks/thunder-hollow-derby",
    image: ThunderHollow,
    length: 3.1,
    surface: "Mud",
    difficulty: "Medium",
  },
  {
    title: "Florida International Speedway",
    url: "/tracks/florida-international-speedway",
    image: FloridaInternationalSpeedway,
    length: 5.7,
    surface: "Asphalt",
    difficulty: "Hard",
  },
  {
    title: "Willy's Butte Rally",
    url: "/tracks/willys-butte-rally",
    image: WillyBute,
    length: 6.3,
    surface: "Sandstone",
    difficulty: "Extreme",
  },
  {
    title: "Tokyo Drift Circuit",
    url: "/tracks/tokyo-drift-circuit",
    image: TokyoDrift,
    length: 4.8,
    surface: "Asphalt",
    difficulty: "Medium",
  },
  {
    title: "Porto Corsa Grand Prix",
    url: "/tracks/porto-corsa-grand-prix",
    image: PortoCorsa,
    length: 5.1,
    surface: "Cobblestone",
    difficulty: "Hard",
  },
  {
    title: "Tailfin Pass",
    url: "/tracks/tailfin-pass",
    image: TailfinPass,
    length: 7.4,
    surface: "Mountain Gravel",
    difficulty: "Extreme",
  },
  {
    title: "Neon Desert Run",
    url: "/tracks/neon-desert-run",
    image: NeonDessert,
    length: 4.9,
    surface: "Desert Sand",
    difficulty: "Medium",
  },
];
