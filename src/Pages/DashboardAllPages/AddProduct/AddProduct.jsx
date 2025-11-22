import React from "react";

const AddProduct = () => {
  return (
    <div>
      <h1 className="text-xl font-medium">Add Product</h1>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10">
        {/*------------Left--------Side-----------*/}
        <div className="bg-white shadow p-5 h-[300px] rounded-xl">
          <img className="w-[100px] m-auto"
            src="https://i.ibb.co.com/BHMYGjWL/Ferrero-Premium-Vintage-Chair-maroon-removebg-preview.png"
            alt=""
          />

          <h1 className="text-[18px] text-black">
            Fashion Men , Women & Kid's
          </h1>
          <div className="flex gap-5 items-center">
            <p>Created By :</p>
            <p>Stock :</p>
            <p>ID :</p>
          </div>
          <div className="flex gap-5 items-center">
            <p>Seller</p>
            <p>46233</p>
            <p>FS16276</p>
          </div>
          <hr className="mt-4" />
          <div className="mt-5 space-x-3">
            <button className="btn bg-orange-600 text-white">
              Create Categpry
            </button>
            <button className="btn bg-sky-600 text-white">Cancel</button>
          </div>
        </div>

        {/*------------Right--------Side-----------*/}
        <div>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-xl">General Information</h1>

              <form className="fieldset">
                {/*=================1=================*/}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
                  {/*----------Input-----------1-----------*/}
                  <span>
                    <label className="label  mt-2 text-[16px]">
                      Category Title
                    </label>
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="Category Title"
                    />
                  </span>
                  {/*----------Input-----------2-----------*/}
                  <span>
                    <label className="label  mt-2 text-[16px]">
                      Created By
                    </label>
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="Which browser do you use"
                      list="browsers"
                    />
                    <datalist id="browsers">
                      <option value="Admin"></option>
                      <option value="Other"></option>
                      <option value="Saler"></option>
                    </datalist>
                  </span>
                </div>

                {/*=================2=================*/}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
                  {/*----------Input-----------3-----------*/}
                  <span>
                    <label className="label text-[16px] mt-2">Stock</label>
                    <input
                      type="number"
                      className="input w-full mt-1"
                      placeholder="Stock"
                    />
                  </span>
                  {/*----------Input-----------4-----------*/}
                  <span>
                    <label className="label mt-2 text-[16px]">Tag ID</label>
                    <input
                      type="number"
                      className="input w-full mt-1"
                      placeholder="Tag ID"
                    />
                  </span>
                </div>

                {/*=================3=================*/}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
                  {/*----------Input-----------5-----------*/}
                  <span>
                    <label className="label text-[16px] mt-2">Meta Title</label>
                    <input
                      type="number"
                      className="input w-full mt-1"
                      placeholder="Meta Title"
                    />
                  </span>
                  {/*----------Input-----------6-----------*/}
                  <span>
                    <label className="label mt-2 text-[16px]">
                      Meta Tag Keyword
                    </label>
                    <input
                      type="number"
                      className="input w-full mt-1"
                      placeholder="Meta Tag Keyword"
                    />
                  </span>
                </div>

                {/*=================4=================*/}
                <div>
                  {/*----------Input-----------7-----------*/}
                  <span>
                    <label className="label text-[16px] mt-2">Meta Title</label>
                    <textarea
                      className="textarea w-full"
                      placeholder="Bio"
                    ></textarea>
                  </span>
                  {/*----------Input-----------7-----------*/}
                  <span className="mt-6">
                    <label className="label text-[16px] mt-2">Meta Title</label>
                    <input type="file" className="file-input w-full" />
                  </span>
                </div>

                <button className="btn btn-neutral mt-4">Add Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
