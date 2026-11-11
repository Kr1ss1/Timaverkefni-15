// 💡 LJÓSROFI – upphitun
// Hugtök: boolean state · ternary ? :
//
// Markmið: Takki sem kveikir og slekkur ljósið.
//   - Bakgrunnurinn er ljós þegar kveikt er, dökkur þegar slökkt er.
//   - Takkinn segir „Slökkva“ þegar kveikt er, annars „Kveikja“.

import { useState } from "react";

function Ljosrofi() {
  // TODO 1: Búðu til boolean state sem byrjar sem false.
  //         Vísbending: const [on, setOn] = useState(false);
  const [on, setOn] = useState(false);

  return (
    <div
      className="ljosrofi"
      // TODO 2: Láttu bakgrunninn breytast eftir state með ternary.
      //         Ljóst: "#fff6c2"   Dökkt: "#1f2937"
      //         Vísbending: style={{ background: on ? "..." : "..." }}
      //         Ath: tvöföldu slaufusvigarnir {{ }} = JavaScript-hlutur inni í JSX.
      style={{ background: on ? "#fff6c2" : "#1f2937", color: on ? "#1f2937" : "#f9fafb" }}

    >
      <p className="pera">💡</p>

      {/* TODO 3: Takkinn á að snúa state við þegar smellt er.
                  Vísbending: onClick={() => setOn(!on)} */}
      <button onClick={() => setOn(!on)}>
        {on ? "Slökkva" : "Kveikja"}
      </button>

      {/* TODO 4: Textinn á takkanum á að vera „Slökkva“ ef kveikt, annars „Kveikja“. */}
      {/* AUKA: Láttu peruna vera daufa þegar slökkt er: style={{ opacity: on ? 1 : 0.3 }} */}
      <p className="pera" style={{ opacity: on ? 1 : 0.3 }}>
        💡
      </p>
    </div>
  );
}

export default Ljosrofi;
