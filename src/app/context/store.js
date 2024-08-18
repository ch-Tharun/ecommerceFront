import { createStore } from "redux";

const initial = {
    count: 0,
    originalPrice: 0,
    discount: 0,
    cart: [],
    productQuantity: {}
}


const reducer = (state = initial, action) => {

    switch (action.type) {
        case "Add-Cart":
            const itemExists = state.cart.find(item => item._id === action.payload._id);
            if (itemExists) {
                return {
                    ...state
                }
            }
            else {
                return {
                    ...state,
                    count: state.count + 1,

                    cart: [...state.cart, action.payload]
                }
            };
        case "Remove-Cart":
            const itemToRemove = state.cart.find(item => item._id === action.payload._id);

            if (!itemToRemove) {
                return state; // If the item isn't found in the cart, return the current state.
            }

            const updatedCart = state.cart.filter(item => item._id !== action.payload._id);
            const updatedOriginalPrice = state.originalPrice - (state.productQuantity[itemToRemove._id]*itemToRemove.price);

            // Recalculate the discount based on the updated original price
            const updatedDiscount = Math.round(updatedOriginalPrice * (itemToRemove.discount / 100));

            return {
                ...state,
                count: state.count > 0 ? state.count - 1 : 0,  // Prevent negative count
                originalPrice: updatedOriginalPrice,
                discount: updatedDiscount,
                cart: updatedCart
            };

        case "Add-Product-Quantity":
            const currentQuantity = state.productQuantity[action.payload._id] || 0;
            const newQuantity = currentQuantity + 1;

            // Calculate the price difference
            const priceDifference = action.payload.price;

            // Update the original price by adding the price of the product
            const updatedOriginalPriceForQuantity = state.originalPrice + priceDifference;

            // Recalculate the discount based on the updated original price
            const updatedDiscountForQuantity = Math.round(updatedOriginalPriceForQuantity * (action.payload.discount / 100));

            return {
                ...state,
                productQuantity: {
                    ...state.productQuantity,
                    [action.payload._id]: newQuantity
                },
                originalPrice: updatedOriginalPriceForQuantity,
                discount: updatedDiscountForQuantity
            };


        // return {
        //     ...state,

        //     productQuantity: { ...state.productQuantity, [action.payload._id]: (state.productQuantity[action.payload._id]) ? ++state.productQuantity[action.payload._id] : state.productQuantity[action.payload._id] = 1 }
        // };
        case "Decrease-Product-Quantity":

            const newcurrentQuantity = state.productQuantity[action.payload._id] || 0;

            // If the quantity is greater than 1, decrease it by 1
            if (newcurrentQuantity > 1) {
                const newQuantity = newcurrentQuantity - 1;

                // Calculate the price difference
                const priceDifference = action.payload.price;

                // Update the original price by subtracting the price of the product
                const updatedOriginalPrice = state.originalPrice - priceDifference;

                // Recalculate the discount based on the updated original price
                const updatedDiscount = Math.round(updatedOriginalPrice * (action.payload.discount / 100));

                return {
                    ...state,
                    productQuantity: {
                        ...state.productQuantity,
                        [action.payload._id]: newQuantity
                    },
                    originalPrice: updatedOriginalPrice,
                    discount: updatedDiscount
                };
            } else if (currentQuantity === 1) {
                // If the quantity is 1, remove the product from the cart entirely
                const updatedCart = { ...state.productQuantity };
                delete updatedCart[action.payload._id];

                // Subtract the price and recalculate the discount
                const updatedOriginalPrice = state.originalPrice - action.payload.price;
                const updatedDiscount = Math.round(updatedOriginalPrice * (action.payload.discount / 100));

                return {
                    ...state,
                    productQuantity: updatedCart,
                    originalPrice: updatedOriginalPrice,
                    discount: updatedDiscount
                };

                // return {
                //     ...state,
                //     productQuantity: { ...state.productQuantity, [action.payload._id]: (state.productQuantity[action.payload._id]) ? --state.productQuantity[action.payload._id] : state.productQuantity[action.payload._id] = 1 }
                // };
            }
        case "Remove-Product-Quantity":
            delete state.productQuantity[action.payload._id];
            return {
                ...state,
                productQuantity: { ...state.productQuantity }
            }
        default: return state;
    }

}

const store = createStore(reducer);
export default store;