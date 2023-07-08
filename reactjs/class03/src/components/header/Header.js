import headerImg from '../../assets/img/home1-img.png'
import Button from '../button/Button'

function Header() {
    return (
        <section className="home container" id="home">
            <div className="swiper home-swiper">
                <div className="swiper-wrapper">
                    <section className="swiper-slide">
                        <div className="home__content grid">
                            <div className="home__group">
                                <img src={headerImg} alt="" className="home__img" />
                                <div className="home__indicator"></div>

                                <div className="home__details-img">
                                    <h4 className="home__details-title">The Labu “Reiza”</h4>
                                    <span className="home__details-subtitle">The Living Pumpkin</span>
                                </div>
                            </div>

                            <div className="home__data">
                                <h3 className="home__subtitle">#1 Top Scariest Ghost</h3>
                                <h1 className="home__title">UOOOO <br /> TRICK OR <br /> TREAT!!</h1>
                                <p className="home__description">Hi, I'm Reiza, people call me "El Labu". I am currently trying to learn
                                    something new, building my own bike with parts made only in Malaysia.
                                </p>

                                <Button/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Header