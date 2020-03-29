import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme ) =>
  createStyles({
    title: {
      padding: theme.spacing(3),
      paddingBottom: theme.spacing(0),
    },
    description: {
      padding: theme.spacing(3),
    }
  })
);
