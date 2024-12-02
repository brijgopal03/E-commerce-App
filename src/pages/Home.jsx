import { useEffect } from "react";
import { useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";



const Home = () => {
 const API_URL = "https://fakestoreapi.com/products";
 const [loading, setLoading] = useState(false);
const [posts, setPosts] = useState([]);

  async function fetchProductData() {
  setLoading(true);
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    setPosts(data);
  } catch (error) {
    console.error(error);
    setPosts([]);
  }

  setLoading(false);
  }

 useEffect(() => {
   fetchProductData();
 },[])

 return (
  <div>
    {loading && <Spinner  />}
    {!loading && posts.length > 0 &&  <div className="grid xs:grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
      {
        posts.map((product) => (
      <Product key={product.id} post = {product} />
    ))
      }
    </div> }
    {!loading && posts.length === 0 && <h1 className="flex justify-center items-center">No Products Found</h1>}
  </div>
);

};

export default Home;
