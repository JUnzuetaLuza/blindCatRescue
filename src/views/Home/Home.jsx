import css from './Home.module.css';
import { NavBar } from '../../components/NavBar/NavBar';
//import { Carousel } from '../../components/Carousel/Carousel';
import { Footer } from '../../components/Footer/Footer';
import blindCat1 from '../../assets/blindCat1.png';
import blindCat2 from '../../assets/blindCat2.png';
import gridCat1 from '../../assets/gridCat1.jpg';
import gridCat2 from '../../assets/gridCat2.jpg';
import gridCat3 from '../../assets/gridCat3.jpg';
import gridCat4 from '../../assets/gridCat4.jpg';
import gridCat5 from '../../assets/gridCat5.jpg';
import gridCat6 from '../../assets/gridCat6.jpg';
import gridCat7 from '../../assets/gridCat7.jpg';
import gridCat8 from '../../assets/gridCat8.jpg';
import gridCat9 from '../../assets/gridCat9.jpg';

export const Home = () => {

  return (
    <>
      <NavBar/>
      <section className={css.container}>
        <div>
          <h1>Blind Cat Rescue & Sanctuary, Inc</h1>
          <p>Every cat deserves love and a forever home. Your support can change lives and bring joy to both you and a cat in search of a loving family.</p>
          <div className={css.buttons}>
            <button>Donate</button>
            <button>Adopt</button>
          </div>
        </div>
        <img src={blindCat1} alt="blindCat1" className={css.catImg} />
      </section>
      <section className={css.container}>
        <img src={blindCat2} alt="blindCat2" className={css.catImg} />
        <div>
          <h2>Welcome to the official web page for Blind Cat Rescue & Sanctuary, Inc</h2>
          <p>We are a lifetime cat care sanctuary located in St. Paulls, North Carolina (USA). In 2005, we build our first building as a safe place for blind cats who were deemed not adoptable by regular shelters and were going to be euthanized because they were blind.</p>
          <p>In 2011, we build a second shelter to provide a safe place for Leukemia positive (FELV+) abd Feline Immunodeficency Virus (FIV+) cats who otherwise would be killed because they tested positive for these viruses.</p>
          <p>We are a registered non-profit 501©3 in the state of North Carolina. Our tax identification number is 20-3410498. Your donations are tax-deductible, encrypted and safe.</p>
          <p>Now we humbly ask for your help. Will you consider becoming the cat's champion by making a gift today? Every little bit helps!.</p>
        </div>
      </section>
      <section class={css.quoteSection}>
        <p class={css.quoteText}>"A blind cats do not know they are blind,<br/> they know they are cats, they act like cats."</p>
        <p class={css.quoteAuthor}>Alana Miller</p>
      </section>
      <section className={css.catShowcase}>
        <div class={css.catGrid}>
          <img src={gridCat1} alt="Cat 1"/>
          <img src={gridCat2} alt="Cat 2"/>
          <img src={gridCat3} alt="Cat 3"/>
          <img src={gridCat4} alt="Cat 4"/>
          <img src={gridCat5} alt="Cat 5"/>
          <img src={gridCat6} alt="Cat 6"/>
          <img src={gridCat7} alt="Cat 7"/>
          <img src={gridCat8} alt="Cat 8"/>
          <img src={gridCat9} alt="Cat 9"/>
        </div>
        <button>Show more cats</button>
      </section>
      <Footer/>
    </>
  )
}

