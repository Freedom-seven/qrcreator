import React from "react";
import QRCodeLib from "qrcode.react";
import "./QRCode.css";

function QRCode({ value, size = 256, text }) {
  const data = JSON.parse(value);
  const { name, email, phone, message } = data;
  const qrCodeValue = `${name}\n${email}\n${phone}\n${message}`;

  return (
    <div className="qrcode">
      <QRCodeLib value={qrCodeValue} size={size} />
    </div>
  );
}

export default QRCode;
