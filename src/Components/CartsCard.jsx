
const CartsCard = ({cart}) => {
    const {ProductName,Img,quantity
    }=cart
    return (
        <div className="grid grid-cols-3 items-center h-20 border border-rose-400 rounded-md my-4">
            <h1 className="text-2xl font-semibold ml-4"> {ProductName}</h1>
            <p className="text-center text-2xl"><span>quantity:</span>{quantity}</p>
            <div className="flex justify-end"><img className="h-16 w-16 rounded-full mr-4" src={Img} alt="" /></div>

        </div>
    );
};

export default CartsCard;