import React from 'react'
import Image from 'next/image'
import callImg from '@/assets/contactus/call.png'
import locImg from '@/assets/contactus/location.png'
import mailImg from '@/assets/contactus/mail.png'

const Contact = () => {
    return (

        <div>
        <div className='lg:text-xl text-center'>
            CONTACT US
        </div>
        <div className="text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
            Have any queries or suggestions? Get in touch with us.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 justify-center">
            <div className="flex flex-col items-center text-center">
                <Image src={locImg} className='h-9 w-9' />
                <div className='mt-3'>
                    <a href='https://maps.app.goo.gl/DrmQqhmA2Jo4MfPaA' target='_blank'><p className="text-gray-500">LTCE, koparkhairane, Maharashtra, India</p></a>
                    <p className="text-gray-500">400705</p>
                </div>
            </div>
    
            <div className="flex flex-col items-center text-center">
                <Image src={callImg} className='h-10 w-10' />
                <div className='mt-3'>
                    <a className='text-gray-500 ' href="tel:+91 9372179120">+91 93721 79120</a>
                    <br />
                    <a className='text-gray-500' href="tel:+91 99695 96965">+91 99695 96965</a>
                </div>
            </div>
    
            <div className="flex flex-col items-center text-center">
                <Image src={mailImg} className='h-10 w-10' />
                <div className='mt-3'>
                    <a className='text-gray-500' href="mailto:techvidya1905@gmail.com">techvidya1905@gmail.com</a>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Contact