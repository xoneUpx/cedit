import React from 'react';
import { NameType } from './types/types';
import Routes from './routes/Routes'

const App = ( {name}: NameType ) => {
  return (
    <Routes />
  );
}
//const App2: React.FC<ChildProps> = ({name}) => {
//return (<div>{name}</div> )
//}
export default App;
