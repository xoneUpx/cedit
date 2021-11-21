import React, { CompontentType, PropsWithChildren} from 'react'
import { WithAutenticationRequired } from '@auth0/auth0-react'
import { Route } from 'react-router-dom'
import Loading from '../components/common/Loading'

import React from 'react'

const ProtectedRoute = (props: PropsWithChildren<{ [key: string]: any}>) => {
  const { children, ...args} = props
  return (
    <Route component={WithAutenticationRequired(children as CompontentType, { onRedirecting: () => <Loading />} {...args})}>
  )
props: PropsWithChildren}

export default ProtectedRoute
