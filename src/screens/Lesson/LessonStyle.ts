import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    inner: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  })
);
