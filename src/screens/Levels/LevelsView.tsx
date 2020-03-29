import React from 'react';
import * as R from 'ramda';
import { Container, Grid } from '@material-ui/core';

import { Level } from 'types';
import levels from 'config/levels';
import LevelPaper from 'components/LevelPaper';
import { useStyles } from './LevelsStyle';

const Levels: React.FC = () => {
  const classes = useStyles();

  const toLevelPapers = (level: Level) => (
    <Grid item xs={12}>
      <LevelPaper level={level} />
    </Grid>
  );
  const levelsPapers = R.map(toLevelPapers, levels);

  return (
    <Container
      className={classes.root}
      maxWidth="lg"
    >
      <Grid
        className={classes.inner}
        spacing={3}
        container
      >
        {levelsPapers}
      </Grid>
    </Container>
  );
};

export default Levels;
