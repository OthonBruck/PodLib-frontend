import React from "react";
import { Route, Switch } from "react-router-dom";
import ROUTES from "./routes";

const AppRoutes = () => {
  return (
    <Switch>
      {ROUTES.map((element) => (
        <Route
          key={element.path}
          path={element.path}
          exact={element.exact}
          component={element.component}
        />
      ))}
    </Switch>
  );
};

export default AppRoutes;
