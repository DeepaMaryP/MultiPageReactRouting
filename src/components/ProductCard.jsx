function ProductCard(props) {
    return (
        <div className="p-2">
            {<div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full h-60" src={props.item.image} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.item.name}</div>
                    <p className="text-gray-700 text-base">
                        {props.item.category}
                    </p>
                    <div className="flex items-baseline text-gray-900 dark:text-black">
                        <span className="text-3xl font-semibold">₹</span>
                        <span className="text-3xl font-extrabold tracking-tight">{props.item.price}</span>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                        </div>
                    </div>

                </div>
            </div>
            }
        </div>
    )
}

export default ProductCard
