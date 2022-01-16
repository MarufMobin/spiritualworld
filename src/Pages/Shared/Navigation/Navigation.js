import React from 'react';
import './Navigation.css'

const Navigation = () => {
    return (
        <section>
            <div className='navigation-section text-white'>
                <div className='container mx-auto'>
                    <div className='flex py-5 sticky'>
                        <div className='inner-navigation-logo justify-self-start'>logo</div>
                        <div className='inner-navigation-munu '>
                            <ul className='flex justify-end'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Blogs</li>
                                <li>Servies</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navigation-second-div'>
                <div className='container mx-auto md:p-32 '>
                    <div className=''>
                        <h1 className='md:leading-tight md:text-7xl md:mb-14 md:font-black text-center text-white '>করার মালিক একমাত্র আল্লাহ আমি তো এক চেষ্টা মাত্র </h1>
                        <h2 className='text-2xl font-bold text-center w-9/12 mx-auto text-white'>আপনাকে কিভাবে সাহায্য করতে পারি ? আপনার যদি কোন ধরনের সমাধানের প্রয়োজন হয়, অনুগ্রহ করে পড়ুন এবং স্ক্রোল করুন | আপনার পথ তারার একটি রোড-ম্যাপ দ্বারা আলোকিত হয় এটাই আমাদের কাম্য | </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navigation;