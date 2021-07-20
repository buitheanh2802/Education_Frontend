import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import RootRouter from './routes';
import "./assets/css/main.css";

const App = () => {
  return (
    <Provider store={store}>
        <RootRouter />
    </Provider>
  );
};

export default App;