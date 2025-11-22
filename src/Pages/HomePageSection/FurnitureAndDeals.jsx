const FurnitureAndDeals = () => {
  return (
    <section className="max-w-[1350px] mx-auto">
      <div className="flex gap-10 flex-col md:flex-row">
        {/*----------------Left-----------Side----------------*/}
        <div className="relative w-[700px] h-[400px] bg-[url('https://i.ibb.co.com/wZ3CRRS9/imgi-59-ad-discount.jpg')] bg-cover bg-center overflow-hidden">
          <div className="absolute inset-0 bg-black/100 opacity-50"></div>

          <div className="absolute flex inset-0 p-8 text-white ">
            <div className="border-[1px] px-10 py-20 w-full">
              <p className="text-sm font-semibold uppercase tracking-widest mb-2">
                Hot Deal Furniture
              </p>
              <h1 className="text-[40px] font-bold leading-tight mb-2">
                Furniture Limit Offer
              </h1>
              <h2 className="text-3xl font-bold mb-6 text-[40px]">30% Off</h2>

              <button
                href="#"
                className="block w-fit border border-white px-6 py-4 px-8 text-sm font-medium hover:bg-white hover:text-black transition"
              >
                Buy Now →
              </button>
            </div>
          </div>
        </div>

        {/*----------------Right-----------Side----------------*/}
        <div className="relative w-[700px] h-[400px] bg-[url('https://i.ibb.co.com/RGKCfqp3/left.jpg')] bg-cover bg-center overflow-hidden">
          <div className="absolute inset-0 bg-black/100 opacity-50"></div>

          <div className="absolute flex inset-0 p-8 text-white ">
            <div className="border-[1px] px-10 py-20 w-full">
              <p className="text-sm font-semibold uppercase tracking-widest mb-2 ">
                Hot Deal Furniture
              </p>
              <h1 className="text-[40px] font-bold leading-tight mb-2">
                Furniture Limit Offer
              </h1>
              <h2 className="text-3xl font-bold mb-6 text-[40px]">30% Off</h2>

              <button
                href="#"
                className="block w-fit border border-white px-6 py-4 px-8 text-sm font-medium hover:bg-white hover:text-black transition"
              >
                Buy Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurnitureAndDeals;
