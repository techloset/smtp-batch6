'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import Blog from "../blog/blog";

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="mx-3">
                <h2 className="text-2xl my-4 animate-pulse font-bold" > Latest News </h2>
                <Slider {...settings}>
                    <div className="px-4" >
                        <Blog heading1={"Robots"} heading2={"they are being used for work labour"} imgss={"/WAR.jpg"} />
                    </div>
                    <div className="px-4" >
                        <Blog heading1={"Robots"} heading2={"they are being used for work labour"} imgss={"/image (11).jpg"} />
                    </div>
                    <div className="px-4" >
                        <Blog heading1={"Robots"} heading2={"they are being used for work labour"} imgss={"/image (7).jpg"} />
                    </div>
                    <div className="px-4" >
                        <Blog heading1={"Robots"} heading2={"they are being used for work labour"} imgss={"/image (8).jpg"} />
                    </div>
                    <div className="px-4" >
                        <Blog heading1={"Robots"} heading2={"they are being used for work labour"} imgss={"/image (10).jpg"} />
                    </div>
                    <div className="px-4" >
                        <Blog heading1={"Robots"} heading2={"they are being used for work labour"} imgss={"/image (7).jpg"} />
                    </div>
                </Slider>
            </div>
        );
    }
}