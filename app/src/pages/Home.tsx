import React from 'react';
import { makeStyles} from '@material-ui/core'

const Home = () => {
  const classes = useStyles()
  return (
      <div className={classes.root}>
      <div className={classes.welcomeMessage}>home</div>
      </div>

  )

}
const useStyles = makeStyles((theme)=>({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.background,

  },
  welcomeMessage: {
    fontSize: '15px',
    color: theme.font,

  }

}))
export default Home;
