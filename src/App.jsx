import { useState } from "react";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import CartsCard from "./Components/CartsCard";


const App = () => {
    const [carts,setCarts]= useState([])
    const [cartBtn,setCartBtn]=useState(true)
    
    console.log(cartBtn)
    return (
        <div className="max-w-screen-xl mx-auto mt-2">
            <Navbar setCartBtn={setCartBtn} cartBtn={cartBtn} carts={carts}></Navbar>

            {cartBtn ? <Products setCarts={setCarts}></Products> :  <div>
            {
                carts.map((cart,index)=>(<CartsCard key={index} cart={cart}></CartsCard>))
            }
            </div>}
        </div>
    );
};

export default App;