import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import "../App.css";

class Footer extends Component {
  render() {
    const { classes } = this.props;
    const currentYear = new Date().getFullYear();
    return (
      <div className={classes.root}>
        <Grid className={classes.footerText} container spacing={0}>
          <Grid item xs={12} sm={4}>
            <div className={classes.white}>
              <ul style={{ listStyle: "none", margin: 0 }}>
                <li>
                  <span
                    style={{
                      fontSize: "25px",
                      color: "#CCFFCC",
                      fontWeight: "bolder"
                    }}
                  >
                    Details:
                  </span>
                </li>
                <li>
                  A pizza store web application built using React and
                  Material UI.
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container>
              <Grid
                className={classes.flexContainer}
                style={{ justifyContent: "center" }}
                item
                xs={12}
              ></Grid>
              <Grid
                className={classes.flexContainer}
                style={{ justifyContent: "flex-end" }}
                item
                xs={6}
              ></Grid>
              <Grid className={classes.flexContainer} item xs={6}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ul style={{ listStyle: "none", margin: 0 }}>
              <li>
                <span
                  style={{
                    fontSize: "25px",
                    color: "#CCFFCC",
                    fontWeight: "bolder"
                  }}
                >
                  Info:
                </span>
              </li>
              <li>+1 773-812-6322</li>
              <li>
                <a
                  style={{ color: "white" }}
                  href="mailto:johncervantes@protonmail.com"
                  target="_blank"
                >
                  johncervantes@protonmail.com
                </a>
              </li>
              <li>
                <a
                  style={{ color: "white" }}
                  href="https://www.linkedin.com/in/j-cervantes/"
                  target="_blank"
                >
                  https://www.linkedin.com/in/j-cervantes/
                </a>
              </li>
              <li></li>
            </ul>
          </Grid>
        </Grid>
        <Grid className={classes.subFooter} item xs={12}>
          <Typography
            className={classes.white}
            variant="subheading"
            component={"span"}
          >
            © {currentYear} Bad Seal Studios
          </Typography>
        </Grid>
      </div>
    );
  }
}

const styles = () => ({
  root: {
    marginTop: 30,
    backgroundColor: "#0099CC",
    borderTop: "solid 3px #998643",
    paddingTop: "16px",
    overflowX: "hidden"
  },
  footerSections: {
    margin: "0 16px"
  },
  subFooter: {
    backgroundColor: "#66CCFF",
    padding: "8px 16px 8px 16px",
    marginTop: "50px"
  },
  footerText: {
    color: "#fff",
    fontSize: "20px",
    lineHeight: 1.5
  },
  invertedBtnDark: {
    color: "#fff",
    backgroundColor: "transparent",
    border: "2px #fff solid",
    boxShadow: "none",
    margin: "8px"
  },
  white: {
    color: "#ffffff"
  },
  flexContainer: {
    display: "flex"
  }
});

export default withStyles(styles)(Footer);
