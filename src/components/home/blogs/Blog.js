import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
// import { loream } from "../../../json";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: "100%",
    borderRadius: "10px",
  },
  media: {
    height: 400,
  },
  cardaction: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  author: {
    display: "flex",
  },
  totalLikes: {
    display: "flex",
  },
  like: {
    marginRight: "5px",
  },
});
function Blog({ image }) {
  const blogImage = image
    ? image
    : "https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png";
  const today = new Date();
  const date =
    parseInt(today.getMonth() + 1) +
    "-" +
    today.getDate() +
    "-" +
    today.getFullYear();
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12} md={12} lg={6} spacing={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={blogImage}
            title="React logo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              React useContext
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              {truncate("", 400)}
            </Typography>
            <Button variant="outlined" color="primary">
              Read More
            </Button>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardaction}>
          <Box className={classes.author}>
            <Avatar src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/86257998_2014992985312926_4094412634177142784_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=W0G0r12feyUAX-dnIkS&_nc_ht=scontent-dfw5-2.xx&oh=57e772185d0a4f45cbc027dbfb2f338b&oe=609350FE" />
            <Box ml={2}>
              <Typography variant="subtitle1" component="p">
                {"Nabin Singh"}
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                color="textSecondary"
              >
                {date}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.totalLikes}>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.like}
            >
              {300}
            </Typography>
            <ThumbUpIcon />
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Blog;
