import SocialLinks from '../../components/SocialLinks/SocialLinks'
import ScrollDown from "./ScrollDown"
import Data from "./Data"
import "./Hero.css"

export default function Hero() {
  return (
    <>
      <section className="home section" id="home">
        <div className="home-container container">
          <div className="home-content grid">
            <div className="home-social">
              <SocialLinks />
            </div>

            <div className="home-img"></div>

            <Data />

          </div>

          <ScrollDown />
        </div>
      </section>
    </>
  )
}


