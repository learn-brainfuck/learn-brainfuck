import React from 'react';
import { Paper } from '@material-ui/core';
import { useStyles } from './TapeCardStyle';

export interface Props {
  value: number;
  selected: boolean;
}

const TapeCard: React.FC<Props> = (props: Props) => {
  const { value } = props;
  const classes = useStyles(props);

  return (
    <Paper
      className={classes.root}
      variant="outlined"
      square
    >
      {value}
    </Paper>
  );
};

export default TapeCard;
