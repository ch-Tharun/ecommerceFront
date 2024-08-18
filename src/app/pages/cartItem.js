import React, { useState } from 'react'
import { connect } from 'react-redux'


function CartItem(props) {
    const [showModal, setShowModal] = useState(false);
    const handleRemoveClick = () => {
        setShowModal(true);
    };
    const confirmRemove = (product) => {

        props.removeItem(product)
        props.removeQuantity(product)
        setShowModal(false);

    };

    const cancelRemove = () => {
        setShowModal(false);

    };
    return (
        <>

            <div className='container flex flex-col justify-between bg-white  p-4 border-t border-l border-r border-black sm:flex-row'>
                <div className='w-[100px] h-[100px]'><img src={props.product.image} alt={props.product.name} /></div>
                <div>
                    <div>{props.product.name.length > 41 ? props.product.name.substring(0, 41) + "..." : props.product.name}</div>
                    <span className='font-xl'>₹{Math.round(props.product.price * (1 - (props.product.discount / 100)))}</span>
                    <span className='mx-2 line-through text-stone-600'>₹{props.product.price}</span>
                    <span className='text-lime-600 mx-2'>{props.product.discount}%off</span>

                </div>
                <div>Delivery By Fri Aug 23 | <span className='text-lime-600'>Free</span></div>
            </div>
            <div className='flex flex-col justify-between bg-white border-b border-l border-r border-black px-4 py-2 sm:flex-row '>
                <div className='flex items-center '>
                    <button disabled={(props.productQuantity[props.product._id] == 1) ? true : false} onClick={() => { props.decreaseQuantity(props.product) }}
                        className={(props.productQuantity[props.product._id] == 1) ? 'w-6 h-6 bg-gray-300 rounded-full border border-indigo-600 flex items-center justify-center mr-2' : 'w-6 h-6 bg-gray-400 rounded-full border border-indigo-600 flex items-center justify-center mr-2'}>-</button>
                    <input type='numeric' onChange={(e) => { setInputValue(e.target.value) }} value={props.productQuantity[props.product._id]} className='w-8 h-6 border border-black mr-2' />
                    <button onClick={() => { props.increaseQuantity(props.product) }} className='w-6 h-6 bg-gray-400 rounded-full border border-indigo-600 flex items-center justify-center mr-2'>+</button>
                </div>
                {/* <div onClick={() => { props.removeItem(props.product); props.removeQuantity(props.product) }} className='bg-black p-2 rounded text-white'><button >Remove</button></div> */}
                <div onClick={handleRemoveClick} className='bg-black p-2 rounded text-white'><button >Remove</button></div>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[400px]">
                        <h2 className="text-xl font-bold mb-4">Confirm Removal</h2>
                        <p>Are you sure you want to remove this item from the cart?</p>
                        <div className="flex justify-end mt-6">
                            <button
                                onClick={cancelRemove}
                                className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2">
                                Cancel
                            </button>
                            <button
                                onClick={() => { confirmRemove(props.product) }}
                                className="bg-red-600 text-white px-4 py-2 rounded">
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
