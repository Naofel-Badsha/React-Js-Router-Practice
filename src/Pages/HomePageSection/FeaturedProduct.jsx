import React, { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";

import '../../../public/HeroSection.css'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';




const FeaturedProduct = () => {

    const [featureds, setFeatureds] = useState([]);
    const fetchData=async()=>{
        try{
            const res= await fetch('./../../../public/Featureds.json');
            console.log(res)
            const data=res.json()
            console.log(data)
            setFeatureds(data)

        }
        catch(error){
            console.log(error);
            
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='max-w-[1350px] mx-auto py-28'>
            <div>
                <h3 className='uppercase text-center m-auto bg-[#ebe5d9] text-[#B18B5E] w-fit py-1 px-4 font-bold'>top sale</h3>
                <h1 className='text-6xl text-center text-[#161616] sm:leading-16 md:text-6xl md:leading-16 lg:text-[52px] font-medium lg:leading-20 '>Featured Product</h1>
            </div>


            <div className='mt-10'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    freeMode={true}
                    loop={true}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <div>
                        {
                            featureds.map(featured => <div key={featured.id}>
                                {/*-------------Slider---card---1--------------*/}
                                <SwiperSlide>
                                    <div className='bg-[#f5f1e6] w-[300px] m-auto py-8'>
                                        <div class="relative  p-6 rounded-2xl w-72 group cursor-pointer transition-all duration-500 ">
                                            {/* <!-- Discount Badge --> */}
                                            <span class="absolute top-4 left-4 bg-[#B18B5E] text-white text-sm font-semibold px-3 py-1 rounded-full">
                                                {featured.offer}
                                            </span>
                                            <div className='mt-10 flex items-center justify-center'>
                                                <img
                                                    src={featured.images}
                                                    class="w-48 mx-auto transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>

                                            {/* <!-- Hidden Icons (visible when card hovered) --> */}
                                            <div class="flex justify-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                                <button class="bg-[#B18B5E] p-3 rounded-full text-white hover:bg-[#b8a67c] transition">
                                                    <FaRegHeart className='text-2xl text-white' />
                                                </button>
                                                <button class="bg-[#B18B5E] p-3 rounded-full text-white hover:bg-[#b8a67c] transition">
                                                    <FaRegEye className='text-2xl text-white' />
                                                </button>
                                                <button class="bg-[#B18B5E] p-3 rounded-full text-white hover:bg-[#b8a67c] transition">
                                                    <IoBagHandle className='text-2xl text-white' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-3'>
                                        <h2 className='text-xl font-bold mt-3'>{featured.name}</h2>
                                        <div className='flex items-center gap-4'>
                                            <div className="rating rating-xs gap-1">
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                                            </div>
                                            <span>({featured.rating}) </span>
                                        </div>
                                        <p className='text-[#b18b5e] mt-2 font-semibold text-[18px]'>USD {featured.price}</p>
                                    </div>
                                </SwiperSlide>
                            </div>)
                        }
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default FeaturedProduct;