import React from 'react'
import Container from './Container'
import TestImg1 from '../assets/testimonial1.png'
import TestImg2 from '../assets/testimonial2.png'
import TestImg3 from '../assets/testimonial3.png'
import { FaStar } from "react-icons/fa";
import Slider from 'react-slick'
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi"

const Testimonial = () => {

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className='lg:h-[55px] lg:w-[55px] w-[40px] h-[40px] bg-white hover:bg-[#CB8461] rounded-full flex justify-center items-center absolute lg:bottom-[-100px] bottom-[-60px] lg:right-[45%] right-[35%] z-40 border-[5px] border-[#F5F5F5] cursor-pointer text-[#0C111F] hover:text-white duration-300 ease-in-out' onClick={onClick}><HiArrowSmRight className='inline-block lg:text-[35px]' /></div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className='lg:h-[55px] lg:w-[55px] w-[40px] h-[40px] bg-[#FFF] hover:bg-[#CB8461] rounded-full flex justify-center items-center absolute lg:bottom-[-100px] bottom-[-60px] lg:left-[40%] left-[35%] z-40 border-[5px] border-[#F5F5F5] cursor-pointer text-[#0C111F] hover:text-white duration-300 ease-in-out' onClick={onClick}><HiArrowSmLeft className='inline-block lg:text-[35px]' /></div>
    );
  }

  const settings = {
    className: "center",
centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <section id='' className='lg:sec_pad !pb-[100px] pt-[62px] my-[50px] bg-[#F8F8F8]'>
      <Container>
        <div className="text-center">
          <h2 className='lg:heading heading_res'>What do they <span className='text-[#CB8461]'>say?</span></h2>
          <p className='lg:para para_res lg:w-[545px] w-[262px] mx-auto pb-[50px]'>This is an honest review from members who have joined us</p>
        </div>
        <Slider {...settings}>
          <div className="">
            <div className="lg:px-[48px] px-[38px] pt-[48px] pb-[18px] text-center">
              <div className="w-[60px] mx-auto">
                <img src={TestImg1} alt="testimonial_image" />
              </div>
              <div className="flex gap-x-[7px] justify-center pt-[16px] pb-[24px] text-[#FF9100]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h4 className='lg:text-[24px] text-[18px] font-normal text-[#2C2C2C] pb-[10px]'>Jason Bay</h4>
              <p className='lg:para para_res'>I am quite satisfied, because the skills I want or dream of can really be mastered</p>
            </div>
          </div>
          <div className="">
            <div className="lg:px-[48px] px-[38px] pt-[48px] pb-[18px] text-center">
              <div className="w-[60px] mx-auto">
                <img src={TestImg2} alt="testimonial_image" />
              </div>
              <div className="flex gap-x-[7px] justify-center pt-[16px] pb-[24px] text-[#FF9100]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h4 className='lg:text-[24px] text-[18px] font-normal text-[#2C2C2C] pb-[10px]'>Nany Brugman</h4>
              <p className='lg:para para_res'>I am quite satisfied, because the skills I want or dream of can really be mastered</p>
            </div>
          </div>
          <div className="">
            <div className="lg:px-[48px] px-[38px] pt-[48px] pb-[18px] text-center">
              <div className="w-[60px] mx-auto">
                <img src={TestImg3} alt="testimonial_image" />
              </div>
              <div className="flex gap-x-[7px] justify-center pt-[16px] pb-[24px] text-[#FF9100]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h4 className='lg:text-[24px] text-[18px] font-normal text-[#2C2C2C] pb-[10px]'>Alexa Nowan</h4>
              <p className='lg:para para_res'>I am quite satisfied, because the skills I want or dream of can really be mastered</p>
            </div>
          </div>
          <div className="">
            <div className="lg:px-[48px] px-[38px] pt-[48px] pb-[18px] text-center">
              <div className="w-[60px] mx-auto">
                <img src={TestImg3} alt="testimonial_image" />
              </div>
              <div className="flex gap-x-[7px] justify-center pt-[16px] pb-[24px] text-[#FF9100]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h4 className='lg:text-[24px] text-[18px] font-normal text-[#2C2C2C] pb-[10px]'>Alexa Nowan</h4>
              <p className='lg:para para_res'>I am quite satisfied, because the skills I want or dream of can really be mastered</p>
            </div>
          </div>
        </Slider>
      </Container>
    </section>
  )
}

export default Testimonial
