import React from "react";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import BookingPage from "pages/BookingPage";
import DaftarBank from "pages/DaftarBank";
import LoginPage from "pages/LoginPage";
import DetailBank from "pages/DetailBank";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/booking-antrian" component={BookingPage}></Route>
        <Route path="/daftar-bank" component={DaftarBank}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/detail-bank" component={DetailBank}></Route>

      </Router>
    </div>
  );
}

export default App;
