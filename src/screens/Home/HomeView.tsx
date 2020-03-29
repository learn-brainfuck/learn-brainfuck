import React from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useStyles } from './HomeStyle';

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Container
      className={classes.root}
      maxWidth="lg"
    >
      <Grid
        className={classes.inner}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid
          container
          direction="column"
          alignItems="center"
        >
          <Typography
            className={classes.header}
            variant="h3"
            component="h1"
            align="center"
          >
            Train your brain with Brainfuck
          </Typography>
          <Link
            className={classes.link}
            to="/levels"
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
            >
              Start learning
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
