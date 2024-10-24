import React from 'react';

import coverImage from '../assets/logolike.png';
import backImage1 from '../assets/flag.png';
import iceage from '../assets/iceage.png';
import camelot from '../assets/camelot.png';
import gladiator from '../assets/gladiator.png';
import '../Flipbook.css'; // Make sure to import the CSS file correctly
import openbook from '../assets/openbookkmob.png';

const pages = [
    { id: "c1", title: "Apple", text: "LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM", backImage: iceage },
    { id: "c2", title: "Apple", text: "LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM", backImage: camelot },
    { id: "c3", title: "Apple", text: "LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM", backImage: gladiator },
];

const FlipBook = () => {
    return (
        <div className="erin booked flex flex-col justify-center items-center relative">
            <img src={openbook} alt="" className='w-[1000px]' />
            <div className="book absolute border-2 border-black">
                {pages.map((page) => (
                    <input type="checkbox" id={page.id} key={`checkbox-${page.id}`} />
                ))}

                <div className='lg:w-[330px] lg:h-[550px] flex justify-center items-center'>
                    <img src={coverImage} alt="Cover" className='w-32 lg:w-72 h-auto' />
                </div>

                <div className="flip-book relative lg:w-[330px] lg:h-[550px]">
                    {pages.map((page, index) => (
                        <div className="flip" id={`p${index + 1}`} key={`page-${index}`}>
                            <div className="back border-r-[1px] border-[#B57134]">
                                <img src={page.backImage} alt={`Page ${index + 1} Back`} className='w-80 h-auto' />
                                <label className="back-btn text-4xl" htmlFor={page.id}>
                                    Back
                                </label>
                            </div>
                            <div className="front border-l-[1px] border-[#B57134]">
                                <h2 className='text-4xl text-[#680000]'>{page.title}</h2>
                                <p className='text-[#680000] text-xl'>{page.text}</p>
                                <label className="next-btn text-4xl" htmlFor={page.id}>
                                    Next
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FlipBook;
