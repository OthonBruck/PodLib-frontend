import ROUTES_NAME from "../utils/constants/routes-name";

const ROUTES = [
  {
    path: ROUTES_NAME.HOME,
    exact: true,
    component: require("../pages/Home").default,
  },
];

export default ROUTES;
