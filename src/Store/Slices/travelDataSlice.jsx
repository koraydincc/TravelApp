import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    country: null,
    city: null,
    travelName: [],
    travelPlans: [],
    travelResult: []
};

const travelDataSlice = createSlice({
    name: 'travel',
    initialState,
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
        setTravelResult(state, action) {
            state.travelResult = action.payload;
        },
        setTravelPlans(state, action) {
            state.travelPlans = action.payload;
        }
    }
});

export const { setCountry, setCity, setTravelName, setTravelResult, setTravelPlans } = travelDataSlice.actions;
export default travelDataSlice.reducer;