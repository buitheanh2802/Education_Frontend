import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import RootRouter from './Routes';
import "./Assets/css/main.css";

const App = () => {

  return (
    <>
      <Provider store={Store}>
        <RootRouter />
      </Provider>
    </>
  )
};

export default App;
