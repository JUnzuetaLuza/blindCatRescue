import { useState } from "react";
import css from "./CatCard.module.css";

export const CatCard = ({ cat }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
    className={isFlipped ? `${css.catCard} ${css.flipped}` : `${css.catCard}`}
      // onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={css.cardInner}>
        
        <div className={css.cardFront}>
          {cat.urgent && <span className={css.urgentIcon}>🐾</span>}
          <img src={cat.image} alt={cat.name} className={css.catImage} />
          <h3>{cat.name}</h3>
          <a onClick={() => setIsFlipped(true)}>ⓘ</a>
        </div>

        <div className={css.cardBack}>
          <img src={cat.image} alt={cat.name} className={css.catImage} />
          <h3>{cat.name}</h3>
          <p><strong>Raza:</strong> {cat.breed}</p>
          <p><strong>Ubicación:</strong> {cat.location}</p>
          <p><strong>Fecha de llegada:</strong> {cat.arrivalDate}</p>
          <a onClick={() => setIsFlipped(false)}>X</a>
        </div>

      </div>
      <button>Sponsor</button>
    </div>
  );
};