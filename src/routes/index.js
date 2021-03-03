import ROUTES_NAME from "../utils/constants/routes-name";

const ROUTES = [
  {
    path: ROUTES_NAME.HOME,
    exact: true,
    component: require("../pages/Home").default,
  },
  {
    path: ROUTES_NAME.FAVORITOS,
    exact: true,
    component: require("../pages/Favoritos").default,
  },
];

export default ROUTES;
