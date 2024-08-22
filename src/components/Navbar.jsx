import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Logo from '../assets/logo.png'
import { PiGridFourFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    let [show, setShow] = useState(false)
    let barref = useRef()

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (barref.current.contains(e.target)) {
                setShow(!show)
            } else {
                setShow(false)
            }
        })
    }, [show])
    return (
        <nav className='fixed items-center top-0 left-0 w-full bg-[#245D51] z-50 px-2 lg:px-0 py-3'>
            <Container>
                <div className="flex justify-between items-center">
                    <div className=''>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="items-center">
                        <ul className={`lg:flex lg:flex-row flex flex-col gap-y-3 gap-x-[30px] pl-5 pt-5 lg:pt-0 text-[#FFFFFF99] text-lg font-normal lg:static fixed duration-700  ${show == true ? "bg-[rgb(38,38,38)] top-0 left-0 w-1/2 h-full py-2" : "top-0 left-[-250px] h-full"}`}>
                            <li className='text-white flex justify-between items-center lg:hidden'>Menu <RxCross2 className='mr-5' /></li>
                            <li><a className='lg:border-none border-b-2 text-white border-[#767676] rounded-sm' href="#">Home</a></li>
                            <li><a className='lg:border-none border-b-2 border-[#767676] rounded-sm' href="#">Course</a></li>
                            <li><a className='lg:border-none border-b-2 border-[#767676] rounded-sm' href="#">Subscribe</a></li>
                            <li><a className='lg:border-none border-b-2 border-[#767676] rounded-sm' href="#">About</a></li>
                            <li><a className='lg:border-none border-b-2 border-[#767676] rounded-sm' href="#">Testimoni</a></li>
                            <div className="items-center lg:hidden">
                                <div className="text-lg font-normal text-center font-pops text-white">
                                    <a href="#" className='px-6 py-2 border-[#CB8461] border-[1px] mr-8 rounded-lg block mb-3'>Login</a>
                                    <a className='px-6 py-2 border-[#CB8461] border-[1px] mr-8 rounded-lg block' href="#">Register</a>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className="items-center hidden lg:block">
                        <div className="flex gap-x-5 items-center text-lg font-normal font-pops text-white">
                            <a href="#">Login</a>
                            <a className='px-11 py-[7px] bg-[#CB8461] rounded-lg' href="#">Register</a>
                        </div>
                    </div>
                    <div className="lg:hidden cursor-pointer text-white text-4xl" ref={barref}>
                        <PiGridFourFill />
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar