import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme ) =>
  createStyles({
    root: (props: any) => ({
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 48,
      height: 48,
      background: props.selected ? theme.palette.grey[900] : 'transparent',
      transition: theme.transitions.create('background'),
      /*'&::after': {
        content: `'${String.fromCharCode(props.value)}'`,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0,
        color: 'white',
        background: theme.palette.grey[600],
        fontWeight: 600,
        fontSize: '1.5rem',
        opacity: 0,
        transition: theme.transitions.create(''),
      },
      '&:hover::after': {
        opacity: 1,
      }*/
    }),
  })
);
