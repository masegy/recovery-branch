import React, { Component } from 'react';
import BrandIcon from 'parts/IconText';
import Button from "elements/Button";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = { showNav: false };
        this.toggleNav = this.toggleNav.bind(this);
    }
    
    toggleNav() {
        this.setState({ 
            showNav: !this.state.showNav
        })
    }
    render(props) {
        const { showNav } = this.state
        // const getNavLinkClass = (path) => {
        //     return props.location.pathname === path ? " active" : "";
        //   };
        return (
            <header className="spacing-sm">
                <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <BrandIcon />
                    <button className="navbar-toggler" type="button" onClick={this.toggleNav}>
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={(showNav ? 'show' : '') + ' collapse navbar-collapse'}>
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item`}>
                        <Button className="nav-link" type="link" href="/">
                            Beranda
                        </Button>
                        </li>
                        <li className={`nav-item`}>
                        <Button className="nav-link" type="link" href="/book-nomor-antrian">
                            Book Nomor Antrian
                        </Button>
                        </li>
                        <li className={`nav-item`}>
                        <Button className="nav-link" type="link" href="daftar-bank">
                            Daftar Bank & Info Antrian
                        </Button>
                        </li>
                        <li className={`nav-item`}>
                        <Button className="btn ml-2"hasShadow isPrimary>Sign Out</Button>
                        </li>
                    </ul>
                    </div>
                </nav>
                </div>
            </header>
        )
    }
}
