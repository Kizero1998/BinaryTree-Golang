import React from 'react'
import {Provider} from 'react-redux'


import store from './redux/store.js'
import CakeContainer from './component/CakeContainer'
import './App.css';
import HooksCakeContainer from './Component/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
     <div className='App'>
     <HooksCakeContainer/>
     <CakeContainer/>
     </div>
    </Provider>

  );
}

export default App;
