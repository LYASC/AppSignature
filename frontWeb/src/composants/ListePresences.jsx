import React, { useEffect, useState } from "react";
import axios from "axios";

const ListePresences = () => {
  // État pour stocker les présences (variable  presences) (une fonction pour mettre à jour cette liste: setPresences)
  // (mémoir du composant, ici c'est tableau vide de base:useState([]))
  const [presences, setPresences] = useState([]);

  // useEffect : pour faire une action automatique, c’est comme dire : “Quand mon composant est prêt, fais ça.”
  useEffect(() => {
    const fetchData = async () => {
      //j'aurai pu appeler ma constant fetchData n'importe comment ex: chargerLesPrésences car c'est ce quel fait
      // async : pour dire que cette fonction va faire quelque chose d’asynchrone (comme une requête réseau)

      //Sécurité On utilise try/catch pour gérer les erreurs.
      //try : essaie de faire quelque chose
      //catch : si une erreur arrive (ex. le serveur ne répond pas), fais une action (comme afficher un message d’erreur)
      try {
        const res = await axios.get("http://localhost:8000/api/presence");
        setPresences(res.data);
      } catch (err) {
        console.error("Erreur de récupération des présences", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);
  //(Le [] signifie : fais-le une seule fois (au tout début, comme un "onLoad")) Si tu veux le relancer quand une variable change , tu mets cette variable dans le tableau)

  return (
    <div>
      <h2>Personnes présentes</h2>
      <ul>
        {presences.map((p) => (
          <li key={p.id}>{p.nom}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListePresences;
