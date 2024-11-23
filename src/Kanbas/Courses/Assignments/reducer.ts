import { createSlice } from "@reduxjs/toolkit";
import {assignments}  from "../../Database";


const initialState = {
    assignments,
    assignment: {
      _id: "1",
      title: "New Assignment", 
      description: "",
      points: "100",
      course: "RS101",
      dueDate: new Date().toISOString().slice(0, 16),
      availableFrom: new Date().toISOString().slice(0, 16),
      availableUntil: new Date().toISOString().slice(0, 16)
  }
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
			state.assignments = action.payload;
		},
    addAssignment: (state, action) => {
			state.assignments = [{...action.payload, _id: new Date().getTime().toString()}, ...state.assignments];
		},
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment:any) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      }
      );
  },
    selectAssignment: (state, action) => {
      state.assignment = action.payload;
  },
    
  },
});
export const { addAssignment, deleteAssignment, 
  updateAssignment, selectAssignment, setAssignments} =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;