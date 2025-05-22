// src/composants/QrCodeGenerateur.jsx

import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QrCodeGenerateur = () => {
  const qrURL = "http://localhost:19006";

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2>Scannez le QR Code</h2>
      <QRCodeCanvas value={qrURL} size={256} />
    </div>
  );
};

export default QrCodeGenerateur;
