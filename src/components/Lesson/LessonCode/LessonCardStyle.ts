import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme ) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      background: '#212121',
      fontSize: '1rem',
    },
  })
);
