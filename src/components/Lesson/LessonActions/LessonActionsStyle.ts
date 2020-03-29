import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme: Theme ) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    startButton: {
      background: green[600],
      color: theme.palette.common.white,
      '&:hover': {
        background: green[700],
      }
    },
    pauseButton: {
      background: grey[600],
      color: theme.palette.common.white,
      '&:hover': {
        background: grey[700],
      }
    },
    cellsInput: {
      width: 96,
      textAlign: 'center',
    }
  })
);
