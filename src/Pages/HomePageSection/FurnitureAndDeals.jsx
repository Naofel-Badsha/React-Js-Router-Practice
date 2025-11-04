
const FurnitureAndDeals = () => {
    return (
        <div className="max-w-[1350px] mx-auto">
            <div className="flex gap-10 items-center justify-between">
                {/*------------Left--------------*/}
                <div className="">
                    <img src="https://i.ibb.co.com/VWzKPmzL/imgi-60-ad-timer.jpg" className="w-full" />

                    <div className="px-10">
                        <div className="bg-[#B18B5E] w-[520px] p-6">
                            <div className="border-[1px] border-white p-14">
                                <h3 className="text-[16px] font-bold text-white uppercase">HOT DEAL furniture</h3>
                                <h1 className="text-[40px] font-bold text-white mt-7">Live Furniture <br /> Your Love</h1>
                                <button className='mt-6 bg-white py-3.5 px-8 font-bold hover:bg-sky-100 text-[#18181b] hover:text-[#B18B5E] transition-all duration-300 cursor-pointer'>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*------------Right--------------*/}
                <div className="flex-1">
                    <img src="https://i.ibb.co.com/VWzKPmzL/imgi-60-ad-timer.jpg" className="w-full" />

                </div>
            </div>
        </div>
    );
};

export default FurnitureAndDeals;