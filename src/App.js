import React, { useState } from "react";
import { Form, QRCode, DownloadQRCode } from "./components";
import "./App.css";

function App() {
  const [state, setState] = useState({
    imageUrl: "",
    qrCodeValue: "",
    showQRCode: false,
  });
  // const [formData, setFormData] = useState({});

  // const handleFormSubmit = (data) => {
  //   setFormData(data);
  // };

  // const handleImageUrlChange = (url) => {
  //   setState({ ...state, imageUrl: url });
  // };

  const handleQRCodeValueChange = (value) => {
    setState({ ...state, qrCodeValue: value });
  };

  const handleGenerateQRCode = () => {
    setState({ ...state, showQRCode: true });
  };

  const handleReset = () => {
    setState({ qrCodeValue: "", showQRCode: false });
  };

  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <Form
        // imageUrl={state.imageUrl}
        // onImageUrlChange={handleImageUrlChange}
        qrCodeValue={state.qrCodeValue}
        onQRCodeValueChange={handleQRCodeValueChange}
        onGenerateQRCode={handleGenerateQRCode}
        onReset={handleReset}
        // onSubmit={handleFormSubmit}
      />
      {state.showQRCode && (
        <>
          {/* <ImageUpload imageUrl={state.imageUrl} /> */}
          <QRCode value={state.qrCodeValue} />

          <DownloadQRCode value={state.qrCodeValue} />
        </>
      )}
    </div>
  );
}

export default App;
