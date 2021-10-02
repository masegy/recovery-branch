import axios from "axios";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

export default function BookingDetail() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/data')
    .then(res =>{
      console.log(res)
      setData(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])
  
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="d-flex flex-column align-items-center text-center pb-5">
          <h2 className="h2">Daftar Bank</h2>
          <span className="text-gray-400">Daftar bank yang tersedia</span>
        </div>
        <form className="form-inline mb-3">
          <input
            className="form-control mr-sm-2"
            style={{ height: 48.5 }}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-sm-0" type="submit">
            Search
          </button>
        </form>
        <div className="d-flex flex-column align-items-center">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Bank</th>
                <th scope="col">Alamat</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={`${index}`}>
                    <th scope="row">{item.id_bank}</th>
                    <td>{item.nama_bank}</td>
                    <td>{item.alamat}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Fade>
    </section>
  );
}
