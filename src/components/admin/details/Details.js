import { Box, Card, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  card: {
    height: "150px",
    color: "#fff",
    borderRadius: "10px",
  },
  box: {
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: { fontSize: "60px", margin: "10px" },
  numbers: {
    fontSize: "60px",
    fontWeight: "400",
    textAlign: "center",
  },
  total: {
    fontSize: "20px",
  },
});

function Details({ Icon, text, numbers, backColor }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} spacing={4}>
      <Card
        style={{
          backgroundColor: backColor,
        }}
        className={classes.card}
      >
        <Box className={classes.box}>
          <Icon className={classes.icon} />
          <div className={classes.details}>
            <div className={classes.numbers}> {numbers}</div>
            <div className={classes.total}>{text}</div>
          </div>
        </Box>
      </Card>
    </Grid>
  );
}

export default Details;
