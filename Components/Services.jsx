import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Box from './Box';
import '../css/services.css';
export default function Services() {
    const images = [
        { id: 1, src: '/images/Wedding.png', page: '/Weddingdecor',altText:'Wedding Decor' },
        { id: 2, src: '/images/WeddingManagement.png', page: '/Wedding',altText:'Wedding Management' },
        { id: 3, src: '/images/Award.png', page: '/Award',altText:'Award Ceremonies' },
        { id: 4, src: '/images/Conference.png', page: '/Conference',altText:'Conference Management' },
        { id: 5, src: '/images/Product3.png', page: '/Productopen',altText:'Product Launch' },
        
      ];
  return (
    <div className='section-services'>
      
        <Navbar/>
        <div className="head1">
            <h2>Our Services</h2>
            <p>We offer a variety of services to help and execute a successful event.</p>
        </div>
        <div className="container1">    
            {images.map((image) => (
                    <Box key={image.id} src={image.src} altText={image.altText} page={image.page} />
                ))}

        
        </div>
        <Footer/>
    </div>
  )
}
