import React from 'react'
import ProductsPage from './ProductsPage'

function AboutPage() {
    return (
        <div>            
            <p className='mx-8 p-4 mt-4  bg-slate-200 border rounded-xl h-1/2 flex items-center text-xl'>
                Arcadia Lifestyle Store is your one-stop destination for curated home essentials, fashion, wellness, and everyday living. We bring together quality, style, and functionality to help you create a space and life you love. Whether you're upgrading your home or finding the perfect gift, Arcadia offers a thoughtful range of products that reflect elegance and simplicity.
            </p>
            {<ProductsPage/>}
        </div>
    )
}

export default AboutPage
