import {configureStore, } from "@reduxjs/toolkit"
import itemsSlice from "./itemSlice";
import fetchStatus from "./fetchStatus";
import BagSlice from "./BagSlice";

const mytraStore=configureStore({
  reducer:{
    items:itemsSlice.reducer,
    fetchStatus:fetchStatus.reducer,
    bag: BagSlice.reducer
  }
})

export default mytraStore;