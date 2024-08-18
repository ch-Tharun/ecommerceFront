"use client"
import { Carter_One } from 'next/font/google'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import CartItem from '../pages/cartItem';
import { useRouter } from 'next/navigation';
import Bill from '../pages/bill';


function page(props) {
  const router = useRouter();
  console.log(props.productQuantity)
  return (
    <>
      {/* <div role="alert" className="relative block w-full px-4 py-4 text-base text-white bg-gray-900 rounded-lg font-regular"
        style={{ opacity: 1 }} >
        <div className="mr-12 ">A simple alert for showing message.</div>
      </div> */}

      <div className='container flex justify-around mx-8 my-8'>
        {props.cart.length > 0 ? (<>
          <div className='w-2/3'>{
            props.cart.map((product, index) => {
              return (
                <>
                  <CartItem product={product} />
                </>
              )
            })
          }
            <div className='w-full h-[42px] bg-white '>
              <button onClick={()=>{router.push('/Checkout')}} className='p-2 bg-black text-white float-start sm:float-end w-full'>Place Order</button>
            </div>
          </div>
          <Bill />
        </>) : (<div className='container flex flex-col justify-center items-center bg-gray-300 py-8'>
          <div className='mb-4 '><img height={300} width={300} src='https://img.freepik.com/premium-photo/shopping-cart-icon-filled-with-products-laptop-screen-white-background_883101-10234.jpg' /></div>
          <div className='font-bold text-xl mb-4'>No items in the cart</div>
          <div className='text-sm mb-4'>Add items to it now!</div>
          <div onClick={() => { router.push("/") }}><button className='bg-indigo-600 w-[120px] border rounded'>Shop Now</button></div>

        </div>)}

      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  count: state.count,
  cart: state.cart,
  originalPrice: state.originalPrice,
  discount: state.discount,
  productQuantity: state.productQuantity
});

export default connect(mapStateToProps)(page)
