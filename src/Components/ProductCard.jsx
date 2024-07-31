

const ProductCard = ({ product,setCarts}) => {
  const {Img,ProductName,Description,Price} = product
  const handleAddToCart = () => {
    setCarts((prevCarts) => [...prevCarts, product]);
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={Img}
            alt=""
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center ">
          <div className="">
            <h2 className="card-title">{ProductName}</h2>
            <p> <span>price:</span>{Price}</p>
          </div>
          <p>{Description}</p>
          <div className="card-actions">
            <button onClick={handleAddToCart} className="border border-rose-400 py-2 rounded-md px-3 text-rose-400 hover:text-white hover:bg-red-400">Add Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
