import React from 'react';
import { Form, Button, Select } from 'antd';
// import DashboardLayout from '../../component/DashboardLayout';
// import { from, Button, Select } from 'webpack-sources/lib/CompatSource';
// import 'frontend-b-queue-management\src\pages\BookAntrian\bookAntrian.scss';
import './bookAntrian.scss';

/* const BookAntrian = () => {
    return (
        <DashboardLayout>
            <div className="contentBook">
                <h1 style="text-align: center; margin-bottom: 50px;">Book Nomor Antrian</h1>
                <div className="container">
                    <p>Book antrian untuk besok (Jum'at, 9 Juni 2021)</p>
                    <Form>
                        <div className="bankTujuan">
                            <p>Bank Tujuan &emsp;&emsp;&emsp;&emsp;:
                            
                            <select
                                name="pilihbank"
                                id="pilihbanktujuan"
                                className="form-control" 
                                style="width: 22vw; height: 25px; border: none ;"
                            >   
                                <option value=" " disabled selected style="color: gray;">
                                -Ketik atau Pilih Unit Kerja/Kantor Cabang-</option>
                                <option value='Bank-KCP-Soreang'>Bank KCP Soreang</option>
                                <option value='Bank-KCP-Banjaran'>Bank KCP Banjaran</option>
                            </select>
                            </p>
                        </div>

                        <div className="keperluan">
                            <p>Keperluan Layanan &emsp;:

                            <select
                                name="keperluan"
                                id="keperluanlayanan"
                                className="form-control" 
                                style="width: 22vw; height: 25px; border: none ;"
                            >
                                <option value=" " disabled selected style="color: gray;">-Pilih Layanan-</option>
                                <option value='CS'>Pendaftaran (dilayani oleh Customer Services)</option>
                                <option value='Teller'>Transaksi (dilayani oleh Teller)</option>
                                <option value="Kredit">Pinjaman (dilayani oleh Petugas Kredit)</option>
                            </select>
                            </p>
                        </div>
                        <Button type="primary">Dapatkan Nomor Antrian</Button>

                    </Form>
                </div>
            </div>

        </DashboardLayout>
    )
}

export default BookAntrian */

const BookAntrian = () => {
    return (
        <div className="contentBook">
            <h1 style={{textAlign: 'center'}}>Book Nomor Antrian</h1>
            <p style={{textAlign: 'center'}}>Book antrian untuk besok (Jum'at, 9 Juli 2021)</p>
            <Form>
                <Form.Item label="Bank Tujuan">
                    <Select
                        showSearch
                        placeholder="Ketik / Pilih Unit Kerja Cabang"
                    >
                        <Select.Option>Bank KCP Soerang</Select.Option>
                        <Select.Option>Bank KCP Banjaran</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Keperluan Layanan">
                    <Select
                        placeholder="Pilih Layanan"
                    >
                        <Select.Option>Pendaftaran (dilayani oleh Customer Services)</Select.Option>
                        <Select.Option>Transaksi (dilayani oleh Teller)</Select.Option>
                        <Select.Option>Pinjaman (dilayani oleh Petugas Kredit)</Select.Option>
                    </Select>
                </Form.Item>
                <Button type="primary">dapatkan nomor antrian</Button>
            </Form>
        </div>
    )
}

export default BookAntrian