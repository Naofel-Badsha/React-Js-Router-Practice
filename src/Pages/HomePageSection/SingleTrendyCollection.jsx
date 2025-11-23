import { FaRegEye, FaRegHeart } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";

const SingleTrendyCollection = ({ trendy }) => {
  const { offer, images, name, rating, price } = trendy;

  return (
    <section>
      <div className="bg-[#f5f1e6]  m-auto py-8">
        <div class="relative  p-6 rounded-2xl w-72 group cursor-pointer transition-all duration-500 ">
          {/* <!-- Discount Badge --> */}
          <span class="absolute top-4 left-4 bg-[#B18B5E] text-white text-sm font-semibold px-3 py-1 rounded-full">
            {offer}
          </span>
          <div className="mt-10 flex items-center justify-center">
            <img
              src={images}
              class="w-48 mx-auto transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* <!--------- Hidden Icons (visible when card hovered)--------- --> */}

          <div class="flex justify-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <button class="bg-[#B18B5E] p-3 rounded-full text-white hover:bg-[#b8a67c] transition">
              <FaRegHeart className="text-2xl text-white" />
            </button>
            <button class="bg-[#B18B5E] p-3 rounded-full text-white hover:bg-[#b8a67c] transition">
              <FaRegEye className="text-2xl text-white" />
            </button>
            <button class="bg-[#B18B5E] p-3 rounded-full text-white hover:bg-[#b8a67c] transition">
              <IoBagHandle className="text-2xl text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-3">
        <h2 className="text-xl font-bold mt-3">{name}</h2>
        <div className="flex items-center gap-4">
          <div className="rating rating-xs gap-1">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              aria-label="2 star"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              aria-label="3 star"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              aria-label="4 star"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              aria-label="5 star"
            />
          </div>
          <span>({rating}) </span>
        </div>
        <p className="text-[#b18b5e] mt-2 font-semibold text-[18px]">
          USD {price}
        </p>
      </div>
    </section>
  );
};

export default SingleTrendyCollection;
