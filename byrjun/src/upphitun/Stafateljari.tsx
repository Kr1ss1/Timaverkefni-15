// ✍️ STAFATELJARI – upphitun
// Hugtök: string state · controlled input · && · ? :
//
// Markmið: Textareitur með hámark 50 stafi, eins og á samfélagsmiðlum.
//   - Undir reitnum stendur t.d. „23 / 50“.
//   - Talan verður rauð þegar farið er yfir 50.
//   - Viðvörun birtist BARA þegar textinn er of langur.

import { useState } from "react";

const HAMARK = 50;

function Stafateljari() {
  // TODO 1: string state fyrir textann
  const [text, setText] = useState("");

  const ofLangt = text.length > HAMARK;

  return (
    <div className="card">
      <h3>✍️ Stafateljari</h3>

      {/* TODO 2: controlled input */}
      <textarea
        placeholder="Skrifaðu eitthvað..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* TODO 3 + 4: fjöldi stafa, rauður ef yfir HAMARK */}
      <p style={{ color: ofLangt ? "#c0392b" : "#5b6475" }}>
        {text.length} / {HAMARK}
      </p>

      {/* TODO 5: viðvörun BARA ef textinn er of langur */}
      {ofLangt && <p className="vidvorun">STOP!!! ALLTOF LANGUR TEXTI...(bara 50 stafir...)</p>}
    </div>
  );
}

export default Stafateljari;
