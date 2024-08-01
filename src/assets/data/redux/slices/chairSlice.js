import { createSlice } from "@reduxjs/toolkit";
import arrChairs from "../../danhSachGhe.json";
const initialState = {
  arrChairs,
  selectedChairs: [
    {
      soGheChon: "",
      price: 75000,
      daDat: false,
    },
  ],
};

const chairSlice = createSlice({
  name: "chairs",
  initialState,
  reducers: {
    selectedChairs: (state, action) => {
      const selectedChair = {
        ...state.selectedChairs[0],
        soGheChon: action.payload,
      };
      state.selectedChairs.push(selectedChair);
      document.querySelector(`#${action.payload}`).style.backgroundColor =
        "green";
    },
    deleteSelectedChair: (state, action) => {
      let newArrSelectedChair = state.selectedChairs.filter(
        (item) => item.soGheChon != action.payload
      );
      state.selectedChairs = newArrSelectedChair;
      document.querySelector(`#${action.payload}`).style.backgroundColor =
        "white";
    },
    confirmSelectedChairs: (state, action) => {
      let newArrConfirm = action.payload.map((item, index) => ({
        ...item,
        daDat: true,
      }));
      arrChairs.forEach((item) => console.log(item));
      console.log(newArrConfirm);
    },
  },
});

export const { selectedChairs, deleteSelectedChair, confirmSelectedChairs } =
  chairSlice.actions;

export default chairSlice.reducer;
