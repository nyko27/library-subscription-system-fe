import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import AddReader from "./pages/add_reader/AddReader";
import AddBook from "./pages/add_book/AddBook";
import RentBook from "./pages/rent_book/RentBook";
import UserRents from "./pages/user_rents/UserRents";
import LibraryReport from "./pages/library_report/LibraryReport";
import ReturnBook from "./pages/return_book/ReturnBook";
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
          <Route path="/user-rents/" element={<UserRents />} />
          <Route path="/library-report" element={<LibraryReport />} />
          <Route path="/rent-return/:id" element={<ReturnBook />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;