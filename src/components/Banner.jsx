import React from 'react'
import Container from './Container'
import BanImg from '../assets/banner.png'
import BanLayerBg from '../assets/banlayer.png'
import { GoArrowUpRight } from "react-icons/go";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter, FaDiscord } from "react-icons/fa";


const Banner = () => {
    return (
        <section id='' className='lg:pt-32 pt-20 lg:mb-12 mb-0 bg-[#245D51] lg:pb-0 pb-[56px]'>
            <Container>
                <div className="flex justify-between">
                    <div className="lg:w-1/2 w-full relative text-center lg:text-start">
                        <img className='absolute lg:top-[88px] top-[37px] lg:right-[163px] right-[54px] lg:w-auto w-[31%]' src={BanLayerBg} alt="ban-bg" />
                        <h1 className='text-white lg:text-[60px] leading-normal text-[28px] font-semibold pb-[10px]'>There is always something new for us to learn</h1>
                        <p className='lg:text-[18px] text-[12px] lg:leading-[35px] leading-[30px] lg:w-[527px] w-[340px] font-normal text-[#FFFFFF99]  pb-8'>we have created more than 100+ materials on various things that will help your career, with mentors who are experienced in their fields.</p>
                        <div className="flex gap-x-5 lg:flex-row flex-col gap-[30px] items-center">
                            <div className="flex justify-center">
                                <button className='flex gap-x-[15px] items-center lg:text-[18px] text-[16px] text-white lg:font-bold font-medium px-[25px] py-3 bg-[#CB8461] rounded-[4px]'> 
                                    <h4 className=''>Start Journey</h4>
                                    <GoArrowUpRight />
                                </button>
                            </div>
                            <div className="flex gap-x-6 justify-center text-white text-2xl">
                                <RiInstagramFill />
                                <FaTwitter />
                                <FaDiscord />
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <img src={BanImg} alt="banner" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Banner
