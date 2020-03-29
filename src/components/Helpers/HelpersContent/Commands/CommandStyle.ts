import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    tableContainer: {
      width: '100%',
    },
    commandHeader: {
      width: '3rem',
    },
    code: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 32,
      height: 32,
      fontSize: 20,
      margin: 'auto',
      backgroundColor: theme.palette.grey[700],
      borderRadius: theme.shape.borderRadius,
    },
  })
);
