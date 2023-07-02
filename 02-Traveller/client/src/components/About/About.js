import React from "react";

import {
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  Divider,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import useStyles from "./styles";

import travellerman from "../../images/travellerman.svg";
import traveller2 from "../../images/TRAVELLER.png";

import DescriptionIcon from "@material-ui/icons/Description";
import ShareIcon from "@material-ui/icons/Share";
import SearchIcon from "@material-ui/icons/Search";
import CommentIcon from "@material-ui/icons/Comment";

const About = () => {
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Paper elevation={4} className={classes.paper}>
        <Typography variant="h4" className={classes.title}>
          About <img src={traveller2} alt="t2" />
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <img
              src={travellerman}
              alt="travellerman"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} md={8} style={{ marginTop: "20px" }}>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              Best Destinations in the world!
            </Typography>
            <Typography className={classes.title}>
              The world isn't in your books and maps, it's out there !
            </Typography>
            <Typography variant="body1" className={classes.description}>
              Traveller aims to provide users, as the name suggests, it is an
              album of memories or activities where people from all around the
              world can add the most notable places they visited or the wildest
              things they’ve done.
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography className={classes.title}>
              We Offer Best Services
            </Typography>
            <Container
              className={classes.container}
              style={{
                display: "flex",
                textAlign: "center",
              }}
            >
              <Paper style={{ flex: 1, marginInline: "5px" }}>
                <ShareIcon style={{ marginTop: "10px" }} fontSize="large" />{" "}
                <br />
                Share a post,
                <br />
                leave a like
              </Paper>
              <Paper style={{ flex: 1, marginInline: "5px" }}>
                <SearchIcon style={{ marginTop: "10px" }} fontSize="large" />
                <br />
                Search a place that you want to visit
              </Paper>
              <Paper style={{ flex: 1, marginInline: "5px" }}>
                <DescriptionIcon
                  style={{ marginTop: "10px" }}
                  fontSize="large"
                />
                <br />
                Visit a specific page about a place
              </Paper>
              <Paper style={{ flex: 1, marginInline: "5px" }}>
                <CommentIcon style={{ marginTop: "10px" }} fontSize="large" />
                <br />
                You can make comments on post
              </Paper>
            </Container>
            <Container className={classes.container}>
              <Paper
                style={{ backgroundColor: "#7A95BD", textAlign: "center" }}
              >
                <Typography
                  style={{ color: "3061AA", textAlign: "center" }}
                  className={classes.description}
                >
                  {user
                    ? "Enjoy the app by sharing a post and interacting with others!"
                    : "Sign In to like a post , make a comment and share a post !!!"}
                </Typography>
                <Divider />

                {!user && (
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    component={Link}
                    to="/auth"
                  >
                    Sign In !
                  </Button>
                )}
              </Paper>
            </Container>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default About;
