import { createSlice } from "@reduxjs/toolkit";

interface Navigation {
  origin: any;
  destination: any;
  travelTimeInformation: any;
}

const initialState: Navigation = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state: any, action: any) => {
      state.origin = action.payload;
    },
    setDestination: (state: any, action: any) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state: any, action: any) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

export const selectOrigin = (state: any) => state.nav.origin;
export const selectDestination = (state: any) => state.nav.destination;
export const selectTravelTimeInformation = (state: any) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
