import React from 'react';
import * as R from 'ramda';
import { Button, Grid, Paper } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import PauseIcon from '@material-ui/icons/Pause';

import { InterpreterStatus } from 'store/interpreter/types';
import { useStyles } from './LessonActionsStyle';

interface Props {
  onChange(status: InterpreterStatus): void;
  onReset(): void;
  status: InterpreterStatus;
}

const ActionsView: React.FC<Props> = (props: Props) => {
  const { onReset, onChange, status } = props;
  const classes = useStyles();

  const interpreterIdle = R.equals(status, InterpreterStatus.IDLE);

  const StartButton = () => {
    const handleClick = () => (
      onChange(InterpreterStatus.ACTIVE)
    );

    return (
      <Button
        className={classes.startButton}
        onClick={handleClick}
        variant="contained"
      >
        start
      </Button>
    )
  };

  const PauseButton = () => {
    const handleClick = () => (
      onChange(InterpreterStatus.IDLE)
    );

    return (
      <Button
        className={classes.pauseButton}
        startIcon={<PauseIcon/>}
        onClick={handleClick}
        variant="contained"
      >
        pause
      </Button>
    )
  };

  const ResetButton = () => {
    const handleClick = () => onReset();

    return (
      <Button
        onClick={handleClick}
        variant="contained"
      >
        reset
      </Button>
    )
  };

  const mainButtons = (
    <Grid
      container
      spacing={2}
    >
      <Grid item>
        {interpreterIdle && <StartButton/>}
        {!interpreterIdle && <PauseButton/>}
      </Grid>
      <Grid item>
        <ResetButton/>
      </Grid>
    </Grid>
  );

  const settingsButton = (
    <Button
      variant="contained"
      color="primary"
      startIcon={<SettingsIcon/>}
    >
      settings
    </Button>
  );

  return (
    <Paper
      className={classes.root}
    >
      <Grid
        container
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          {mainButtons}
        </Grid>
        <Grid item>
          {settingsButton}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ActionsView;
