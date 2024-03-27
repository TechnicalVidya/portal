
import { CarouselDemo } from '@/components/carousel'
import React from 'react'
import img1 from '@/assets/1.jpg'
import img2 from '@/assets/2.jpg'
import img3 from '@/assets/3.jpg'



const Zephyr = () => {
    const imgArray = [img1, img2, img3]
    return (
        <div>
            <div className='flex items-center justify-center'>   <CarouselDemo imgArray={imgArray} />
            </div>

        </div>
    )
}

export default Zephyr