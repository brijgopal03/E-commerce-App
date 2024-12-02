import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(item.id));
    toast.success("Product removed from cart");
  }

  return (
    <div className="flex gap-6 border-b pb-4 mb-4">
      {/* Product Image */}
      <div className="h-32 w-32 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-contain rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex-grow ml-5">
        <h1 className="text-gray-800 font-semibold text-lg">
          {item.title}
        </h1>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {item.description}
        </p>
        <div className="flex justify-between mt-5">
     <p className="text-green-600 font-bold text-lg mt-3">
          ${item.price.toFixed(2)}
        </p>
      {/* Delete Button */}
      <div
        onClick={removeFromCart}
        className="flex items-center justify-center w-10 h-10 bg-red-100 hover:bg-red-200 rounded-full cursor-pointer"
      >
        <MdDelete className="text-red-500 text-xl" />
      </div>
     </div>
       
      </div>
    
    </div>
  );
};

export default CartItem;
