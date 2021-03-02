//#region imports

import React, { Fragment } from "react";
import PodcastCard from "../PodcastCard";
import { useStyles } from "./styles";

//#endregion

export default function CardWrapper({ lista }) {
  const classes = useStyles();

  return (
    <Fragment>
      <ul className={classes.lista}>
        {lista &&
          lista.map((result) => {
            return (
              <div className={classes.items}>
                <PodcastCard data={result} />
              </div>
            );
          })}
      </ul>
    </Fragment>
  );
}
