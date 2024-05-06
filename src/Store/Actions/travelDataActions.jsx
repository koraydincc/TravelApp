import { notification } from "antd";
import * as api from "../api/foursquare";
import { setSelectedTravel, setSelectedTravelPlace, setSelectedTravelPlacePhoto, setTravelPlans, setTravelResult } from "../Slices/travelDataSlice";

export const getPlaceData = (location) => async (dispatch) => {
    try {
        if (!location) {
            console.log("Location is undefined, skipping API request.");
            return; 
        }

        return api.getPlaceData(location).then(data => {
            dispatch(setTravelResult(data))
        });
    } catch (error) {
        console.log("getPlaceData", error);
    }
};

export const getPlaceTips = (fsqID) => async (dispatch) => {
    try {
         if (!fsqID) {
             console.log("Undifenend fsqID")
             return
         }

         return api.getPlaceTips(fsqID).then(data => {
            dispatch(setSelectedTravelPlace(data))
         })
    } catch (error) {
        console.log("getPlaceTips" , error)
    }
}

export const getPlacePhoto = (fsqID) => async (dispatch) => {
    try {
         if (!fsqID) {
             console.log("Undifenend fsqID")
             return
         }

         return api.getPlacePhoto(fsqID).then(data => {
            dispatch(setSelectedTravelPlacePhoto(data))
         })
    } catch (error) {
        console.log("getPlaceTips" , error)
    }
}

export const selectedTravel = (data) => async (dispatch) => {
    try {
         console.log(data)
        await dispatch(setSelectedTravel(data));
   
    } catch (error) {
        notification.error({
            message: 'Hata',
            description: `${error}`
        });
    }
}


export const travelCreate = (travelName, country, city, data) => async (dispatch, getState) => {
    try {
        const newTravelPlan = { travelName, country, city, data };
        const currentTravelPlans = getState().travelPlans; 
        const updatedTravelPlans = { ...currentTravelPlans, [travelName.travelName]: newTravelPlan }; // Yeni seyahat planını ekleyerek güncelle
        dispatch(setTravelPlans(updatedTravelPlans)); 
    } catch (error) {
        console.error("Error in travelCreate:", error);
    }
};

export const deleteTravel = (travelName, data) => async (dispatch) => {
    try {
        console.log("data", data);
        const arrayData = Object.values(data)
        const newArray = arrayData.filter(item => item.travelName.travelName !== travelName);
         
        dispatch(setTravelPlans(Object.values(newArray)));
    } catch (error) {
        console.error('Error deleting travel:', error);
    }
}



