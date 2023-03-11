import React, { useState } from "react";

import "./Forms.css";
// import ImageUpload from "../imageUpload/ImageUpload";
import QRCode from "../qrcode/QRCode";
import DownloadQRCode from "../download/DownloadQRCode";

function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeData, setQRCodeData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled in
    if (!name || !email || !phone) {
      alert("Please fill in all required fields");
      return;
    }

    const data = {
      name,
      email,
      phone,
      message,
    };

    setQRCodeData(JSON.stringify(data));
    setShowQRCode(true);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* <ImageUpload onUpload={(file) => console.log(file)} /> */}
        <button type="submit">Generate QR Code</button>
      </form>

      {showQRCode && (
        <div className="qrcode-container">
          <QRCode value={qrCodeData} />
          <DownloadQRCode qrCodeData={JSON.parse(qrCodeData)} />
        </div>
      )}
    </div>
  );
}

export default Form;
