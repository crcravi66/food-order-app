import { createContext, useReducer } from "react";


const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
})

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        // add item cart
    }
    if (action.type === 'REMOVE_ITEM') {
        // remove item cart
    }

}

export function CartContextProvider({ children }) {
    useReducer()

    return <CartContext.Provider>{children}</CartContext.Provider>
}

export default CartContext;















