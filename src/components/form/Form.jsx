import React, { useState } from "react";

import "./Forms.css";
import QRCode from "../qrcode/QRCode";
import DownloadQRCode from "../download/DownloadQRCode";

function Form({ onSubmit, onReset }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeData, setQRCodeData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name && !email && !phone && !message) {
      alert("Please fill at least one field");
      return;
    }

    const data = {
      name,
      email,
      phone,
      message,
    };

    const stringifiedData = JSON.stringify(data);
    setQRCodeData(stringifiedData);
    setShowQRCode(true);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    onSubmit();
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setQRCodeData(null);
    setShowQRCode(false);
    onReset();
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
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Generate QR Code</button>
      </form>

      {showQRCode && (
        <div className="qrcode-container">
          <QRCode value={qrCodeData} />
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <DownloadQRCode qrCodeData={qrCodeData} />
        </div>
      )}
    </div>
  );
}

export default Form;
