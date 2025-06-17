import HeroButton from '@/app/_component/HeroButton'
import Image from 'next/image'
import React from 'react'

function Form() {
    return (
        <div className='w-full pb-10 pt-20 max-md:pt-10 max-sm:pt-5'>
            <h2 className='text-4xl font-bold max-md:text-3xl text-center'>Contact us</h2>
            <p className='text-xl pt-3 text-center opacity-75'>Since 1963, we&apos;ve pioneered the creation of beautiful clothing and footwear for all the family.</p>
            <div className='flex justify-center items-center gap-6 w-full py-7 max-md:flex-col'>
                <div className='flex flex-col w-96 h-full text-md font-medium gap-2 rounded-3xl pt-3 max-md:w-full'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" placeholder='Inter Your Name' className='border px-4 py-2 font-bold rounded-lg' />
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder='Inter Your Email' className='border px-4 py-2 font-bold rounded-lg' />
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="messege" placeholder='Your Message' rows={5} className='border px-4 py-2 font-bold rounded-lg'></textarea>
                    <input type="button" value="Submit" className='border px-4 py-2 mt-2 font-bold rounded-lg bg-black text-white hover:bg-white hover:text-black duration-300' />
                </div>
                <div className='w-96 h-96 overflow-hidden rounded-3xl max-md:w-full object-cover'>
                    <Image src='https://ik.imagekit.io/qss3mmw4a/E-commerce/contact?updatedAt=1750149572748' alt='contact' width={1000} height={1000} className='hover:scale-110 duration-300'></Image>
                </div>
            </div>
        </div>
    )
}

export default Form
