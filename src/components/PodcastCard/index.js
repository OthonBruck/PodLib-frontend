import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import { endpoints } from "../../services/endpoints";
import api from "../../services/api";

export default function PodcastCard() {
  // const [cast, setCast] = useState([]);

  // useEffect(() => {
  //   const fetchCast = async () => {
  //     const response = await api.get(endpoints.getAllPodcast);
  //     console.log(response);
  //   };
  //   fetchCast();
  // }, []);

  return (
    <div>
      <Fragment>
        <Card
          style={{ width: "300px", backgroundColor: "#282828", color: "white" }}
        >
          <CardContent>
            <Typography>PODCAST</Typography>
            <Grid item xs={12}>
              <Typography variant="h5" component="h2">
                titulo
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <h1>IMAGEM</h1>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" component="p">
                SEGUIDORES
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Fragment>
    </div>
  );
}
