import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = React.useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((total, item) => total + item.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {cart.length > 0 ? (
        <div className="max-w-5xl mx-auto bg-white rounded-md shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Cart Items Section */}
            <div className="flex-1">
              {cart.map((item, index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))}
            </div>

            {/* Summary Section */}
            <div className="w-full md:w-1/3  rounded-md p-4 shadow-sm flex flex-col justify-between">
              <div>
              <div className=" mb-4">
                <h2 className="text-md font-semibold text-gray-700">Your Cart</h2>
                <p className="text-4xl font-bold text-green-600">Summary</p>
              </div>
              <p className="text-gray-600 mb-3">
                <span className="font-bold">Total Items: </span>
                {cart.length}
              </p>
              </div>
             <div>
             <p className="text-gray-800 font-bold text-xl mb-4">
                Total Amount: ${totalAmount.toFixed(2)}
              </p>
              <button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition">
                Checkout Now
              </button>
             </div>
            </div>
          </div>
        </div>
      ) : (
        // Empty Cart Section
        <div className="text-center mt-20">
          <h1 className="text-2xl font-semibold text-gray-700">
            Cart is Empty
          </h1>
          <Link to="/">
            <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition">
              Go to Home
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
