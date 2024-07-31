
const CartsCard = ({cart}) => {
    console.log(cart)
    const {ProductName,Img}=cart
    return (
        <div className="flex justify-between items-center h-20 border border-rose-400 rounded-md my-4">
            <h1 className="text-2xl font-semibold ml-4"> {ProductName}</h1>
            <img className="h-16 w-16 rounded-full mr-4" src={Img} alt="" />

        </div>
    );
};

export default CartsCard;