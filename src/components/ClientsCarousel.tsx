import * as React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/clientsCarousel.css'

import {
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10
} from '../imgs/clients';

export const ClientsCarousel: React.FC = () => {
    const images = [
        client1,
        client2,
        client3,
        client4,
        client5,
        client6,
        client7,
        client8,
        client9,
        client10
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 6000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
        pauseOnHover: true,
        cssEase: 'linear',
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div style={{ width: '42%', margin: '0 auto'}}>
            <Slider {...settings}>
                {images.map((logo, index) => (
                    <div key={index} style={{ padding: '10px', textAlign: 'center' }}>
                        <img
                            src={logo}
                            alt={`Partner ${index + 1}`}
                            className="slider-image"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};
