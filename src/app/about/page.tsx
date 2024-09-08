import Image from 'next/image';
import React from 'react';
import Breadcrumb from '../components/themebuilder/03-Breadcrumb';
import NavSide from '../components/themebuilder/04-NavSide/01-NavSide';
import ActiveMenu from '../components/themebuilder/04-NavSide/03-ActiveMenu';
import BorderNav from '../components/themebuilder/04-NavSide/02-BorderNav';
import NormalMenu from '../components/themebuilder/04-NavSide/04-NormalMenu';
import Button from '../components/elements/Button';
import { HiChevronRight, HiFolderOpen } from 'react-icons/hi';

export default function AboutPage() {
    return (
        <>
            {/* <!-- Content --> */}
            <div className="w-full flex justify-center items-center">
                <div className="flex flex-col md:flex-row justify-center items-start p-5 w-[95%] lg:w-[85%]">
                    <div className="lg:hidden">
                        <Breadcrumb
                            title="Dashboard"
                            link={{ name: "Home", href: "/" }}
                            link2={{ name: "Introducing LUDESC" }}
                        />
                    </div>
                    <div className="md:w-4/5 w-full flex flex-col md:flex-row justify-center items-start  ">
                        {/* <!-- Item 2 (Image) --> */}
                        <div className="w-full md:w-[50%] md:order-last">
                            <div>
                                <Image src="/images/HeroImage.png" alt="Hero Image" width={400} height={300} />
                            </div>
                        </div>
                        {/* <!-- Item 1 (Text) --> */}
                        <div className="w-full md:w-[50%] ">
                            <div>
                                <h1 className="text-[#1C738E] text-[46px] font-bold mb-[-5px]">AI-Powered</h1>
                                <p className="text-[#1c8e72] text-[38px] font-bold">Lung Disease Screening & Telemedicine</p>
                                <p className="text-[#828383] text-[15px] font-300 mb-5 mt-2 leading-[1.6rem]">
                                    System to help patients and medical personnel in early screening for lung
                                    disease with AI technology in the form of self-screening and telemedicine quickly, easy
                                    and cheap.
                                </p>
                                <div className='flex items-center space-x-4'>
                                    <button className="bg-[#1C738E] py-2.5 px-7 text-[16px] text-white font-semibold">Join
                                        Now</button>
                                    <button
                                        className="text-[#1C738E] hover:text-[#ffffff] hover:bg-[#1C738E] py-2.5 px-3 text-[16px] font-medium flex justify-center">
                                        <span className="material-symbols-outlined mr-3 text-[44px] ">
                                            play_circle
                                        </span>Watch Video
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- NavSidebar --> */}
                    <NavSide>
                        <div className="w-full flex justify-strat items-center  text-[#1c738e]">
                        <p className='text-[14px] font-semibold mr-2'>Home</p>
                        <HiChevronRight size={15} className='fill-current w-4 h-4 ' />
                        </div>
                        <ActiveMenu number="01" href="/introducing" text="Introducing LUDESC" />
                        <BorderNav />
                        <NormalMenu number="02" href="/vision" text="Our Vision" />
                        <NormalMenu number="03" href="/products" text="Products" />
                        <NormalMenu number="04" href="/team" text="Team" />
                    </NavSide>
                </div>
            </div>
        </>
    );
}
