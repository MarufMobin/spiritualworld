import React from 'react';
import logoImg from '../../../media/images/logo.png';
import './MainManu.css'

const MainManu = () => {
    return (
        <div className='mainmanu text-white'>
            <div className='container mx-auto'>
                <div className='flex py-5 sticky items-center'>
                    <div className='inner-manu-logo justify-self-start flex items-center'>
                        <img src={logoImg} alt="" className='w-12' /><span className='ml-2 text-2xl'> SpiritualWorld</span>
                    </div>
                    <div className='inner-main-munu'>
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
    );
};

export default MainManu;