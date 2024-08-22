import React from 'react'
import Container from './Container'
import DisImg2 from '../assets/disimg2.png'

const Promote = () => {
  return (
    <section id='' className='lg:sec_pad pt-[50px]'>
        <Container>
        <div className="bg-[#F2E7DB] lg:py-[52px] px-[39px] lg:px-0 py-[45px] lg:mt-[100px] mt-0 rounded-[10px] relative lg:text-start text-center lg:flex justify-between items-center">
                <div className="lg:w-3/5 w-full lg:pl-[61px] pl-0">
                    <div className="absolute top-0 left-0 bg-[#245D51] h-[50px] w-[50px] rounded-full rounded-tl-none"></div>
                    <div className="absolute bottom-0 right-0 bg-[#245D51] h-[50px] w-[50px] rounded-full rounded-br-none hidden lg:block"></div>
                    <h2 className='lg:heading heading_res pb-[29px] text-[#2C2C2C]'><span className='text-[#CB8461]'>Improve</span> your skills, and reach your career as soon as possible</h2>
                </div>
                <div className="lg:pr-[67px] pr-0 lg:flex gap-x-5">
                    <button className='lg:text-[20px] lg:mb-0 mb-[20px] text-[14px] font-bold text-white px-[25px] py-[15px] bg-[#CB8461] rounded-[4px] block mx-auto'>Join Now</button>
                    <button className='lg:text-[20px] text-[14px] font-bold text-white px-[25px] py-[15px] bg-[#245D51] rounded-[4px]'>Subscribe Course</button>
                </div>
                <div className="absolute lg:left-[50%] left-[92%] lg:bottom-[-25px] bottom-[95px]">
                    <img src={DisImg2} alt="dis_img_2" />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Promote
