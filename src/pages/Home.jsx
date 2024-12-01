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
    {loading && <Spinner />}
    {!loading && posts.length > 0 && posts.map((product) => (
      <Product key={product.id} post = {product} />
    ))}
  </div>
);

};

export default Home;
