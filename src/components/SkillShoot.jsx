import React from 'react'
import Container from './Container'
import SkillShootImg from '../assets/skillshoot.png'
import CurveLine from '../assets/banlayer.png'
import { FiUser, FiUserCheck } from "react-icons/fi";
import { BiVideoRecording } from "react-icons/bi";
import { FaRegCirclePlay } from "react-icons/fa6";


const SkillShoot = () => {
    return (
        <section id='' className='lg:sec_pad pt-[50px]'>
            <Container>
                <div className="flex justify-between">
                    <div className="w-[30%] hidden lg:block">
                        <img src={SkillShootImg} alt="skillshoot_image" />
                    </div>
                    <div className="lg:w-[55%] w-full lg:pr-[108px] pr-0">
                        <div className="relative lg:mb-[37px] mb-[22px] inline-block">
                            <h2 className='lg:text-[48px] text-[20px] inline-block text-[#2C2C2C] font-bold'>Let us <span className='text-[#245D51]'>Skill Shoot</span></h2>
                            <div className="absolute bottom-[-3px] right-0 lg:w-auto w-[62%]">
                                <img src={CurveLine} alt="curve_line" />
                            </div>
                        </div>
                        <p className='lg:para para_res lg:pb-[25px] pb-[10px]'>We are a company engaged in education with the aim of improving the skills of many people and so that younger people can reach the career paths they want.
                        </p>
                        <p className='lg:para para_res pb-[36px]'>we have been around since 2019 with currently 100+ updated materials and 15K members who have joined.</p>
                        <div className="flex justify-between flex-wrap">
                            <div className="w-1/2 pb-[30px]">
                                <div className="flex gap-x-[15px] items-center">
                                    <div className="lg:h-[50px] h-[30px] lg:w-[50px] w-[30px] rounded-full flex justify-center items-center bg-[#CB846130] lg:text-[25px] text-[18px] text-[#CB8461]">
                                        <FiUser/>
                                    </div>
                                    <div className="">
                                        <h4 className='lg:text-[16px] text-[12px] text-[#2C2C2C] font-semibold'>15K People Join</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 ">
                                <div className="flex gap-x-[15px] items-center">
                                    <div className="lg:h-[50px] h-[30px] lg:w-[50px] w-[30px] rounded-full flex justify-center items-center bg-[#CB846130] lg:text-[25px] text-[18px] text-[#CB8461]">
                                        <FiUserCheck/>
                                    </div>
                                    <div className="">
                                        <h4 className='lg:text-[16px] text-[12px] text-[#2C2C2C] font-semibold'>Trusted Mentor</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 ">
                                <div className="flex gap-x-[15px] items-center">
                                    <div className="lg:h-[50px] h-[30px] lg:w-[50px] w-[30px] rounded-full flex justify-center items-center bg-[#CB846130] lg:text-[25px] text-[18px] text-[#CB8461]">
                                        <BiVideoRecording/>
                                    </div>
                                    <div className="">
                                        <h4 className='lg:text-[16px] text-[12px] text-[#2C2C2C] font-semibold'>30+ Free Videos</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 ">
                                <div className="flex lg:gap-x-[15px] items-center">
                                    <div className="lg:h-[50px] h-[30px] lg:w-[50px] w-[30px] rounded-full flex justify-center items-center bg-[#CB846130] lg:text-[25px] text-[18px] text-[#CB8461]">
                                        <FaRegCirclePlay/>
                                    </div>
                                    <div className="">
                                        <h4 className='lg:text-[16px] text-[12px] text-[#2C2C2C] font-semibold'>100+ Premium Videos</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SkillShoot
