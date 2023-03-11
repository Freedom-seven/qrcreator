import React from "react";
import QRCodeLib from "qrcode.react";
import "./QRCode.css";

function QRCode({ value, size = 256, text }) {
  return (
    <div className="qrcode">
      <QRCodeLib value={value} size={size} />
    </div>
  );
}

export default QRCode;
