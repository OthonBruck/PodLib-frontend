import React from "react";
import Drawer from "./components/Drawer/index";
import Pesquisa from "./components/Pesquisa";
import PodcastCard from "./components/PodcastCard/index";
import PodcastWrapper from "./components/PodcastWrapper/index";

function App() {
  return (
    <div className="App">
      <Drawer>
        <PodcastWrapper lista={null} />
      </Drawer>
    </div>
  );
}

export default App;
