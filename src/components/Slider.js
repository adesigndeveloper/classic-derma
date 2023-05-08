import React from 'react'
import axios from "axios";
import OwlCarousel from 'react-owl-carousel2';
import '../assets/css/owl.carousel.css';
import '../assets/css/owl.theme.default.css';


// Carousel Images
import slider1 from '../assets/images/slider1.png'
import slider2 from '../assets/images/slider2.png'

const baseURL = "https://derma.webpino.tech";
const storagePath = "/storage/app/public/";

export default function SliderComponent() {

    const [post, setPost] = React.useState(null);
    const [error, setError] = React.useState(null);
  
    React.useEffect(() => {
      // invalid url will trigger an 404 error
      axios.get(`${baseURL}/api/v1/banners?banner_type=main_banner`).then((response) => {
        setPost(response.data);
      }).catch(error => {
        setError(error);
      });
    }, []);
    
    if (error) return `Error: ${error.message}`;
    if (!post) return "No post!"

    const options = {
        items: 1,
        nav: false,
        rewind: true,
        autoplay: true,
        // animateOut: 'fadeOut',
        autoplayTimeout: 4000,
        smartSpeed: 2000,
    };
    //console.log(baseURL+storagePath+'banner/'+post[0].photo);
    
    // const item = {
    //     items: [
    //         <img src={slider1} className='img-fluid' />,
    //         <img src={slider2} className='img-fluid' />
    //     ]
    // }
    return (
        <section id="slider">
            <OwlCarousel options={options}  >
                {
                    post.map(post =>
                        <img src={baseURL+storagePath+'banner/'+post.photo} className='img-fluid' />
                    )
                }
            </OwlCarousel>
        </section>
    )
}
