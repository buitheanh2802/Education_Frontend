import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import RootRouter from "./Routes";
import "./Assets/css/main.css";
import TagAPi from "./Apis/TagApi";

const App = () => {
  const [tags, setTag] = useState([]);
  // useEffect(() => {
  //   // fetch("https://devstar-mockapi.herokuapp.com/tags")
  //   //   .then((abc) => abc.json())
  //   //   .then((abc) => {
  //   //     console.log(abc);
  //   //   });
  //   // const fetchData = async () => {
  //   //   try {
  //   //     const { data: tags } = await TagAPi.getAll();
  //   //     setTag(tags);
  //   //   } catch (error) {
  //   //     console.log(error);
  //   //   }
  //   // };
  //   fetchData();
  //   console.log(tags)
  // }, []);

  return (
    <Provider store={Store}
    >
      <RootRouter />
    </Provider>
  );
};

export default App;
