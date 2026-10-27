import { useState } from "react";
import { projeler } from "../data/projeler";
import ProjeKarti from "./ProjeKarti";

function Projeler() {
  const [seciliFiltre, setSeciliFiltre] = useState("Tümü");

  const tumTeknolojiler = [
    "Tümü",
    ...new Set(projeler.flatMap((p) => p.teknolojiler)),
  ];

  const gosterilecekler =
    seciliFiltre === "Tümü"
      ? projeler
      : projeler.filter((p) => p.teknolojiler.includes(seciliFiltre));

  return (
    <section id="projeler">
      <h2>Projeler</h2>

      <div className="filtreler">
        {tumTeknolojiler.map((t) => (
          <button
            key={t}
            className={
              t === seciliFiltre ? "filtre-buton aktif" : "filtre-buton"
            }
            onClick={() => setSeciliFiltre(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="kartlar">
        {gosterilecekler.map((proje) => (
          <ProjeKarti key={proje.baslik} proje={proje} />
        ))}
      </div>
    </section>
  );
}

export default Projeler;
