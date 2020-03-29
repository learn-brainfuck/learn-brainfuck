import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme ) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    field: {
      width: '100%',
      margin: 0,
    }
  })
);
