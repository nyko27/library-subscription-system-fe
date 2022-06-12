import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import AddReader from "./pages/add_reader/AddReader";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorWindow from "./components/error_window/ErrorWindow";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exect path="/" element={<Home />} />
          <Route path="/add-reader" element={<AddReader />} />
          <Route path="/error" element={<ErrorWindow />} />

        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
