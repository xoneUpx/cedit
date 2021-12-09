import React from 'react'
import { Switch, Typography, Toolbar, AppBar, makeStyles } from '@material-ui/core'
import { useAppDispatch, useAppSelector} from '../../redux/store/hooks'
import {useAuth0 } from '@auth0/auth0-react'
import { toggleDarkMode} from '../../redux/reducers/dark-mode/reducer'
import Brightness2 from '@material-ui/icons/Brightness2'
import UnauthenticatedButton from './UnauthenticatedButton'
import AuthenticatedButton from './AuthenticatedButton'

const Header = () => {
  const { isAuthenticated} = useAuth0()
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector(state=>state.darkMode)
  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode({}))

  }
  const classes = useStyles()
  return (
    <AppBar position="relative">
      <Toolbar>
      <Typography variant="h6" className={classes.title}>
        Cedit
        </Typography>
        <Brightness2 />
        <Switch onChange={onChangeDarkMode} color="default" checked={darkMode} />
        {isAuthenticated ? <AuthenticatedButton /> : <UnauthenticatedButton />}
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles(()=>({
    title: {
        flex: 1,

    },

}))
export default Header
