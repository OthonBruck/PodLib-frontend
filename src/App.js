import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Drawer from "./components/Drawer/index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Drawer>
          <AppRoutes />
        </Drawer>
      </BrowserRouter>
    </div>
  );
}

export default App;
