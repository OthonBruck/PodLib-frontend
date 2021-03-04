import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Drawer from "./components/Drawer/index";

function App() {
  return (
    <BrowserRouter>
      <Drawer>
        <AppRoutes />
      </Drawer>
    </BrowserRouter>
  );
}

export default App;
