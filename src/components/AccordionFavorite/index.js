import React, { useCallback, useEffect, useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./styles";
import api from "../../services/api";
import { endpoints } from "../../services/endpoints";
import { Box, Divider, Grid } from "@material-ui/core";
import { AddBoxRounded, Delete } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default function AccordionFavorite() {
  const classes = useStyles();
  const [state, setstate] = useState([]);

  const fetchCast = useCallback(async () => {
    const response = await api.get(endpoints.getAllPodcast);
    setstate(response.data);
  }, []);

  useEffect(() => {
    fetchCast();
  }, [fetchCast]);

  return (
    <div className={classes.root}>
      {state &&
        state.map((result) => {
          return (
            <Accordion
              style={{ color: "aliceblue", backgroundColor: "#282828" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "aliceblue" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className={classes.divAco}>
                  <Typography className={classes.heading}>
                    {result.title}
                  </Typography>
                </div>
                <div className={classes.divBotoes}>
                  <DeleteForeverIcon onClick={() => console.log("oi")} />
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Box style={{ width: "100%" }}>
                  <Typography>{result.description}</Typography>
                  {result.episodes.map((info) => (
                    <Box className={classes.box}>
                      <Box style={{ margin: 3 }}>
                        <Typography>
                          {info.title}, {info.date}
                        </Typography>
                        <Rating style={{ color: "red" }} />
                      </Box>
                    </Box>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
}
