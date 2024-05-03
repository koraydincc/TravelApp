import * as api from "../api/foursquare";
import { setTravelResult } from "./slice";

export const getPlaceData = (location) => async (dispatch) => {
    try {
        const data = await api.getPlaceData(location);
        dispatch(setTravelResult(data));
    } catch (error) {
        console.log("getPlaceData", error)
    }
};