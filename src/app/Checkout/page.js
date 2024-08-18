"use client"
import React from 'react'
import Bill from '../pages/bill'
import { connect } from 'react-redux'
function page(props) {
    return (
        <div className='container w-full flex flex-row p-4 justify-between'>
            <div className='w-2/3 flex flex-col border border-black'>
                <div className='w-full bg-white mb-2 p-2 border border-black'>LOGIN</div>
                <div className='w-full bg-white mb-2 p-2 border border-black'>DELIVERY ADDRESS</div>
                <div className='w-full bg-white mb-2 border border-black'>
                    <div className='w-full bg-indigo-600 text-white py-2'>ORDER SUMMARY</div>
                    {props.cart.length > 0 ?
                        <div className='w-full'>
                            {
                                props.cart.map((product, index) => {
                                    return (
                                        <>
                                            <div className='container flex flex-col justify-between bg-white  p-4 border-t border-l border-r border-black sm:flex-row'>
                                                <div className='w-[100px] h-[100px]'><img src={product.image} alt={product.name} /></div>
                                                <div>
                                                    <div>{product.name.length > 41 ? product.name.substring(0, 41) + "..." : product.name}</div>
                                                    <span className='font-xl'>₹{Math.round(product.price * (1 - (product.discount / 100)))}</span>
                                                    <span className='mx-2 line-through text-stone-600'>₹{product.price}</span>
                                                    <span className='text-lime-600 mx-2'>{product.discount}%off</span>

                                                </div>
                                                <div>Delivery By Fri Aug 23 | <span className='text-lime-600'>Free</span></div>
                                            </div>
                                            <div className='flex flex-col justify-between bg-white border-b border-l border-r border-black px-4 py-2 sm:flex-row '>
                                                <div className='flex items-center '>
                                                    <button disabled={(props.productQuantity[product._id] == 1) ? true : false} onClick={() => { props.decreaseQuantity(product) }}
                                                        className={(props.productQuantity[product._id] == 1) ? 'w-6 h-6 bg-gray-300 rounded-full border border-indigo-600 flex items-center justify-center mr-2' : 'w-6 h-6 bg-gray-400 rounded-full border border-indigo-600 flex items-center justify-center mr-2'}>-</button>
                                                    <input type='numeric' onChange={(e) => { setInputValue(e.target.value) }} value={props.productQuantity[product._id]} className='w-8 h-6 border border-black mr-2' />
                                                    <button onClick={() => { props.increaseQuantity(product) }} className='w-6 h-6 bg-gray-400 rounded-full border border-indigo-600 flex items-center justify-center mr-2'>+</button>
                                                </div>
                                                <div onClick={() => { props.removeItem(product); props.removeQuantity(product) }} className='bg-black p-2 rounded text-white'><button >Remove</button></div>
                                                {/* <div onClick={() => { props.removeItem(product) }} className='bg-black p-2 rounded text-white'><button >Remove</button></div> */}
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        : <div className='p-2 bg-slate-300'>Your Checkout has no items</div>}

                </div>
                <div className='w-full bg-white mb-2 border border-black'>PAYMENT OPTIONS</div>
            </div>
            {props.cart.length > 0 ?
                <div className='w-1/3 border border-black'>
                    <Bill />
                </div>
                : ""}

        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state.count,
    cart: state.cart,
    productQuantity: state.productQuantity
});

const mapDispatchToProps = (dispatch) => ({
    removeItem: (product) => dispatch({ type: "Remove-Cart", payload: product }),
    increaseQuantity: (product) => dispatch({ type: "Add-Product-Quantity", payload: product }),
    decreaseQuantity: (product) => dispatch({ type: "Decrease-Product-Quantity", payload: product }),
    removeQuantity: (product) => dispatch({ type: "Remove-Product-Quantity", payload: product }),
});

export default connect(mapStateToProps, mapDispatchToProps)(page)
