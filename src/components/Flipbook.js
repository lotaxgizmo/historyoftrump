import React from 'react';

import coverImage from '../assets/logolike.png';
import backImage1 from '../assets/flag.png';
import iceage from '../assets/iceage.png';
import camelot from '../assets/camelot.png';
import gladiator from '../assets/gladiator.png';
import mongolia from '../assets/mongolia.png';
import '../Flipbook.css'; // Make sure to import the CSS file correctly
import openbookk from '../assets/openbookk.png';
import openbookkmob from '../assets/openbookkmob.png';

const pages = [
    { id: "c1", title: "PREFACE", text: "HERE LIES THE HISTORY OF TRUMP", backImage: iceage },
    { id: "c2", title: "ICE AGE", text: "Trump led the fiercest mammoth-riding tribe, claiming he 'knew more about glaciers than anyone.' He conquered the frozen lands with bold strategies and unmatched confidence.", backImage: camelot },
    { id: "c3", title: "CAMELOT", text: "In the Colosseum, Trump dominated every fight, declaring himself the greatest gladiator. 'The crowd loves me,' he’d say, basking in his golden armor and glory.", backImage: gladiator },
    { id: "c4", title: "GLADIATOR", text: "As a knight, Sir Trump boasted of winning countless jousts and vowed to make Camelot 'great again,' seeking the Holy Grail as his ultimate prize.", backImage: mongolia },
    // { id: "c5", title: "GLADIATOR", text: "FF", backImage: mongolia },
];

const FlipBook = () => {
    return (
        <div className="erin booked flex flex-col justify-center items-center relative my-5 mb-20">
            <img src={openbookk} alt="" className='w-[1000px] hidden lg:flex' />
            <img src={openbookkmob} alt="" className='w-[1000px] flex lg:hidden' />
            <div className=" ml-[-20px] lg:ml-0 book absolute dborder-2 border-black">
                {pages.map((page) => (
                    <input type="checkbox" id={page.id} key={`checkbox-${page.id}`} />
                ))}

                <div className='lg:w-[330px] lg:h-[550px] flex justify-center items-center '>
                    <img src={coverImage} alt="Cover" className='w-40 lg:w-72 h-auto mx-4' />
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
                                <p className='text-[#680000] text-lg lg:text-2xl'>{page.text}</p>
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
