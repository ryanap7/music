import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./App";
import AboutUs from "./AboutUs/MainAbout";
import Favorite from "./Favorite";
import Album from "./Album";
import Artist from "./Artist";
import { persistor, store } from "./Redux";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/album/:id" element={<Album />} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
