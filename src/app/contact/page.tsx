import React from 'react'
import Hero from './_component/Hero'
import Navbar from '../../../component/Navbar'
import Form from './_component/Form'
import Footer from '../../../component/footer/Footer'

function page() {
    return (
        <div className='w-full bg-white text-black'>
            <Navbar />
            <Hero />
            <div className='w-full px-16 max-xl:px-8 max-md:px-6'>
                <Form />
            </div>
            <Footer />
        </div>
    )
}

export default page
