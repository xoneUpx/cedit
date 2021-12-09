import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { makeStyles, Button  } from '@material-ui/core'
import { Common } from '../theme/colors'

const SignIn = () => {
  const { loginWithRedirect } = useAuth0()
  const classes = useStyles()
  const onLogin = () => {
      loginWithRedirect()

  }
  return (
<Button className={classes.button} onClick={onLogin}>SingIn</Button>
)}
const useStyles = makeStyles(()=>({
    button: {
        color: Common.white,

    }}))

export default SignIn
