const Navbar = ({setCartBtn,cartBtn,carts}) => {
  return (
    <div className="max-w-screen-xl mx-auto bg-slate-300 rounded-md">
      <div className="flex justify-between py-6 px-4">
        <h3 className="text-3xl">Products</h3>
        <div className="indicator pr-6">
          <span className="indicator-item badge badge-secondary mr-6">{carts.length}</span>
          <button onClick={()=>setCartBtn(!cartBtn)} className="">Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
