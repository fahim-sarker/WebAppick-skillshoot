import React from 'react'
import Container from './Container'
import PCIcon1 from '../assets/disimg2.png'
import PCIcon2 from '../assets/disimg4.png'
import PcThumb1 from '../assets/thumbnail1.png'
import PcThumb2 from '../assets/thumbnail2.png'
import PcThumb3 from '../assets/thumbnail3.png'
import PcCard1 from '../assets/pc_card_1.png'
import PcCard2 from '../assets/pc_card_2.png'
import PcCard3 from '../assets/pc_card_3.png'
import PcCardCommon from '../assets/pc_common.png'
import Slider from "react-slick"
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi"
import Video from '../assets/video.mp4'


const PopularCourse = () => {

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div className='lg:h-[55px] lg:w-[55px] w-[40px] h-[40px] bg-white hover:bg-[#245D51] rounded-full flex justify-center items-center absolute top-1/2 translate-y-[-50%] lg:right-[-9px] right-0 z-40 border-[5px] border-[#F5F5F5] cursor-pointer text-[#0C111F] hover:text-white duration-300 ease-in-out' onClick={onClick}><HiArrowSmRight className='inline-block lg:text-[35px]' /></div>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div className='lg:h-[55px] lg:w-[55px] w-[40px] h-[40px] bg-[#FFF] hover:bg-[#245D51] rounded-full flex justify-center items-center absolute top-1/2 translate-y-[-50%] lg:left-[-25px] left-0 z-40 border-[5px] border-[#F5F5F5] cursor-pointer text-[#0C111F] hover:text-white duration-300 ease-in-out' onClick={onClick}><HiArrowSmLeft className='inline-block lg:text-[35px]' /></div>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
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
        <section id='' className='sec_pad pt-[81PX] bg-[#245D51]'>
            <Container>
                <div className="text-center pb-[50px] relative">
                    <h2 className='lg:heading heading_res text-white'>Popular courses of the week</h2>
                    <p className='LG:para para_res lg:w-[347px] w-[311px] mx-auto'>List of the most popular lists that are often studied by our members</p>
                    <img className='absolute lg:top-[52px] top-[-25px] lg:left-[97px] left-[-5px] lg:w-auto w-[9%]' src={PCIcon1} alt="icon" />
                    <img className='absolute lg:top-[52px] top-[-25px] lg:right-[97px] right-[-5px]' src={PCIcon2} alt="icon" />
                </div>
                <Slider {...settings}>
                    <div className="lg:!w-[95%] bg-[#FAFAFA] rounded-[15px] pb-5 lg:px-0 px-5">
                        <div className="relative">
                            <div className="lg:h-[249px] h-[166px]">
                                <video className='h-full w-full' src={Video} type="video/mp4" controls poster={PcThumb1}></video>
                            </div>
                        </div>
                        <div className="px-[27px]">
                            <h4 className='lg:text-[24px] text-[15px] font-semibold text-[#2C2C2C] pb-5 pt-[27px]'>Basics of learning team management</h4>
                            <div className="flex justify-between pb-[41px]">
                                <div className="flex gap-x-[10px] items-center">
                                    <div className="">
                                        <img src={PcCard1} alt="popular_course_mentor" />
                                    </div>
                                    <div className="">
                                        <h4 className='lg:text-[14px] text-[10px] font-medium text-[#2C2C2C]'>Jone Owel</h4>
                                        <h5 className='lg:text-[10px] text-[7px] font-normal text-[#808080]'>IT Manager</h5>
                                    </div>
                                </div>
                                <div className="flex gap-x-[10px] items-center">
                                    <div className="">
                                        <img src={PcCardCommon} alt="popular_course_mentor" />
                                    </div>
                                    <div className="">
                                        <h4 className='lg:text-[14px] text-[10px] font-medium text-[#2C2C2C]'>120</h4>
                                        <h5 className='lg:text-[10px] text-[7px] font-normal text-[#808080]'>Participant</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="">
                                    <button className='text-xs font-semibold text-[#FFF] px-[25px] py-3 bg-[#245D51] rounded-[10px]'>Buy Now</button>
                                </div>
                                <div className="">
                                    <h5 className='lg:text-[24px] text-[16px] font-semibold'>$120 <span className='text-[#808080] lg:text-[12px] text-[8px] font-normal'>/25 Video</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:!w-[95%] bg-[#FAFAFA] rounded-[15px] pb-5 lg:px-0 px-6">
                        <div className="relative">
                            <div className="lg:h-[249px] h-[166px]">
                                <video className='h-full w-full' src={Video} type="video/mp4" controls poster={PcThumb2}></video>
                            </div>
                        </div>
                        <div className="px-[27px]">
                            <h4 className='lg:text-[24px] text-[15px] font-semibold text-[#2C2C2C] pb-5 pt-[27px]'>Learn basic database structure</h4>
                            <div className="flex justify-between pb-[41px]">
                                <div className="flex gap-x-[10px] items-center">
                                    <div className="">
                                        <img src={PcCard2} alt="popular_course_mentor" />
                                    </div>
                                    <div className="">
                                        <h4 className='lg:text-[14px] text-[10px] font-medium text-[#2C2C2C]'>Roynaldo Jr</h4>
                                        <h5 className='lg:text-[10px] text-[7px] font-normal text-[#808080]'>Data Science</h5>
                                    </div>
                                </div>
                                <div className="flex gap-x-[10px] items-center">
                                    <div className="">
                                        <img src={PcCardCommon} alt="popular_course_mentor" />
                                    </div>
                                    <div className="">
                                        <h4 className='lg:text-[14px] text-[10px] font-medium text-[#2C2C2C]'>55</h4>
                                        <h5 className='lg:text-[10px] text-[7px] font-normal text-[#808080]'>Participant</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="">
                                    <button className='text-xs font-semibold text-[#FFF] px-[25px] py-3 bg-[#245D51] rounded-[10px]'>Buy Now</button>
                                </div>
                                <div className="">
                                    <h5 className='lg:text-[24px] text-[16px] font-semibold'>$180 <span className='text-[#808080] lg:text-[12px] text-[8px] font-normal'>/20 Video</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:!w-[95%] bg-[#FAFAFA] rounded-[15px] pb-5 lg:px-0 px-5">
                        <div className="relative">
                            <div className="lg:h-[249px] h-[166px]">
                                <video className='h-full w-full' src={Video} type="video/mp4" controls poster={PcThumb3}></video>
                            </div>
                        </div>
                        <div className="px-[27px]">
                            <h4 className='lg:text-[24px] text-[15px] font-semibold text-[#2C2C2C] pb-5 pt-[27px]'>Create dynamic website with basic php</h4>
                            <div className="flex justify-between pb-[41px]">
                                <div className="flex gap-x-[10px] items-center">
                                    <div className="">
                                        <img src={PcCard3} alt="popular_course_mentor" />
                                    </div>
                                    <div className="">
                                        <h4 className='lg:text-[14px] text-[10px] font-medium text-[#2C2C2C]'>Markus Low</h4>
                                        <h5 className='lg:text-[10px] text-[7px] font-normal text-[#808080]'>Programer</h5>
                                    </div>
                                </div>
                                <div className="flex gap-x-[10px] items-center">
                                    <div className="">
                                        <img src={PcCardCommon} alt="popular_course_mentor" />
                                    </div>
                                    <div className="">
                                        <h4 className='lg:text-[14px] text-[10px] font-medium text-[#2C2C2C]'>58</h4>
                                        <h5 className='lg:text-[10px] text-[7px] font-normal text-[#808080]'>Participant</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="">
                                    <button className='text-xs font-semibold text-[#FFF] px-[25px] py-3 bg-[#245D51] rounded-[10px]'>Buy Now</button>
                                </div>
                                <div className="">
                                    <h5 className='lg:text-[24px] text-[16px] font-semibold'>$135 <span className='text-[#808080] lg:text-[12px] text-[8px] font-normal'>/20 Video</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </Container>
        </section>
    )
}

export default PopularCourse
