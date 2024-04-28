import { createSlice } from "@reduxjs/toolkit";



const travelDataSlice = createSlice({
    name: 'TravelData',
    initialState: {
        country: [],
        city:[],
        travelName:[],
        travelPlans: []
    },
    reducers: {
        setCountry(state, action) {
            state.country = action.payload;
        },
        setCity(state, action) {
            state.city = action.payload;

        },
        setTravelName(state, action) {
            state.travelName = action.payload;
        },
      
    }
});

export const { setCountry, setCity, setTravelName } = travelDataSlice.actions;
export default travelDataSlice.reducer;
