import React from 'react';
import { useMediaQuery, Paper } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux'; // Asegúrate de importar useSelector

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  paper: {
    position: 'relative', // Necesario para que la posición absoluta funcione correctamente
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    boxShadow: '-2px 0px 16px rgba(0, 0, 0, 0.25)',
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 0, 0, 0),
    },
  },
  videoContainer: {
    position: 'absolute',
    width: '100%',
    height: '120%',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  form: {
    maxWidth: theme.spacing(52),
    padding: theme.spacing(5),
    width: '100%',
  },
}));

const LoginLayout = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();

  // Mueve el uso de useSelector dentro del componente funcional
  const servermedia = useSelector((state) => state.session.server.attributes?.servermedia);

  return (
    <main className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.videoContainer}>
          <video autoPlay loop muted className={classes.video}>
            <source src={`${servermedia}/fondogps.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <form className={classes.form}>
          {children}
        </form>
      </Paper>
    </main>
  );
};

export default LoginLayout;
