import React, { Component } from 'react'
import Header from 'parts/Header';
import BookingDetail from 'parts/BookingDetail';
import Footer from 'parts/Footer';

export default class BookingPage extends Component {
    componentDidMount(){
        window.title = "BRIQueue | Booking Antrian";
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <BookingDetail />
                <Footer />
            </>
        )
    }
}

