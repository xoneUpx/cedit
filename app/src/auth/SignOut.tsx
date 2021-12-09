
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { makeStyles, Button  } from '@material-ui/core'
import { Common } from '../theme/colors'

const SignOut = () => {
  const { logout } = useAuth0()
  const classes = useStyles()
  const onLogout = () => {
      logout({
        returnTo: window.location.origin

      })

  }
  return (
<Button className={classes.button} onClick={onLogout}>SignOut</Button>
)}
const useStyles = makeStyles(()=>({
    button: {
        color: Common.white,

    }}))

export default SignOut
