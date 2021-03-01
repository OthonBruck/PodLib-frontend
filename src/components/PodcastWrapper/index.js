//#region imports

import React, { Fragment } from "react";
import PodcastCard from "../PodcastCard";
import { useStyles } from "./styles";

//#endregion

export default function CardWrapper({ lista }) {
  const classes = useStyles();

  const resto = lista && lista.length % 4;

  return (
    <Fragment>
      <ul className={classes.lista}>
        {lista &&
          lista.map((result) => {
            return (
              <div className={classes.items}>
                <PodcastCard />
              </div>
            );
          })}
      </ul>
    </Fragment>
  );
}
