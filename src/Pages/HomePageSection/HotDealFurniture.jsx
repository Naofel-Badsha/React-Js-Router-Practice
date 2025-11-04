

const HotDealFurniture = () => {
    return (
        <div>
            <div className="flex gap-10 flex-col md:flex-row">
                {/*----------------Left-----------*/}
                <div className="bg-[#F5F1E6] py-28 px-10 flex-1 flex items-center justify-end">
                    <div className="bg-[#B18B5E] w-[520px]  p-6">
                        <div className="border-[1px] border-white p-14">
                            <h3 className="text-[16px] font-bold text-white uppercase">HOT DEAL furniture</h3>
                            <h1 className="text-[40px] font-bold text-white mt-7">Live Furniture <br /> Your Love</h1>
                            <button className='mt-6 bg-white py-3.5 px-8 font-bold hover:bg-sky-100 text-[#18181b] hover:text-[#B18B5E] transition-all duration-300 cursor-pointer'>BUY NOW</button>
                        </div>
                    </div>
                </div>

                {/*----------------Right-----------*/}
                <div className="flex-1">
                    <img src="https://i.ibb.co/MDGWt0Vb/imgi-15-bg-image.jpg" className="w-full h-full"/>
                </div>
            </div>
        </div>
    );
};

export default HotDealFurniture;