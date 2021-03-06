import React from 'react';
import ServiceSection from '../ServiceSection/ServiceSection';

import './HeroSection.css'
const HeroSection = () => {
    return (
        <section>
            <div className='hero-section'>
                <div className='container mx-auto md:p-32 '>
                    <div className=''>
                        <h1 className='md:leading-snug md:text-8xl md:mb-14 md:font-black text-center text-white '>করার মালিক একমাত্র আল্লাহ আমি তো চেষ্টা মাত্র </h1>
                        <h2 className='text-2xl font-bold text-center w-9/12 mx-auto text-white'>আপনাকে কিভাবে সাহায্য করতে পারি ? আপনার যদি কোন ধরনের সমাধানের প্রয়োজন হয়, অনুগ্রহ করে পড়ুন এবং স্ক্রোল করুন | আপনার পথ তারার একটি রোড-ম্যাপ দ্বারা আলোকিত হয় এটাই আমাদের কাম্য | </h2>
                    </div>
                </div>
            </div>
            <ServiceSection></ServiceSection>
        </section>
    );
};

export default HeroSection;