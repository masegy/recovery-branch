import React, {useState} from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./components/Fontawsomeicons";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPages from "./pages/LoginRegister/LoginPages";
import RegisterPages from "./pages/LoginRegister/RegisterPages";
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
// import { UserContext, UserProvider } from "./context/UserContext";
import "./App.css";
import Beranda from "./pages/Beranda";
import DetailBank from "./pages/DetailBank";
import DaftarBank from "./pages/DaftarBank";
import BookAntrian from "./pages/BookAntrian";

function App() {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
          <Beranda logoutUser={logoutUser} />
          <Footer />
        </Route>
        <Route exact path="/detail-info-antrian">
          <Navbar logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
          <DetailBank logoutUser={logoutUser} />
          <Footer />
        </Route>
        <Route exact path="/daftar-bank">
          <Navbar logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
          <DaftarBank logoutUser={logoutUser} />
          <Footer />
        </Route>
        <Route exact path="/book-antrian">
          <Navbar logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
          <BookAntrian logoutUser={logoutUser} />
          <Footer />
        </Route>
        <Route path="/login">
          <LoginPages setLogoutUser={setLogoutUser} />
        </Route>
        <Route path="/register">
          <RegisterPages setLogoutUser={setLogoutUser} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
