import React, { Component } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Hero from "parts/Hero";

export default class LandingPage extends Component {
  componentDidMount(){
    window.title = "BRIQueue | Beranda";
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero />
        <Footer />
      </>
    );
  }
}
