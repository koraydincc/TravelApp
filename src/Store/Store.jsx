import { createStore, applyMiddleware, compose } from "redux";
import {thunk} from 'redux-thunk'; // Import thunk from 'redux-thunk'
import travelDataReducer from "./Slices/travelDataSlice";

function saveToLocalStorage(state) {
  try {
    const serializedTravelPlans = JSON.stringify(state.travelPlans);
    const serializedSelectedTravel = JSON.stringify(state.selectedTravel);
    
    window.localStorage.setItem('travelPlans', serializedTravelPlans);
    window.localStorage.setItem('selectedTravel', serializedSelectedTravel);
  } catch(e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedTravelPlans = window.localStorage.getItem('travelPlans');
    const serializedSelectedTravel = window.localStorage.getItem('selectedTravel');

    if (serializedTravelPlans === null || serializedSelectedTravel === null) return undefined;

    return {
      travelPlans: JSON.parse(serializedTravelPlans),
      selectedTravel: JSON.parse(serializedSelectedTravel)
    };
  } catch(e) {
    console.log(e);
    return undefined;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

const store = createStore(
  travelDataReducer, 
  persistedState,
  composeEnhancers(applyMiddleware(thunk)) 
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
