import React from 'react';
import * as R from 'ramda';
import { Grid, Paper } from '@material-ui/core';
import { useStyles } from './LessonTapeStyle';

import TapeCard from './TapeCard';

interface Props {
  tape: number[];
}

const LessonTape: React.FC<Props> = (props: Props) => {
  const { tape } = props;
  const classes = useStyles();

  const toCard = (index: number) => (
    <Grid key={index} item>
      <TapeCard index={index}/>
    </Grid>
  );
  const indexes = R.times(R.identity, tape.length);
  const cards = R.map(toCard, indexes);

  return (
    <Paper className={classes.root}>
      <Grid className={classes.grid}>
        {cards}
      </Grid>
    </Paper>
  );
};

export default LessonTape;
