import React, { ComponentType, PropsWithChildren} from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import { Route } from 'react-router-dom'
import Loading from '../components/common/Loading'


const ProtectedRoute = (props: PropsWithChildren<{ [key: string]: any}>) => {
  const { children, ...args} = props
  return (
    <Route component={withAuthenticationRequired(children as ComponentType, { onRedirecting: () => <Loading />})} {...args} />
  )}

export default ProtectedRoute
