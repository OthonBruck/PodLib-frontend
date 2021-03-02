import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";

export default function PodcastCard({ data }) {
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
                {data.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <img src={data.img}></img>
            </Grid>
          </CardContent>
        </Card>
      </Fragment>
    </div>
  );
}
