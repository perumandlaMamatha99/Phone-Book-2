import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: localStorage.getItem("cartItems1") ? JSON.parse(localStorage.getItem("cartItems1")) : []
}
const cartSlice = createSlice({
    name: "cart1",
    initialState,
    reducers: {
        addToContacts(state, action) {
            state.cartItems.push(action.payload);
            localStorage.setItem("cartItems1", JSON.stringify(state.cartItems));
        },
       
        addToFavourite(state, action) {
            console.log(action.payload);
            state.cartItems.map((item, index) => {
                if (index === action.payload) {
                    item.isFav = (item.isFav + 1) % 2;
                    console.log(item);
                    return item;
                }
                return item;
            })
            localStorage.setItem("cartItems1", JSON.stringify(state.cartItems));
            return state;
           
        },

    }
})
export const { addToFavourite, addToContacts } = cartSlice.actions;
export default cartSlice.reducer;