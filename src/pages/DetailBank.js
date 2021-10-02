import React, { Component } from 'react'
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import BankDetails from 'parts/BankDetails';

export default class DetailBank extends Component {
    componentDidMount(){
        window.title = "BRIQueue | Daftar Bank";
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <BankDetails />
                <Footer />
            </>
        )
    }
}
