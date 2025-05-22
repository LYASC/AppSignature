import React from "react";
import QRCode from "qrcode.react";

const QrCodeGenerator = () => {
  const qrURL = "http://localhost:19006"; // Lien de l'app mobile (Expo en dev)

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2>Scannez le QR Code</h2>
      <QRCode value={qrURL} size={256} />
    </div>
  );
};

export default QrCodeGenerator;
