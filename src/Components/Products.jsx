import ProductCard from "./ProductCard";
import img1 from "../assets/download (1).jpeg"
import img2 from "../assets/download (2).jpeg"
import img3 from "../assets/images (5).jpeg"
import img4 from "../assets/images (6).jpeg"
import img5 from "../assets/images (7).jpeg"


const Products = ({setCarts}) => {

    const products = [
        {
          id:1,
          ProductName: "Smartphone X1",
          Price: 699.99,
          Img: img2,
          Description: "The latest Smartphone X1 with a stunning display and high-performance processor."
        },
        {
          id:2,
          ProductName: "Wireless Headphones Pro",
          Price: 199.99,
          Img: img1,
          Description: "Experience exceptional sound quality with these wireless  ."
        },
        {
          id:3,
          ProductName: "4K Ultra HD TV",
          Price: 999.99,
          Img: img3,
          Description: "Enjoy crystal-clear visuals and vibrant colors with our 4K Ultra HD TV."
        },
        {
          id:4,
          ProductName: "Smartwatch Series 7",
          Price: 299.99,
          Img: img4,
          Description: "Stay connected and track your fitness with the latest Smartwatch Series 7."
        },
        {
          id:5,
          ProductName: "phone-x2",
          Price: 79.99,
          Img: img5,
          Description: "Compact and powerful Bluetooth speaker with excellent sound ."
        }
      ];
      
    return (
        <div className="my-8 max-w-screen-xl mx-auto">
            <h3 className="text-3xl text-center">All Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-10">
            {products.map((product,index)=>(<ProductCard key={index} product={product} setCarts={setCarts}></ProductCard>))}
            </div>
        </div>
    );
};

export default Products;