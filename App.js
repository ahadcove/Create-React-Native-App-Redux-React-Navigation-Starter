import React from 'react';
import Root from './src';
import {Provider} from 'react-redux'
import store from './src/Services/store';

export default App = () =>{
  return (
    <Provider store={store}>    
      <Root />
    </Provider>
  )
}
