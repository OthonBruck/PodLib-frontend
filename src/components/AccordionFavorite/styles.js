import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  divBotoes: {
    width: "25%",
    paddingRight: 10,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  divAco: {
    width: "75%",
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  box: {
    border: "2px solid white",
    width: "100%",
    marginTop: 4,
  },
}));
export default useStyles;
