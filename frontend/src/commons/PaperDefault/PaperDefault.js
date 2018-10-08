import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper/Paper";

const style = theme => ({
  root: {
    margin: theme.spacing.unit * 4,
    padding: theme.spacing.unit * 4
  }
});

const PaperDefault = ({ classes, children }) => (
  <Paper className={classes.root}>
    {children}
  </Paper>
);

export default withStyles(style)(PaperDefault);