import {createSlice} from "@reduxjs/toolkit"

const fetchStatus = createSlice({
  name:'fethfal',
  initialState: {
    fetchDone: false, // false: 'PENDING' and true: 'DONE'
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    }
  }
});

export const FatchItemAction =fetchStatus.actions; 
export default fetchStatus;