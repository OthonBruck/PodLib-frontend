//#region imports

import React, { Fragment } from "react";
import PodcastCard from "../PodcastCard";
import { useStyles } from "./styles";

//#endregion

export default function PodcastWrapper({ lista }) {
  const classes = useStyles();

  return (
    <ul className={classes.lista}>
      {lista &&
        lista.map((result, index) => {
          return (
            <div className={classes.items} key={index}>
              <PodcastCard data={result} />
            </div>
          );
        })}
    </ul>
  );
}
