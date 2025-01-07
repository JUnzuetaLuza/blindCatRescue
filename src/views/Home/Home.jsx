import css from './Home.module.css';
import { NavBar } from '../../components/NavBar/NavBar';
//import { Carousel } from '../../components/Carousel/Carousel';
//import { Footer } from '../../components/Footer/Footer';
import blindCat1 from '../../assets/blindCat1.png';
import blindCat2 from '../../assets/blindCat2.png';

export const Home = () => {

  return (
    <>
      <NavBar/>
      <div className={css.container}>
        <div>
          <h1>Blind Cat Rescue & Sanctuary, Inc</h1>
          <p>Every cat deserves love and a forever home. Your support can change lives and bring joy to both you and a cat in search of a loving family.</p>
          <div className={css.buttons}>
            <button>Donate</button>
            <button>Adopt</button>
          </div>
        </div>
        <img src={blindCat1} alt="blindCat1" className={css.catImg} />
      </div>
      <div className={css.container}>
        <img src={blindCat2} alt="blindCat2" className={css.catImg} />
        <div>
          <h2>Welcome to the official web page for Blind Cat Rescue & Sanctuary, Inc</h2>
          <p>We are a lifetime cat care sanctuary located in St. Paulls, North Carolina (USA). In 2005, we build our first building as a safe place for blind cats who were deemed not adoptable by regular shelters and were going to be euthanized because they were blind.</p>
          <p>In 2011, we build a second shelter to provide a safe place for Leukemia positive (FELV+) abd Feline Immunodeficency Virus (FIV+) cats who otherwise would be killed because they tested positive for these viruses.</p>
          <p>We are a registered non-profit 501©3 in the state of North Carolina. Our tax identification number is 20-3410498. Your donations are tax-deductible, encrypted and safe.</p>
          <p>Now we humbly ask for your help. Will you consider becoming the cat's champion by making a gift today? Every little bit helps!.</p>
        </div>
      </div>
    </>
  )
}

