
const OfferSection = () => {
    return (
        <div className="max-w-[1350px] mx-auto">
            <div className="flex gap-10 items-center justify-between">
                {/*----------Services--------1-------*/}
                <div className="flex gap-10 items-center justify-between w-full bg-[#EBF9FD] px-16 pb-16">
                    <div>
                        <h5 className="text-[16px] text-[#B18B5E] font-semibold">GET 30% OFF</h5>
                        <h2 className="capitalize text-[28px] leading-9 text-[#161616] font-medium">wicker hanging chairs</h2>
                        <button className='mt-6 bg-[#B18B5E] border border-[#B18B5E] py-3 px-6 font-bold hover:border-[#B18B5E] hover:bg-transparent text-white hover:text-[#B18B5E] transition-all'>BUY NOW</button>
                    </div>
                    <div>
                        <img className="w-[250px]" src="https://i.ibb.co.com/mVmhnCyt/imgi-57-off-01-removebg-preview.png" alt="" />
                    </div>
                </div>

                {/*----------Services--------2-------*/}
                <div className="flex gap-10 items-center justify-between w-full bg-[#EBF9FD] p-16">
                    <div className="">
                        <h5 className="text-[16px] text-[#B18B5E] font-semibold">GET 15% OFF</h5>
                        <h2 className="capitalize text-[28px] leading-9 text-[#161616] font-medium">Brasslegged Armchair</h2>
                        <button className='mt-6 bg-[#B18B5E] border border-[#B18B5E] py-3 px-6 font-bold hover:border-[#B18B5E] hover:bg-transparent text-white hover:text-[#B18B5E] transition-all'>BUY NOW</button>
                    </div>
                    <div>
                        <img className="w-[240px]" src="https://i.ibb.co.com/hJDt0QPx/imgi-58-off-02-removebg-preview.png" alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default OfferSection;