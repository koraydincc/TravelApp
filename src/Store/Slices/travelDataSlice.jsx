import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    country: null,
    city: null,
    travelName: [],
    travelPlans: [],
    travelResult: [],
    selectedTravel: [],
    selectedTravelPlace: [],
    selectedTravelPlacePhoto: []

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
        },
        setSelectedTravelPlace(state,action) {
            state.selectedTravelPlace = action.payload
        },
        setSelectedTravelPlacePhoto(state,action) {
            state.selectedTravelPlacePhoto = action.payload
        }
    }
});

export const {setSelectedTravelPlacePhoto, setCountry,setSelectedTravelPlace, setCity, setTravelName, setTravelResult, setTravelPlans,setSelectedTravel } = travelDataSlice.actions;
export default travelDataSlice.reducer;