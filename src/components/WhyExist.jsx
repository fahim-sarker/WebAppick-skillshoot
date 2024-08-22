import React from 'react'
import Container from './Container'
import ExistCEO from '../assets/existceo.png'
import ExistIcon1 from '../assets/existicon1.png'
import ExistIcon2 from '../assets/existicon2.png'
import ExistIcon3 from '../assets/existicon3.png'
import ExistIcon4 from '../assets/existicon4.png'

const WhyExist = () => {
  return (
    <section id='' className='lg:sec_pad pt-[50px] mb-[50px]'>
        <Container>
            <div className="lg:flex justify-between lg:text-start text-center">
                <div className="lg:w-[38%] w-full">
                    <h2 className='lg:heading heading_res lg:pb-[29px] text-[#2C2C2C]'>Why do we <span className='text-[#CB8461]'>exist?</span></h2>
                    <p className='lg:para lg:w-full w-[340px] para_res mx-auto pb-[30px]'>Because we know that many people or companies have the same problem when it comes to how difficult it is to improve their skills</p>
                    <div className="flex gap-x-[13px] justify-center lg:justify-start items-center pb-[30px] border-b-[1px] mb-[30px]">
                        <div className="">
                            <img src={ExistCEO} alt="ceo" />
                        </div>
                        <div className="">
                            <h4 className='lg:text-[18px] text-[12px] font-semibold text-[#2C2C2C]'>Jerony Pulquosta</h4>
                            <h5 className='lg:text-[12px] text-[10px] text-[#808080] text-start font-normal'>CEO Skill Shoot</h5>
                        </div>
                    </div>
                    <div className="flex gap-x-[67px] justify-center lg:justify-start lg:pb-0 pb-[50px]">
                        <div className="">
                            <h4 className='lg:text-[36px] text-[24px] leading-normal font-bold text-[#2C2C2C]'>100+</h4>
                            <h5 className='lg:text-[12px] text-[10px] leading-[30px] font-normal text-[#808080]'>Updated Material</h5>
                        </div>
                        <div className="">
                            <h4 className='lg:text-[36px] text-[24px] leading-normal font-bold text-[#2C2C2C]'>15K</h4>
                            <h5 className='lg:text-[12px] text-[10px] leading-[30px] font-normal text-[#808080]'>Member Join</h5>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full flex justify-between flex-wrap">
                    <div className="lg:w-[48%] w-full lg:pb-[61px] pb-[30px]">
                        <img className='lg:mx-0 mx-auto' src={ExistIcon1} alt="exist_icon" />
                        <h3 className='lg:text-[24px] text-[18px] font-semibold text-[#245D51] pt-[30px] pb-[15px]'>Material Limitations</h3>
                        <p className='lg:para para_res lg:w-[95%] mx-auto lg:mx-0 w-[270px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="lg:w-[48%] w-full lg:pb-[61px] pb-[30px]">
                        <img className='lg:mx-0 mx-auto' src={ExistIcon2} alt="exist_icon" />
                        <h3 className='lg:text-[24px] text-[18px] font-semibold text-[#245D51] pt-[30px] pb-[15px]'>MUnprofessional Mentor</h3>
                        <p className='lg:para para_res lg:w-[95%] mx-auto lg:mx-0 w-[270px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="lg:w-[48%] w-full lg:pb-[61px] pb-[30px]">
                        <img className='lg:mx-0 mx-auto' src={ExistIcon3} alt="exist_icon" />
                        <h3 className='lg:text-[24px] text-[18px] font-semibold text-[#245D51] pt-[30px] pb-[15px]'>Video Quality</h3>
                        <p className='lg:para para_res lg:w-[95%] mx-auto lg:mx-0 w-[270px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="lg:w-[48%] w-full lg:pb-[61px]">
                        <img className='lg:mx-0 mx-auto' src={ExistIcon4} alt="exist_icon" />
                        <h3 className='lg:text-[24px] text-[18px] font-semibold text-[#245D51] pt-[30px] pb-[15px]'>High Price</h3>
                        <p className='lg:para para_res lg:w-[95%] mx-auto lg:mx-0 w-[270px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default WhyExist
