import { configureStore } from '@reduxjs/toolkit';
import travelDataSlice from './Slices/travelDataSlice';

const store = configureStore({
  reducer: {
    travelData: travelDataSlice,
   
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

});

export default store;