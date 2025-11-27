import React, { useEffect, useState } from "react";
import SingleTrendyCollection from "./SingleTrendyCollection";

const TrendyCollection = () => {
  const [trendys, setTrendys] = useState([]);
  useEffect(() => {
    fetch("../../../public/Featureds.json")
      .then((res) => res.json())
      .then((data) => setTrendys(data));
  }, []);
  console.log(setTrendys);

  return (
    <section className="max-w-[1350px] mx-auto py-28 px-5">
      <div className="flex items-center justify-between flex-wrap">
        {/*-------------Heading-------------*/}
        <div>
          <h3 className="uppercase text-center bg-[#ebe5d9] text-[#B18B5E] w-fit py-1 px-4 font-bold">
            THIS MONTH
          </h3>
          <h1 className="text-4xl mt-3 text-center text-[#161616] sm:leading-16 md:text-6xl md:leading-16 lg:text-[52px] font-medium lg:leading-20 ">
            Trendy Collection
          </h1>
        </div>

        {/*-------------Filter------Cullection----------*/}
        <div>
          <ul className="flex items-center justify-center gap-5 font-medium text-[#161616] cursor-pointer mt-10">
            <li>All Collection</li>
            <li>New In</li>
            <li>Top Rated</li>
            <li>Tensing Items</li>
          </ul>
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        {trendys.map((trendy) => (
          <SingleTrendyCollection
            key={trendy.id}
            trendy={trendy}
          ></SingleTrendyCollection>
        ))}
      </div>
    </section>
  );
};

export default TrendyCollection;
