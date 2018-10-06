import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = {
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 999
  },
  colorPrimary: {
    backgroundColor: "#F0141E"
  },
  barColorPrimary: {
    backgroundColor: "#FFFFFF"
  }
};

function LinearProgressCustom(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress
        classes={{
          colorPrimary: classes.colorPrimary,
          barColorPrimary: classes.barColorPrimary
        }}
      />
    </div>
  );
}

LinearProgressCustom.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LinearProgressCustom);
