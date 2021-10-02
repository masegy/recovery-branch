import React from "react";
import ImageHero from "assets/images/image-beranda.png";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

export default function Hero(props) {
  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Hemat Waktumu,
              <br />
              Booking Antrian Sekarang
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              Ayo, Dapatkan kemudahan memperoleh pelayanan dengan melakukan
              booking nomor antrian melalui aplikasi minimal H-1.
            </p>
            <Link to="/booking-antrian">
              <Button className="btn px-5" hasShadow isPrimary>
                Booking Antrian
              </Button>
            </Link>
          </div>
          <div className="col-6 pl-5">
            <div style={{ width: 540, height: 410 }}>
              <img
                src={ImageHero}
                alt="hero icon"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px"}}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
