import React from 'react'
import { connect } from 'react-redux';
function Bill(props) {
    return (
        <div className='w-1/ h-fit bg-white p-2 border border-stone-600'>
            <h1 className='text-slate-600'>PRICE DETAILS</h1>
            <hr />
            <div className='flex justify-between p-4'>
                <div >Price({props.cart.length} item)</div>
                <div>₹{props.originalPrice}</div>
            </div>
            <div className='flex justify-between p-4'>
                <div>Discount</div>
                <div className='text-lime-600'>-₹{props.discount}</div>
            </div>
            <div className='flex justify-between p-4'>
                <div>Delivery Charges</div>
                <div className='text-lime-600'>Free</div>
            </div>
            <hr className='border-dashed p-4' />
            <div className='flex justify-between p-4'>
                <div className='font-bold'>Total Amount</div>
                <div className='font-bold'>₹{props.originalPrice - props.discount}</div>
            </div>
            <hr className='border-dashed p-4' />
            <p className='p-4 text-lime-600'>You Will Save Upto ₹{props.discount} On This Order.</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state.count,
    cart: state.cart,
    originalPrice:state.originalPrice,
    discount:state.discount,
    productQuantity:state.productQuantity
  });

export default connect(mapStateToProps)(Bill);
