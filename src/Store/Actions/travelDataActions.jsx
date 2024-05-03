import * as api from "../api/foursquare";
import { setTravelPlans, setTravelResult } from "../Slices/travelDataSlice";

export const getPlaceData = (location) => async (dispatch) => {
    try {
        const data = await api.getPlaceData(location);
        dispatch(setTravelResult(data));
    } catch (error) {
        console.log("getPlaceData", error)
    }
};

