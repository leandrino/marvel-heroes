import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getHeroDetails } from "../../../redux-flow/reducers/heroes/action-creators";
import PaperDefault from "../../../commons/PaperDefault/PaperDefault";
import Avatar from "@material-ui/core/Avatar/Avatar";
import FormHeroEdit from "../../../commons/FormHeroEdit/FormHeroEdit";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

const styles = {
  avatar: {
    width: 300,
    height: 300
  },
  wrapper: {
    alignItems: "flex-start",
    display: "flex",
    justifyContent: "space-between"
  },
  profile: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  form: {
    marginLeft: '70px'
  }
};

class Hero extends PureComponent {
  componentDidMount() {
    this.props.getHero(this.props.match.params.id);
  }
  render() {
    const { hero, classes } = this.props;
    const imagePath = hero.thumbnail && hero.thumbnail.path;
    const imageExtension = hero.thumbnail && hero.thumbnail.extension;
    return (
      <PaperDefault>
        <div className={classes.wrapper}>
          <div className={classes.profile}>
            <Avatar
              alt={hero.name}
              src={`${imagePath}.${imageExtension}`}
              className={classes.avatar}
            />
            <div className={classes.form}>
              <FormHeroEdit />
            </div>
          </div>
          <div>
            <List>
              {hero.series &&
                hero.series.items.map(item => (
                  <ListItem>
                    <ListItemText
                      primary={item.name}
                      secondary={item.resourceURI}
                    />
                  </ListItem>
                ))}
            </List>
          </div>
        </div>
      </PaperDefault>
    );
  }
}

const mapStateToProps = state => ({
  hero: state.heroes.hero
});

const mapDispatchToProps = dispatch => ({
  getHero: id => {
    dispatch(getHeroDetails(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Hero));
