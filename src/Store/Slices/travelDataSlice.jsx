import { createSlice } from "@reduxjs/toolkit";



const travelDataSlice = createSlice({
    name: 'TravelData',
    initialState: {
        country: [],
        city:[],
        travelName:[],
        travelPlans: [],
        travelResult: []
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
        setTravelResult(state,action) {
            state.travelResult = action.payload;
        }
      
    }
});

export const { setCountry, setCity, setTravelName, setTravelResult } = travelDataSlice.actions;
export default travelDataSlice.reducer;
