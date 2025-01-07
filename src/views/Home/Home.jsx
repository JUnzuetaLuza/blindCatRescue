import css from './Home.module.css';
import { NavBar } from '../../components/NavBar/NavBar'
//import { Carousel } from '../../components/Carousel/Carousel'
//import { Footer } from '../../components/Footer/Footer'
import blindCat1 from '../../assets/blindCat1.png'

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
    </>
  )
}

