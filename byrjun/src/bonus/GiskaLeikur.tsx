// 🎯 BÓNUS – Giskaðu á töluna
// Fyrir þau sem klára snemma. Allt sem þarf höfum við lært í kvöld.
//
// Kröfur:
//   [x] Leynitala frá 1 til 100 er valin í byrjun.
//   [x] Input-reitur og takki „Giska“.
//   [x] Skilaboð: „Of hátt ⬇️“, „Of lágt ⬆️“ eða „Rétt! 🎉“
//   [x] Teljari: „Tilraunir: 4“
//   [x] „Spila aftur“ birtist aðeins þegar rétt er giskað (&&).
//
// Auka-áskorun 🔥
//   [x] Skilaboðin skipta um lit: rautt (of hátt), blátt (of lágt), grænt (rétt).
//   [x] Geymið metið – fæstar tilraunir.

import { useState } from "react";

function nyLeynitala() {
  return Math.floor(Math.random() * 100) + 1;
}

const RETT = "Rétt! 🎉";
const OF_HATT = "Of hátt ⬇️";
const OF_LAGT = "Of lágt ⬆️";

function GiskaLeikur() {
  const [leynitala, setLeynitala] = useState(nyLeynitala());
  const [agiskun, setAgiskun] = useState("");
  const [skilabod, setSkilabod] = useState("");
  const [tilraunir, setTilraunir] = useState(0);
  // AUKA: met (fæstar tilraunir), null þar til fyrsti leikur klárast
  const [met, setMet] = useState<number | null>(null);

  const rett = skilabod === RETT;

  function giska() {
    if (rett || agiskun.trim() === "") return;

    const tala = Number(agiskun);
    const nyjarTilraunir = tilraunir + 1;
    setTilraunir(nyjarTilraunir);

    if (tala > leynitala) {
      setSkilabod(OF_HATT);
    } else if (tala < leynitala) {
      setSkilabod(OF_LAGT);
    } else {
      setSkilabod(RETT);
      if (met === null || nyjarTilraunir < met) {
        setMet(nyjarTilraunir);
      }
    }
  }

  function spilaAftur() {
    setLeynitala(nyLeynitala());
    setAgiskun("");
    setSkilabod("");
    setTilraunir(0);
  }

  const litur = rett ? "#16a34a" : skilabod === OF_HATT ? "#c0392b" : "#2563eb";

  return (
    <div className="card leikur">
      <p className="muted">Ég er að hugsa um tölu frá 1 til 100…</p>

      <div className="row">
        <input
          type="number"
          placeholder="Þín ágiskun"
          value={agiskun}
          onChange={(e) => setAgiskun(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && giska()}
        />
        <button onClick={giska} disabled={rett}>
          Giska
        </button>
      </div>

      {skilabod !== "" && <p style={{ color: litur, fontWeight: "bold" }}>{skilabod}</p>}
      <p>Tilraunir: {tilraunir}</p>
      {met !== null && <p className="muted">Met: {met} tilraunir</p>}
      {rett && <button onClick={spilaAftur}>Spila aftur</button>}
    </div>
  );
}

export default GiskaLeikur;
