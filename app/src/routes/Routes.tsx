import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Switch, Route, Redirect } from 'react-router-dom'
import ProtectedRoute from '../auth/AuthProtectedRoute'
import routes from './routes'
import { useAuth0 } from '@auth0/auth0-react'
import Loading from '../components/common/Loading'
import Header from '../components/common/Header'
import Home from '../pages/Home'

const Routes = () => {
  const classes = useStyles()
  const { isAuthenticated, isLoading } = useAuth0()
  if (isLoading) {
    return <Loading />
  }
  const CodeEditor = () =>{return (<div>Code Editor</div>)}
  return (
    <div className={classes.main}>
      <Header />
        <div className={classes.page}>
          <Switch>
            <ProtectedRoute path={routes.codeEditor} >{CodeEditor}</ProtectedRoute>
            <Route exact path={routes.home}>{isAuthenticated ? <Redirect to={routes.codeEditor} /> : <Home />}</Route>
          </Switch>
        </div>
    </div>
  )
}
const useStyles = makeStyles(() => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

  },
  page: {
    height: '100%',

  }
}))
export default Routes
