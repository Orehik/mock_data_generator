import React from "react";
import { makeStyles } from "@material-ui/styles";
import { CircularProgress } from "@mui/material";

import { colorTable } from "../../constants";

const useStyle = makeStyles<unknown, { color: colorTable }>({
  loaderPage: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  colorPrimary: ({ color }) => ({
    "& .MuiCircularProgress-circle": {
      stroke: color,
    },
  }),
});

export const Loader = ({ size = 42, color = "#222222" }: any) => {
  const classes = useStyle({ color });

  return <CircularProgress size={size} className={classes.colorPrimary} />;
};
