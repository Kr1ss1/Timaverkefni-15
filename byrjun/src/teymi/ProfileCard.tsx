// 02 · FYLGIÆFING – Teymissíðan lifnar við
// Við gerum þetta saman, skref fyrir skref.

import { useState } from "react";

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
};

function ProfileCard({ name, role, bio }: ProfileCardProps) {
  // SKREF 1 – ❤️ Like-takki
  const [liked, setLiked] = useState(false);

  // SKREF 2 – Like-teljari
  const [likes, setLikes] = useState(0);

  // SKREF 3 – „Sýna meira“
  const [bioOpen, setBioOpen] = useState(false);

  function toggleLike() {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  }

  return (
    <div className="card">
      <h3>{name}</h3>
      <p className="muted">{role}</p>

      <div className="row">
        {/* SKREF 1 + 2: ❤️/🤍 og fjöldi like-a */}
        <button className="secondary" onClick={toggleLike}>
          {liked ? "❤️" : "🤍"} {likes}
        </button>

        {/* SKREF 3: Takkinn opnar og lokar bio. */}
        <button className="secondary" onClick={() => setBioOpen(!bioOpen)}>
          {bioOpen ? "Sýna minna" : "Sýna meira"}
        </button>
      </div>

      {/* SKREF 3: bio birtist BARA ef opið */}
      {bioOpen && <p>{bio}</p>}

      {/* SKREF 4 – TILRAUN 🔬
          Smellið á like hjá Önnu. Breytist eitthvað hjá Jóni eða Söru?
          Af hverju ekki? Skrifið svarið ykkar hér:
          Nei. Hvert ProfileCard-tilvik (instance) hefur sitt eigið state.
          useState er bundið við þann stað í component-trénu þar sem
          componentinn er birtur, svo Anna, Jón og Sara eiga hvert sitt
          liked/likes/bioOpen sem eru óháð hvort öðru.
      */}
    </div>
  );
}

export default ProfileCard;
