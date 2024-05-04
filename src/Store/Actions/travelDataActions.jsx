import * as api from "../api/foursquare";
import { setTravelPlans, setTravelResult } from "../Slices/travelDataSlice";

export const getPlaceData = (location) => async (dispatch) => {
    try {
        const data = await api.getPlaceData(location);
        dispatch(setTravelResult(data));
    } catch (error) {
        console.log("getPlaceData", error);
    }
};

export const travelCreate = (travelName, country, city, data) => async (dispatch) => {
    try {
        const travelPlans = { travelName, country, city, data };
        dispatch(setTravelPlans(travelPlans));
    } catch (error) {
        console.error("Error in travelCreate:", error);
    }
};
