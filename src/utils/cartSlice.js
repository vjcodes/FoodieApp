import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //Vanilla(older Redux) => DON'T MUTATE STATE
      // const newState = [...state];
      // newState.items.push(action.payload)
      // return newSatte

      //mutating the state here(in background it is using immer js library)
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      //   state = ["akshay"] //this won't work( here you are not mutating the state
      //   here you are assigning refernce to state )

      console.log(current(state)); // to log the state
      state.items.length = 0; // state=[]

      // or you can simply return the state value which you want to assign
      // return { items: []}; // original state object(whole) will be replaced by this new []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
