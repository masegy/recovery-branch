import React from "react";
import ImageDetail from "assets/images/image-beranda.png";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

export default function BankDetails() {
  return (
    <Fade bottom>
      <section className="bank-details container pt-4">
        <div className="align-items-center">
          <div className="d-flex justify-content-around">
            <div className="d-flex flex-column">
              <p>Bank Tujuan : Bank KCP Surabaya</p>
              <p>Alamat : Surabaya</p>
              <p>Antrian yang sedang dilayani : 23 (Pukul 19.30)</p>
              <div className="d-flex flex-row">
                <Link to="/daftar-bank" className="pr-5">
                  <Button className="btn px-4" hasShadow isSmall>
                    Kembali
                  </Button>
                </Link>
                <Link to="/booking-antrian">
                  <Button className="btn px-4" hasShadow isPrimary>
                    Booking Besok
                  </Button>
                </Link>
              </div>
            </div>
            <div style={{ width: 540, height: 410 }}>
              <img
                src={ImageDetail}
                alt="hero icon"
                className="img-fluid"
                style={{ margin: "-30px 0 0 -30px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
