import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography/Typography";
import PaperDefault from "../../commons/PaperDefault/PaperDefault";
import Button from "@material-ui/core/Button/Button";
import teal from "@material-ui/core/colors/teal";
import { fetchHeroesList } from "../../redux-flow/reducers/heroes/action-creators";

const styles = theme => ({
  button: {
    color: theme.palette.getContrastText(teal[900]),
    backgroundColor: teal[300],
    "&:hover": {
      backgroundColor: teal[700]
    }
  },
  groupButton: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto",
    marginTop: theme.spacing.unit * 4,
    width: "40%"
  }
});

const Home = ({ classes, fetchHeroes }) => (
  <PaperDefault className={classes.root}>
    <Typography component="h1" variant="display4" gutterBottom>
      Marvel Heroes
    </Typography>
    <Typography component="p" variant="display1" gutterBottom>
      A simple example application using React, Redux, React-Router and Material
      UI
    </Typography>
    <div className={classes.groupButton}>
      <Button variant="contained" color="primary" onClick={() => fetchHeroes()}>
        Fetch API Data
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        disabled
      >
        Coming Soon
      </Button>
    </div>
  </PaperDefault>
);

const mapDispatchToProps = dispatch => ({
  fetchHeroes: () => {
    dispatch(fetchHeroesList());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Home));
