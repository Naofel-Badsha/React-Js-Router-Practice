import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../../../../public/dashboardProduct.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-[#B18B5E] text-[18px] font-medium">Id</th>
              <th className="text-[#B18B5E] text-[18px] font-medium">
                Images{" "}
              </th>
              <th className="text-[#B18B5E] text-[18px] font-medium">
                Product Name
              </th>
              <th className="text-[#B18B5E] text-[18px] font-medium">Size</th>
              <th className="text-[#B18B5E] text-[18px] font-medium">Price</th>
              <th className="text-[#B18B5E] text-[18px] font-medium">Stock</th>
              <th className="text-[#B18B5E] text-[18px] font-medium">
                Category
              </th>
              <th className="text-[#B18B5E] text-[18px] font-medium">Rating</th>
              <th className="text-[#B18B5E] text-[18px] font-medium">Action</th>
            </tr>
          </thead>

          {products.map((product) => (
            <tr product={product.index + 1}>
              <th>{product.index}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={product.images}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div></div>
                </div>
              </td>

              <td>{product.ProductName}</td>
              <td>{product.Size}</td>
              <td>{product.Price}</td>
              <td>{product.Stock}</td>
              <td>{product.Category}</td>
              <td>{product.Rating}</td>

              <th className="space-x-3">
                <button className="btn btn-ghost btn-xs bg-orange-400 text-white cursor-pointer">
                  <FaEdit className="text-xl" />
                </button>
                <button className="btn btn-ghost btn-xs bg-sky-400 text-white cursor-pointer">
                  <FaRegEye className="text-xl" />
                </button>
                <button className="btn btn-ghost btn-xs bg-red-500 text-white cursor-pointer">
                  <MdDelete className="text-xl" />
                </button>
              </th>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Products;
