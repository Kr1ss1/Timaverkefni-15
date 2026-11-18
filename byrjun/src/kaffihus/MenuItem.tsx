// 03 · TÍMAVERKEFNI – Kaffihúsið tekur við pöntunum
// Skref 1–4 eru í þessari skrá. Skref 5 er í Menu.tsx.

import { useState } from "react";

type MenuItemProps = {
  name: string;
  price: number;
  isVegan?: boolean;
  soldOut?: boolean;
};

function MenuItem({ name, price, isVegan = false, soldOut = false }: MenuItemProps) {
  // SKREF 1 – Teljari
  const [qty, setQty] = useState(0);

  return (
    <div className="card">
      <div className="card-top">
        <h3>{name}</h3>
        {/* AUKA: Fallegri verð */}
        <p>{price.toLocaleString("is-IS")} kr.</p>
      </div>

      {/* Dæmi um && sem er þegar til: merkið birtist bara á vegan réttum. */}
      {isVegan && <span className="badge vegan">🌱 Vegan</span>}

      {/* SKREF 4 – Uppselt: merki Í STAÐ takkanna */}
      {soldOut ? (
        <span className="badge uppselt">Uppselt</span>
      ) : (
        <div className="row">
          {/* SKREF 1 + 2 */}
          <button
            className="secondary"
            onClick={() => setQty(qty - 1)}
            disabled={qty === 0}
          >
            –
          </button>
          <span className="qty">{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>
      )}

      {/* SKREF 3 – Karfa: BARA ef qty > 0 */}
      {qty > 0 && (
        <p className="karfa">
          {qty} í körfu · {(qty * price).toLocaleString("is-IS")} kr.
        </p>
      )}
    </div>
  );
}

export default MenuItem;
