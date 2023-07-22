import AboutImg from "../../assets/img/about-img.png"
import Button from "../button/Button"
import './aboutSection.css'

export default function AboutSection() {
    return (
        <section className="section about" id="about">
            <div className="about__container container grid">
                <div className="about__data">
                    <h2 className="section__title about__title">About Halloween <br /> Night</h2>
                    <p className="about__description">Night of all the saints, or all the dead, is celebrated on October 31 and it is a
                        very fun international celebration, this celebration comes from ancient origins, and is already
                        celebrated by everyone.
                    </p>
                    <Button title="Know more"/>
                </div>

                <img src={AboutImg} alt="" className="about__img" />
            </div>
        </section>
    )
}
