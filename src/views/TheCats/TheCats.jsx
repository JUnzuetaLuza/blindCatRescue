import css from './TheCats.module.css';
import { CatCard } from "../../components/CatCard/CatCard.jsx"

export const TheCats = () => {

  return (
    <>
          <div className={css.container}>
            <h2 className={css.title}>Meet the cats!</h2>
            <div className={css.twoColumns}>
              <p>We would like to introduce toy to the blind, FIV & FELV+ residents of Blind Cat Rescue. Every cat may have more than one sponsor.<br/>We urge our supporters to choose wichever cat you find touches your heart the most, as they will all receive the same standard of care regardless of how many sponsors they have.</p>
              <p>It costs approximately $1000 per day to provide the cats with shelter, quality food, and medical care. Cats with NEED SPONSOR badge buttons currentlyhave two or less sponsors.<br/><br/>Thank you for your support in helping the cats!</p>
            </div>
            <div className={css.catGrid}>
              {cats.map((cat, index) => (
                <CatCard key={index} cat={cat} />
              ))}
              <div className={css.moreCats}>Más gatos</div>
            </div>
          </div>
    </>
  )
}