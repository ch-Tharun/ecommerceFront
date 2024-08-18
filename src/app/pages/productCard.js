"use client"

import { useRouter } from "next/navigation";

export default function ProductCard(props) {
    const router = useRouter();
    function navigateToProductDetails(prodId) {
        router.push(`/ProductDetails/${prodId}`)
    }

    return (
        
        <div onClick={() => navigateToProductDetails(props.product._id)} key={props.product._id} className=" bg-white hover:text-indigo-600 border p-4 rounded cursor-pointer text-wrap">
            <img src={props.product.image} alt={props.product.name} className="w-full h-48 object-cover mb-4" />
            <div className="flex items-center flex-wrap bg-white">
                <h2 className="text-lg font-semibold ">{props.product.name.length > 41 ? props.product.name.substring(0, 41) + "..." : props.product.name}</h2>
                
                <div className="font-bold px-2">₹{Math.round(props.product.price * (1 - (props.product.discount / 100)))}</div>
                <div className="text-stone-500 text-sm px-1 line-through">₹{props.product.price}</div>

                {props.product.discount > 0 && (
                    <div className="text-red-500 px-2">{props.product.discount}%off</div>
                )}
                
            </div>
        </div>
    );
}
