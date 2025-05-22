import React from "react";
import QrCodeGenerateur from "../composants/QrCodeGenerateur";
import ListePresences from "../composants/ListePresences";

const PagePresences = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Suivi de Présence</h1>

      {/* Affichage du QR code */}
      <QrCodeGenerateur />

      <hr style={{ margin: "2rem 0" }} />

      {/* Affichage de la liste des présences */}
      <ListePresences />
    </div>
  );
};

export default PagePresences;
