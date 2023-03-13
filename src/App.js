import React, { useState } from "react";
import { Form, QRCode, DownloadQRCode } from "./components";
import "./App.css";

function App() {
  const [state, setState] = useState({
    qrCodeValue: "",
    showQRCode: false,
  });
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const handleReset = () => {
    setState({ qrCodeValue: "", showQRCode: false });
  };

  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <Form
        qrCodeValue={state.qrCodeValue}
        onReset={handleReset}
        onSubmit={handleFormSubmit}
      />
      {state.showQRCode && (
        <>
          <QRCode value={state.qrCodeValue} />

          <DownloadQRCode value={state.qrCodeValue} />
        </>
      )}
    </div>
  );
}

export default App;
