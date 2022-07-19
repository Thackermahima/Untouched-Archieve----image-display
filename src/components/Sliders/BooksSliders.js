import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from 'react-router-dom'
class BooksSliders extends Component {
  render() {
    const settings = {
      dots: false,
      autoplay: false,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1
  
    };
    return (
      <div style={{height:'16rem',}} className="container-fluid">
        <div className='title-box'>
            <h3>Books</h3>
            <div style={{marginLeft:"42%"}} className='under-line col-2'></div>
        </div>
        <Slider {...settings}>
        <div className='slider-div'><img src='http://images.studentdesk.in/img/icons/large/defaultbook.png' /></div>
        
        <div className='slider-div'><img src='http://images.studentdesk.in/img/icons/large/defaultbook.png'/></div>
        
        <div className='slider-div'><img src='http://images.studentdesk.in/img/icons/large/defaultbook.png' /></div>
        <div className='slider-div'><img src='http://images.studentdesk.in/img/icons/large/defaultbook.png' /></div>
        <div className='slider-div'><img src='http://images.studentdesk.in/img/icons/large/defaultbook.png' /></div>
        <div className='slider-div'><img src='http://images.studentdesk.in/img/icons/large/defaultbook.png' /></div>
       
        <div className='slider-div'><img src='http://images.studentdesk.in/img/icons/large/defaultbook.png'/></div>
        
        <div className='slider-div'><img src='http://images.studentdesk.in/img/icons/large/defaultbook.png'/></div>
        
        <div className='slider-div'><img src='http://images.studentdesk.in/img/icons/large/defaultbook.png' /></div>
        </Slider>
                <Link to = "/book-list">
        <div className='row viewmore-btn'>
        <button className=" viewmore-btn btn btn-primary my-2 my-sm-0" type="submit">View all</button>
        </div>
                </Link>

      </div>
    );
  }
}

export default BooksSliders;