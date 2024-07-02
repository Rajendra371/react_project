import './App.css';
import MyRoute from './MyRoute';
import cartReducer from './redux/reducers/cartReducer';
import {legacy_createStore} from 'redux' // it helps to know compiler that any reducer is our store
import { Provider } from 'react-redux'; // to provide data from reducer to components
import { createReducer } from 'react-dom/test-utils';
import store from './store';

function App() {
  // const store = legacy_createStore(cartReducer)
  return (
    <div className="App">
      <>
      <Provider store={store}>
      <MyRoute/>

      </Provider>
      

      
       </>
    </div>
  );
}

export default App;
