import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import RootRouter from './Routes';
import "./Assets/css/main.css";
import ProfileApi from './Apis/ProfileApi';

const App = () => {

  const [profiles, setProfile] = useState([]);
  useEffect(() => {
    const profiles = async () => {
      try {
        const { data: profiles } = await ProfileApi.getAll();
        console.log('profile', profiles)
        setProfile(profiles);
      } catch (error) {
        console.log("Failed to get data", error.response);
      }
    }
    profiles();
  }, []);

  return (
    <>
      <Provider store={Store}>
        <RootRouter profiles={profiles} />
      </Provider>
    </>
  );
};

export default App;