'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import 'src/app/(components)/homeSlider/style.css'
import Homeslidercompo from "../homeSliderItems/homeSliderItems";
// npm i react-slick
// npm i slick-carousel

export default class homeSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            dots: true,
            autoplaySpeed: 3000,
            cssEase: "linear",
            infinite: true
        };
        return (
            <div className="mx-6 sm:mx-0">
                <Slider {...settings}>
                    <Homeslidercompo heading1={"Sale"} heading2={"From 1000 to 10,000"} heading3={"Eid Sale"} imgss={"/images/main-banner.jpg"} />
                    <Homeslidercompo heading1={"Sale"} heading2={"From 1000 to 10,000"} heading3={"Eid Friday Sale"} imgss={"/images/main-banner-1.jpg"} />

                </Slider>

            </div>
        );
    }
}