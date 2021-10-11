import React, { PropsWithChildren } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';
import AppConfig from '../config/AppConfig';

const AuthProvider = (props: PropsWithChildren<{}>) => {
  const history = useHistory()
  const onRedirectCallback = (AppState: any) =>{
    history.push(AppState?.returnTo || window.location.pathname)
  }
  return (
    <Auth0Provider domain={AppConfig.auth0Domain} clientId={AppConfig.auth0ClientId} redirectUrl={window.location.origin} onRedirectCallback={onRedirectCallback}>{props.children}</Auth0Provider>

  )

}
export default AuthProvider;
