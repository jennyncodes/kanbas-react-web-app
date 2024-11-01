import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
    assignment: {
      name: "", 
      description: "",
      points: "",
      course: "",
      _id: "",
      dueDate: new Date().toISOString().slice(0, 16),
      availableFrom: new Date().toISOString().slice(0, 16),
      availableUntil: new Date().toISOString().slice(0, 16)
  }
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments.push(action.payload);
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => 
        assignment._id === action.payload._id ? action.payload : assignment
      );
  },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
  },
    
  },
});
export const { addAssignment, deleteAssignment, 
  updateAssignment, setAssignment} =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;