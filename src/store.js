import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});
let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 2 },
  ],
  reducers: {
    addCount(state, action) {
      let 번호 = state.findIndex((a) => a.id == action.payload);
      state[번호].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
    deleteItem(state, action){
      state.splice(action.payload,1);
    }
  },
});
export let { addCount, addItem,deleteItem } = cart.actions;
export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
