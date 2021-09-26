import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Button } from "antd";
import "./navbar.scss";
import ImgBRI from "../../assets/images-ui-navbar/logo-long-bri.png";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar = ({ logoutUser, setLogoutUser }) => {
  const [login, setLogin] = useState("");

  useEffect(() => {
    hydrateStateWithLocalStorage();
  }, [logoutUser]);

  const logout = () => {
    localStorage.removeItem("login");
    setLogoutUser(true);
  };

  const hydrateStateWithLocalStorage = () => {
    if (localStorage.hasOwnProperty("login")) {
      let value = localStorage.getItem("login");
      try {
        value = JSON.parse(value);
        setLogin(value);
      } catch (e) {
        setLogin("");
      }
    }
  };

  return (
    <div>
      <Layout className="layout">
        <Header className="header">
          <img clasName="logo" src={ImgBRI} alt="logo bri" />
          <div className="menu-right">
            <Menu
              className="menu"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
            >
              <Menu.Item className="menu">
                <Link style={{ color: "#fff" }} to="/">
                  Beranda
                </Link>
              </Menu.Item>
              <Menu.Item className="menu">
                <Link to="/book-antrian" style={{ color: "#fff" }}>
                  Book Nomor Antrian
                </Link>
              </Menu.Item>
              <Menu.Item className="menu">
                <Link to="/daftar-bank" style={{ color: "#fff" }}>
                  DaftarBank & Info Antrian
                </Link>
              </Menu.Item>
            </Menu>
            <div>
              {!logoutUser && login && login.userLogin ? (
                <Button className="btn-out" shape="round" onClick={logout}>
                  Sign out
                </Button>
              ) : (
                <Link to="/login">
                  <Button className="btn-out" shape="round" onClick={logout}>
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </Header>
      </Layout>
    </div>
  );
};

export default Navbar;
