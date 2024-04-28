import { configureStore } from '@reduxjs/toolkit';
import { setTravelData } from './Slices/travelDataSlice';


const store = configureStore({
  reducer: {
        travelData: setTravelData,
  }
});

export default store;