import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { Fragment } from "react";
import { FormProvider, useForm } from "react-hook-form";
import schema from "./schema";
import useStyles from "./styles";

export const Pesquisa = () => {
  const onSubmit = async (dado) => {};

  const classes = useStyles();

  const methods = useForm({
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });

  const { handleSubmit, errors } = methods;

  return (
    <Fragment>
      <FormProvider {...methods}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container className={classes.Grid} spacing={3}>
            <Grid item xs={12} className={classes.gridItem}>
              <TextField
                size="medium"
                variant="standard"
                label="Pesquisar"
                type="text"
                value=""
                name="pesquisa"
                defaultValue=""
                className={classes.input}
              />
            </Grid>
            <Grid item xs={12} className={classes.gridItem}></Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Button variant="contained" color="primary">
                Pesquisar
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </Fragment>
  );
};

export default Pesquisa;
