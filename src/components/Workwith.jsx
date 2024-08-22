import React from 'react'
import Container from './Container'
import WorkWith1 from '../assets/ww1.png'
import WorkWith2 from '../assets/ww2.png'
import WorkWith3 from '../assets/ww3.png'
import WorkWith4 from '../assets/ww4.png'
import WorkWith5 from '../assets/ww5.png'

const Workwith = () => {
  return (
    <section id='' className='lg:sec_pad pt-[50px]'>
        <Container>
            <div className="text-center">
                <h2 className='lg:heading heading_res'>Trusted more than <span className='text-[#CB8461]'>100+</span> in the world</h2>
                <p className='lg:para lg:w-[580px] w-[285px] para_res mx-auto pb-[25px]'>they have asked us more than 3 times to teach their employees about various things. to improve their skills</p>
                <div className="flex lg:justify-around justify-between flex-wrap gap-[25px]">
                    <img src={WorkWith1} alt="work_with_1" />
                    <img src={WorkWith2} alt="work_with_2" />
                    <img src={WorkWith3} alt="work_with_3" />
                    <img src={WorkWith4} alt="work_with_4" />
                    <img src={WorkWith5} alt="work_with_5" className='mx-auto' />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Workwith
