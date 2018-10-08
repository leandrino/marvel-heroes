import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import PaperDefault from "../../commons/PaperDefault/PaperDefault";
import { fetchHeroesList } from "../../redux-flow/reducers/heroes/action-creators";
import GridList from "@material-ui/core/GridList/GridList";
import GridListTile from "@material-ui/core/GridListTile/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar/GridListTileBar";

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 4
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  },
  media: {
    height: 140
  },
  gridList: {
    width: "100%",
    height: "100%"
  }
});

class Heroes extends React.Component {
  componentDidMount() {
    return this.props.fetchHeroes();
  }

  handleChangePage = offset => {
    const limit = this.props.pagination.limit;
    this.props.fetchHeroes(limit, offset);
  };

  render() {
    const { classes, heroes } = this.props;
    return (
      <PaperDefault className={classes.root}>
        <div>
          <IconButton
            onClick={() => this.handleChangePage(0)}
            disabled={this.props.pagination.offset === 0}
            aria-label="First Page"
          >
            <FirstPageIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              this.handleChangePage(
                this.props.pagination.offset - this.props.pagination.limit
              )
            }
            disabled={this.props.pagination.offset === 0}
            aria-label="Previous Page"
          >
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            onClick={() =>
              this.handleChangePage(
                this.props.pagination.offset + this.props.pagination.limit
              )
            }
            disabled={
              this.props.pagination.offset === this.props.pagination.total - 1
            }
            aria-label="Next Page"
          >
            <KeyboardArrowRight />
          </IconButton>
          <IconButton
            onClick={() =>
              this.handleChangePage(this.props.pagination.total - 1)
            }
            disabled={
              this.props.pagination.offset === this.props.pagination.total - 1
            }
            aria-label="Last Page"
          >
            {" "}
            <LastPageIcon />
          </IconButton>
        </div>
        <GridList cellHeight={420} className={classes.gridList}>
          {heroes.map(hero => {
            return (
              <GridListTile key={hero.id}>
                <img
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                  alt={hero.name}
                />
                <GridListTileBar
                  title={hero.name}
                  subtitle={<span>{hero.description}</span>}
                />
              </GridListTile>
            );
          })}
        </GridList>
      </PaperDefault>
    );
  }
}

Heroes.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  heroes: state.heroes.list || [],
  pagination: state.heroes.pagination
});

const mapDispatchToProps = dispatch => ({
  fetchHeroes: (limit, offset) => {
    dispatch(fetchHeroesList(limit, offset));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Heroes));
