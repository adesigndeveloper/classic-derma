import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import '../assets/css/owl.carousel.css';
import '../assets/css/owl.theme.default.css';

// Carousel Images
import slider1 from '../assets/images/slider1.png'
import slider2 from '../assets/images/slider2.png'

export default function SliderComponent() {
    const options = {
        items: 1,
        nav: false,
        rewind: true,
        autoplay: true,
        // animateOut: 'fadeOut',
        autoplayTimeout: 4000,
        smartSpeed: 2000,
    };

    const item = {
        items: [
            <img src={slider1} className='img-fluid' />,
            <img src={slider2} className='img-fluid' />
        ]
    }

    return (
        <section id="slider">
            <OwlCarousel options={options}  >
                {item.items}
            </OwlCarousel>
        </section>
    )
}
