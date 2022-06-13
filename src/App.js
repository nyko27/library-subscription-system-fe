import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import AddReader from "./pages/add_reader/AddReader";
import AddBook from "./pages/add_book/AddBook";
import RentBook from "./pages/rent_book/RentBook";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exect path="/" element={<Home />} />
          <Route path="/add-reader/" element={<AddReader />} />
          <Route path="/add-book/" element={<AddBook />} />
          <Route path="/rent-book/:id/" element={<RentBook />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
