import ROUTES_NAME from "./routes-name";
import HomeIcon from "@material-ui/icons/Home";
import StarIcon from "@material-ui/icons/Star";

const MENU = [
  {
    path: ROUTES_NAME.HOME,
    icon: <HomeIcon style={{ color: "white" }} />,
    title: "Home",
  },
  {
    path: ROUTES_NAME.FAVORITOS,
    icon: <StarIcon style={{ color: "white" }} />,
    title: "Favoritos",
  },
];

export default MENU;
