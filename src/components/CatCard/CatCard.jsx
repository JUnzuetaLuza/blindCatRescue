import { useState } from "react";
import css from "./CatCard.module.css";

export const CatCard = ({ cat }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div
    className={`css.catCard ${isFlipped ? "css.flipped" : ""}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={css.cardInner}>
        
        <div className={css.cardFront}>
          {cat.urgent && <span className={css.urgentIcon}>🐾</span>}
          <img src={cat.image} alt={cat.name} className={css.catImage} />
          <h3>{cat.name}</h3>
        </div>

        <div className={css.cardBack}>
          <h3>{cat.name}</h3>
          <p><strong>Raza:</strong> {cat.breed}</p>
          <p><strong>Ubicación:</strong> {cat.location}</p>
          <p><strong>Fecha de llegada:</strong> {cat.arrivalDate}</p>
          <p>{cat.description}</p>
          <button className={css.sponsorBtn}>Sponsor</button>
        </div>
      </div>
    </div>
  );
};