import React from 'react'
import Container from './Container'
import DiscountImg from '../assets/discount.png'
import DisImg1 from '../assets/disimg1.png'
import DisImg2 from '../assets/disimg2.png'
import DisImg3 from '../assets/disimg3.png'
import DisImg4 from '../assets/disimg4.png'

const Discount = () => {
  return (
    <section id='' className='lg:sec_pad pt-[50px]'>
        <Container>
            <div className="bg-[#F2E7DB] lg:py-[52px] py-[77px] lg:mt-[100px] rounded-xl relative">
                <div className="lg:w-3/5 w-full lg:pl-[61px] p-[20px] lg:text-start text-center">
                    <div className="absolute top-0 left-0 bg-[#245D51] h-[50px] w-[50px] rounded-full rounded-tl-none"></div>
                    <div className="absolute bottom-0 right-0 bg-[#245D51] h-[50px] w-[50px] rounded-full rounded-br-none"></div>
                    <h2 className='lg:heading heading_res text-[#2C2C2C]'>Happy <span className='text-[#CB8461]'>Chinese New Year</span>, 20% discount for you today</h2>
                    <button className='lg:text-[20px] text-[14px] lg:font-bold font-semibold text-white px-[25px] py-[15px] bg-[#245D51] rounded-[4px]'>Subscribe Course</button>
                </div>
                <div className="absolute bottom-0 right-[148px] hidden lg:block">
                    <img src={DiscountImg} alt="discount_image" />
                </div>
                <div className="absolute top-[67px] right-[404px] hidden lg:block">
                    <img src={DisImg1} alt="dis_img_1" />
                </div>
                <div className="absolute top-[63px] right-[80px] hidden lg:block">
                    <img src={DisImg2} alt="dis_img_2" />
                </div>
                <div className="absolute bottom-[23px] right-[123px] hidden lg:block">
                    <img src={DisImg3} alt="dis_img_3" />
                </div>
                <div className="absolute bottom-[42px] lg:right-[387px] right-[270px]">
                    <img src={DisImg4} alt="dis_img_4" />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Discount
