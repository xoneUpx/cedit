import React from 'react';
import { NameType } from './types/types';
const App = ( {name}: NameType ) => {
  return (
    <div>
          Learn React {name}
          </div>
  );
}
//const App2: React.FC<ChildProps> = ({name}) => {
//return (<div>{name}</div> )
//}
export default App;
