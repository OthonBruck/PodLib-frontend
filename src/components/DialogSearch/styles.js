import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  dialog: {
    "& div.MuiPaper-root.MuiDialog-paper.MuiDialog-paperScrollPaper": {
      background: "#121212",
    },
  },
}));
export default useStyles;
