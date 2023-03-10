// import the data from the list
import { housesData } from '../list/Data'

// initial state set as the imported data
const initaialState = housesData;

// function to check whether the price of the house is greater than or equal to 100000
const checkPrice = (housesData) => {
return housesData.price >= 100000;
}

// function to check whether the type of house is Apartment
const checkType = (housesType) => {
return housesType.type==="Apartament";
}

// action creator function to filter houses by price
const filterByPrice = () => {
return {
type: "filterByPrice"
}
}

// action creator function to filter houses by type
const filterByType = () => {
return {
type: "filterByType"
}
}

// reducer function to filter and display the list based on the type of action dispatched
const DisplayList = (state = initaialState, action) => {
switch (action.type) {
case "filterByPrice":
return state.filter(checkPrice);
case "filterByType":
return state.filter(checkType);
default:
return state;
}
}

// exporting action creator functions and reducer function
export { filterByPrice, filterByType };
export default DisplayList;