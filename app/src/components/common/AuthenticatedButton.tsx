import { makeStyles } from '@material-ui/core'
import React from 'react'
import SignOut from '../../auth/SignOut'
import OpenWorkspace from '../cedit/OpenWorkspace'

const AuthenticatedButton = () => {
  const classes = useStyles()
  return (
      <div className={classes.root}>
      <OpenWorkspace />
    <SignOut />
    </div>
  )
}
const useStyles = makeStyles(()=>({
  root: {
    display: 'flex',
  },
})
)

export default AuthenticatedButton
