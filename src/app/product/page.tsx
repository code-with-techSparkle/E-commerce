import React from 'react'
import ProductView from './_component/ProductView'
import Footer from '../../../component/footer/Footer'
import Navbar from '../../../component/Navbar'

function page() {
    return (
        <div>
            <Navbar />
            <div className='p-16 max-xl:p-8 max-md:px-6'>
                <ProductView />
            </div>
            <Footer />
        </div>
    )
}

export default page
