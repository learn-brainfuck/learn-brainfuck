import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme ) =>
  createStyles({
    title: {
      padding: theme.spacing(3),
    },
    lessons: {
      padding: theme.spacing(3),
    }
  })
);
