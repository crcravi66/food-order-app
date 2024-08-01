import { createContext, useReducer } from "react";


const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
})

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.item.findIndex(
            (item) => item.id === action.item.id
        );

        const updatedItems = [...state.item];

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                ...existingItem,
                quaitity: existingItem.quaitity + 1
            }
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return { ...state, items: updatedItems };
    }

    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.item.findIndex(
            (item) => item.id === action.id
        );
        const existingCartItem = state.item[existingCartItemIndex];

        const updatedItems = [...state.item];

        if (existingCartItem.quaitity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);

        } else {
            const updatedItem = { ...existingCartItem, quaitity: existingCartItem.quaitity - 1 };
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return { ...state, items: updatedItems };

    }

    return state;
}

export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { item: [] })

    function addItem(item) {
        dispatchCartAction({ type: 'ADD_ITEM', item })
    }
    function removeItem(id) {
        dispatchCartAction({ type: 'REMOVE_ITEM', id })
    }

    const cartContext = {
        items: cart.items,
        addItem: addItem,
        removeItem: removeItem,
    }
    console.log(cartContext);

    return <CartContext.Provider value={cartContext} >{children}</CartContext.Provider>
}

export default CartContext;















