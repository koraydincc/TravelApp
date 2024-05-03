import axios from "axios";

export const getPlaceData = async (location) => {
    try {
        const locationString = location.location; 

        const response = await axios.get(`https://api.foursquare.com/v3/places/search?limit=50&near=${locationString }`, {
            headers: {
                "Accept-Language": "tr",
                "accept": "application/json",
                "Authorization": "fsq3K09rcSqI11V2b4J3PKADIblzI9/+4QTijASINK0i6jQ="
            }
        });
        console.log("API Response:", response.data); // API'den gelen veriyi kontrol etmek için
        return response.data;
    } catch (error) {
        console.error("getPlaceData:", error);
        throw error; // Hata yeniden fırlatılıyor
    }
};
