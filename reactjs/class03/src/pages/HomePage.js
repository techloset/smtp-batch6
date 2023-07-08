import Header from "../components/header/Header";
import MainCard from "../components/mainCard/MainCard";
import Navbar from "../components/navbar/Navbar";


function HomePage() {
    return (
        <div>
            <Navbar />
            <Header />


            <section className="section category">
                <h2 className="section__title">Favorite Scare <br /> Category</h2>

                <div className="category__container container grid">

                    <MainCard />
                    <MainCard />
                    <MainCard />
                </div>
            </section>



        </div>
    )
}

export default HomePage