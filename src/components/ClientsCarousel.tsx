import * as React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/clientsCarousel.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
    client10,
    client11
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
        client10,
        client11
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 8000,
        slidesToShow: 8,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1,
        cssEase: 'linear',
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed:6000
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed:5000
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed:5000
                },
            },
        ],
    };

    return (
        <div style={{ width: '100%', margin: '0 auto'}}>
            <Slider {...settings}>
                {images.map((logo, index) => (
                     <div key={index} style={{ padding: '10px', textAlign: 'center' }}>
                        <LazyLoadImage
                            src={logo}
                            alt={`Partner ${index + 1}`}
                            className="slider-image"
                            effect="blur"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};
