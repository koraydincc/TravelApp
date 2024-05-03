import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    country: [],
    city:[],
    travelName:[],
    travelPlans: [],
    travelResult: []
};

const travelDataSlice = createSlice({
    name: 'travel',
    initialState,
    reducers: {
        setCountry(state, action) {
            return {
                ...state,
                country: action.payload
            };
        },
        setCity(state, action) {
            return {
                ...state,
                city: action.payload
            };
        },
        setTravelName(state, action) {
            return {
                ...state,
                travelName: action.payload
            };
        },
        setTravelResult(state, action) {
            return {
                ...state,
                travelResult: action.payload
            };
        }
    }
});

export const { setCountry, setCity, setTravelName, setTravelResult } = travelDataSlice.actions;
export default travelDataSlice.reducer;
