import dish1 from "../assets/dish1.jpeg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";
import dish4 from "../assets/dish4.jpeg";
import dish5 from "../assets/dish5.jpeg";
import dish6 from "../assets/dish6.jpeg";
import dish7 from "../assets/dish7.jpeg";
import dish8 from "../assets/dish8.jpeg";
import dish9 from "../assets/dish9.jpeg";
import dish10 from "../assets/dish10.jpeg";

import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Masala Maggi",
    description: "The ultimate hostel favorite – spicy, saucy, and comforting.",
  },
  {
    image: dish2,
    title: "Paneer Butter Masala with Naan",
    description: "Creamy paneer curry paired with soft, buttery naan.",
  },
  {
    image: dish3,
    title: "Chole Bhature",
    description: "Fluffy bhature served with spicy, tangy chole masala.",
  },
  {
    image: dish4,
    title: "Veg Momos",
    description: "Steamed dumplings packed with veggies, served with spicy chutney.",
  },
  {
    image: dish5,
    title: "Chicken Biryani",
    description: "Aromatic rice layered with tender chicken and spices.",
  },
  {
    image: dish6,
    title: "Pav Bhaji",
    description: "Buttery pav served with spicy mashed vegetable bhaji.",
  },
  {
    image: dish7,
    title: "Samosa Chaat",
    description: "Crispy samosas topped with chutneys, curd, and sev.",
  },
  {
    image: dish8,
    title: "Masala Dosa",
    description: "Crispy dosa filled with spiced potato masala, served with chutneys.",
  },
  {
    image: dish9,
    title: "Tandoori Chicken",
    description: "Smoky, juicy chicken roasted in classic tandoor style.",
  },
  {
    image: dish10,
    title: "Gulab Jamun",
    description: "Soft fried dumplings soaked in sweet sugar syrup.",
  },
];


export const ABOUT = {
  header: "We love serving Bennett!",
  content:
    "At Bennett Eats, we believe food is more than just a meal—it’s an experience that brings our campus community together. From late-night cravings to weekend hangouts, every dish is crafted with care to match the energy and spirit of student life. Whether you’re grabbing a quick bite between lectures or enjoying our signature specialties with friends, every flavor is a taste of home on campus. Join us in creating memories, one plate at a time—because at Bennett Eats, good food and good vibes are always on the menu.",
};


export const MISSION =
  "At our restaurant, our mission is to create delicious and memorable dining experiences.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italian",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japanese",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indian",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
];

export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};
export const CONTACT = [
  {
    key: "address",
    value: "Address: Bennett University, Plot No. 8-11, TechZone II, Greater Noida, Uttar Pradesh 201310",
  },
  { key: "phone", value: "Phone: +91 98765 43210" },
  { key: "email", value: "Email: contact@bennetteats.com" },
];


export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
