import React from 'react'
import { Button} from 'antd';
import ImgNoBooking from '../../assets/images-ui-navbar/no-booking.jpg'
import "./beranda.scss"

const Beranda = () => {
    return (
        <div>
            <img className="img-beranda" src={ImgNoBooking} alt="image"/>
            <h3 className="text-1">Anda tidak memiliki booking antrian</h3>
            <p className="text-2">Dapatkan kemudahan memperoleh pelayanan dengan melakukan booking nomor antrian melalui aplikasi minimal H-1</p>
            <Button className="btn-1"  shape="round">Booking Nomor Antrian</Button>
        </div>
    )
}

export default Beranda
