import React from "react";
import { saveAs } from "file-saver";
import "./Download.css";

function DownloadQRCode({ value, size = 256 }) {
  const handleDownload = () => {
    const canvas = document.querySelector(".qrcode canvas");
    canvas.toBlob((blob) => {
      saveAs(blob, "qrcode.png");
    });
  };

  return (
    <div className="download-qrcode">
      <button onClick={handleDownload}>Download QR Code</button>
    </div>
  );
}

export default DownloadQRCode;
