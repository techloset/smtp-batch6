import React from 'react'
import ProductCard from '../productCard/ProductCard'
import CardImg from "../../assets/img/trick-treat1-img.png"
import CardImg2 from "../../assets/img/trick-treat2-img.png"
import CardImg3 from "../../assets/img/trick-treat3-img.png"
import CardImg4 from "../../assets/img/trick-treat4-img.png"
import CardImg5 from "../../assets/img/trick-treat5-img.png"
import CardImg6 from "../../assets/img/trick-treat6-img.png"




export default function TrickSection(props) {
    return (
        <section className="section trick" id="trick">
            <h2 className="section__title">Trick Or Treat</h2>

            <div className="trick__container container grid">

                <ProductCard src={CardImg} price="11.99" title="" description="" />
                <ProductCard src={CardImg2} price="7.9" />
                <ProductCard src={CardImg3} price="8.9" />
                <ProductCard src={CardImg4} price="16.9" />
                <ProductCard src={CardImg5} price="3.9" />
                <ProductCard src={CardImg6} price="4.9" />


            </div>
        </section>

    )
}
