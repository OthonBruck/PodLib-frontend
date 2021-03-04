import React, { useCallback, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import Pesquisa from "../Pesquisa";
import api from "../../services/api";
import { endpoints } from "../../services/endpoints";
import PodcastWrapper from "../../components/PodcastWrapper/index";
import useStyles from "./styles";

export default function DialogSearch() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [cast, setCast] = useState([]);

  // const fetchCast = useCallback(async () => {
  //   const response = await api.get(endpoints.buscarPodcast("search=nerd"));
  //   setCast(response.data);
  // }, []);

  // useEffect(() => {
  //   fetchCast();
  // }, [fetchCast]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AddIcon fontSize="large" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"xl"}
        className={classes.dialog}
      >
        <DialogTitle style={{ color: "white" }}>Pesquisar Podcast</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <PodcastWrapper lista={cast} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            style={{
              color: "black",
              background: "aliceblue",
              fontSize: 14,
              fontWeight: "bold",
              border: "1px black solid",
              "&:hover": {
                background: "grey",
              },
            }}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
