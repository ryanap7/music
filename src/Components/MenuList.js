import { BsFillHouseFill } from "react-icons/bs";
import { FaPodcast } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const MenuList = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Home",
    route: "/"
  },
  {
    id: 2,
    icon: <FaPodcast />,
    name: "About Us",
    route: "/about-us"
  },
  {
    id: 3,
    icon: <MdFavoriteBorder />,
    name: "Favorite",
    route: "/favorite"
  }
];

export { MenuList };
