import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    country: null,
    city: null,
    travelName: [],
    travelPlans: [],
    travelResult: [],
    selectedTravel: []
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
        },
        setSelectedTravel(state,action) {
            state.selectedTravel = action.payload
        }
    }
});

export const { setCountry, setCity, setTravelName, setTravelResult, setTravelPlans,setSelectedTravel } = travelDataSlice.actions;
export default travelDataSlice.reducer;