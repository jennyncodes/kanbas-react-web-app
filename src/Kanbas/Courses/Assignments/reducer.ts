import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignments:<any>[],
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
    addAssignment: (state, {payload: assignment}) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        ...assignment,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
		},
    deleteAssignment: (state, {payload: assignmentId}) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== assignmentId
      );
    },
    updateAssignment: (state, {payload: newAssignment}) => {
      state.assignments = state.assignments.map((assignment:any) => 
        newAssignment._id === assignment._id ? newAssignment : assignment
      ) as any;
  },
    selectAssignment: (state, { payload: assignmentId}) => {
      state.assignment = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
  },
    
  },
});
export const { addAssignment, deleteAssignment, 
  updateAssignment, selectAssignment, setAssignments} =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;