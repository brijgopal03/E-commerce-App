import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";


const Product = ({key ,post}) => {

const {cart} = useSelector((state) => state);

const dispatch = useDispatch();

const addCart = () => {
  dispatch(add(post));
  toast.success("Product added to cart");
}

const removeCart = () => {
  dispatch(remove(post.id));
  toast.error("Product removed from cart"); }


  return <div className=" shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex flex-col justify-between items-center hover:scale-110 transition duration-300 ease-in hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] gap-3 mt-10 p-4 ml-5 rounded-xl">
  <div>
    <p className="">{post.title}</p>
  </div>
    <div>
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
    </div>
    <div className="h-[180px]">
      <img src={post.image} alt="" className="h-full w-full" />
    </div>
    <div className="flex justify-between gap-12 items-center w-full mt-5">
    <div>
      <p className="text-green-600 font-semibold">${post.price}</p>
  </div>
{
cart.some((item) => item.id === post.id) ? (
  <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
  hover:bg-gray-700
  hover:text-white transition duration-300 ease-in" onClick={removeCart}>Remove Item</button>
) : (
  <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
  hover:bg-gray-700
  hover:text-white transition duration-300 ease-in" onClick={addCart}>Add to Cart</button>
)
}
    </div>
  </div>
};

export default Product;
