import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const inputHandlerName = (name) => {
    return setName(name);
  };

  const inputHandlerPhone = (phone) => {
    return setPhone(phone);
  };

  const inputHandlerNote = (note) => {
    return setNote(note);
  };

  function saveContact() {
    axios({
      method: "POST",
      url: "http://localhost:3001/api/contacts",
      data: {
        fullname: name,
        phone: phone,
        note: note,
      },
    }).then((results) => {
      if (results.data.payload.affectedRows) {
        alert("data berhasil di tambahkan!!");
        window.location.href = "/list-contact";
      } else {
        alert("data gagal di tambahkan");
        window.location.reload();
      }
    });
  }

  return (
    <div>
      <NavigationBar />
      <div style={{ marginTop: 65 }}>
        <div className="container">
          <div className="row">
            <div className="col-sm m-10">
              <label htmlFor="fullname" className="required">
                Nama Lengkap
              </label>
              <input type="text" className="form-control" required="required" onChange={(e) => inputHandlerName(e.target.value)} />
            </div>
            <div className="col-sm m-10">
              <label htmlFor="phone" className="required">
                Nomor Telepon
              </label>
              <input type="number" className="form-control" onChange={(e) => inputHandlerPhone(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm m-10">
              <label htmlFor="fullname">Catatan</label>
              <textarea type="text" className="form-control" onChange={(e) => inputHandlerNote(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm m-10">
              <button className="btn btn-danger" type="button" onClick={() => saveContact()} style={{ cursor: "pointer" }}>
                Tambahkan Kontak
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
