import React from 'react';
import './detailBank.scss';

const DetailBank = () => {
    return (
        <div style={{paddingTop: 48}}>
            <h1 className="detail-title">Info Antrian Hari Ini</h1>
            <h1 className="detail-title">Kamis, 8 Juni 2021</h1>

            <div className="detail-content">
                <div className="bank-info">
                    <div className="bank-wrapper">
                        <h3 className="bank-title">Bank :</h3>
                        <p className="bank-name">Bank KCP Soreang</p>
                    </div>
                    <div className="bank-wrapper">
                        <h3 className="bank-title">Alamat :</h3>
                        <p className="bank-name">Jl Soreang No 18 Bandung</p>
                    </div>
                </div>
                <div className="queue-wrapper">
                    <div className="queue-content">
                        <p className="number-info">Nomor Antrian</p>
                        <p className="number">23</p>
                        <p className="number-info">pukul</p>
                        <p className="number-info">09.30 WIB</p>
                    </div>
                </div>
            </div>
            <div className="button-wrapper">
                <button className="outlined-btn">Kembali</button>
                <button className="full-btn">Booking Untuk Besok</button>
            </div>
            <p className="text-warning">*Kuota Besok Penuh</p>
        </div>
    )
}

export default DetailBank