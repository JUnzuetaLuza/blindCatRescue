import css from './AboutUs.module.css';
import AboutCat1 from '../../assets/AboutCat1.png';
import AboutCat2 from '../../assets/AboutCat2.jpg';
import AboutCat3 from '../../assets/AboutCat3.png';
import TwoCats from '../../assets/TwoCats.png';
import TwoCats2 from '../../assets/TwoCats2.png';
import CatPaws from '../../assets/CatPaws.png';

export const AboutUs = () => {

  return (
    <>
      <div className={css.container}>
        <div className={css.block}>
          <div>
            <h2 className={css.title}>About Us</h2>
            <p>Blind Cat Rescue was founded in 2005 in St Pauls, NC, by a mother daughter team to provide a safe heaven for blind cats deemed unadoptable by shleters and at risk of being euthanized. Their first blind cat, Louie, showed them how normal blind cats are playing, climbing, and loving like any other cat. After adopting more blind cats, they discovered the lack of resources and the high euthanasia rates for blind animals, as North Carolina law permits their immediate euthanization in shelters. Knowing blind cats are just like any others, they decided to establish a nonprofit and S01(c)(3) charity to advocate for and protect these animals.</p>
          </div>
          <img src={AboutCat3} />
        </div>
        
        <div className={css.block}>
          <img src={TwoCats} />
          <div>
            <p>In 2011, we expanded our sanctuary to include FLEV+ (leukemia-positive) ad FIV+ (feline immunodeficiency virus) cats, who are often euthanized in shelters and vet offices due to their diagnoses. These cats are healthy and can live long lives, so we believe euthanizing them is unjustified. Many "positive" test results are actually false positives and should be confirmed with more accurate tests like the IFA (for leukimia) or Western Biot (for FIV).</p>
            <p>FIV is primarily spread through deep bites during fights, usually among unfixed outdoor cats. Neutering and feeding them reduces fihting and risk. Studies show FIV+ and negative cats can safely live together. FIV+ cats can remain healthy for years, and when they reach the point of no longer having a good quality of life, we humanely let them go to prevent suffering.</p>
          </div>
        </div>

        <div className={css.block}>
          <div>
            <h2>What is FIV?</h2>
            <p>FIV (Feline Immundeficiency Virus) is a slow-progressing virus that may weaken a cat's immune system but often has little to no impact on their health. Studies confirm that FIV+ cats can live just as long and healthy as Non-FIV cats, often dying of the same causes. They can also live safely with Non-FIV cats without spreading the virus.</p>
            <p>FIV is fragile and doesn't survive in the environment, it's destroyed by air, light, heat, and household desinfectants. Transmission occurs mainly through deeo bite wounds, where saliva carrying the virus enters the bloodstream. Such bites are rare, except among unneutered, free-roaming tomcats.</p>
          </div>
          <img src={AboutCat2} />
        </div>

        <div className={css.block}>
          <img src={TwoCats2} />
          <div>
            <p>New studies from Purdue University confirm that FIV+ ad Non-FIV cats can safely live together, as FIV is mainly spread through deep bite wounds, typically among unneutered, free-roaming tomcats. Rarely, it may pass from a mother to her kittens. FIV+ cats can live healthy lives for years, and when their quality of life declines, we humanely let them go to prevent suffering, in over 10 years of housing FIV+ and Non-FIV cats together, we've never had a Non-FIV cat test positive.</p>
            <p>Feline leukemia virus (FeLV) is a leading cause of death in cats, causing anemia, lymphoma, or secondary infections. It spreads through saliva, blood, and occasionally urine or feces but survives only a few hours outside the body. FeLV+ cats can live several healthy years, with a 3-5 year lifespan being typical. If your cat test positive using a Snap test, insist on retesting with an IFA test to confirm the results, as Snap tests often yield false positives.</p>
            <p><strong>We do not kill humans because they have a virus, why would we murder the cat?</strong></p>
            <p>FeLV+ cats deserve a chance at life, just like any other.</p>
          </div>
        </div>

        <div className={css.block}>
          <div>
            <h2>About Blind Cats</h2>
            <p><strong>Facts about blind cats:</strong></p>
            <p>Blind cats don't know they are blind, they know they are cats and act like any other cat. They can climb trees, reach high places, and navigate spaces effortlessly. To help a blind cat, keep essential items like litter boxes and food bowls in consistent locations. Otherwise, live normally; they'll adapt quickly, even if you move furniture. Blind cats use their whiskers to detect obstacles before bumping into them. When relocating a blind cat, place them in a familiar spot, like near their food or in the litter box.</p>
            <p>Blindness in cats can result from hypertension, diabetes, hyperthyroidism, or untreated respiratory infections. If blindness occurs suddenly, rush your cat to the vet and insist on a blood pressure check, it could be reversible with timely treatment. Signs like sneezing, coughing, gooey eyes, excessive eating with weight loss, or constant thirst require urgent vet attention. Full blood work is essential for an accurate diagnosis and proper care.</p>
          </div>
          <img src={AboutCat1} />
        </div>
      </div>

      <div className={css.blockDonate}>
        <img src={CatPaws} />
        <button>Donate</button>
        <div className={css.squareText}>
          <p>We are registered non-profit with the state of North Caroline.</p>
          <p>We are a S01(c)3. Our tax number is 20-3410498.</p>
          <p>Please, if you believe that blind, FIV+ or FeLV+ cats deserve to have an opportunity to live instead of being declared not adoptable and immediately killed, help us have the resources to help them.</p>
          <p>Your donations are tax deductible and encrypted. You may use Mastercard, Visa or Paypal. Please say YES to helping the blind, FIV and FeLV+ cats. Please Donate Now!</p>
        </div>
      </div>
    </>
  )
}
