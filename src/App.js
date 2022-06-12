import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exect path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
