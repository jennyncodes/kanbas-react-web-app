import { Link, useNavigate} from "react-router-dom";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { addAssignment, updateAssignment, selectAssignment} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as assignmentsClient from "./client";
import * as coursesClient from "../client";


export default function Editor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
//  const { assignment } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const {assignments} = useSelector((state: any) => state.assignmentsReducer)
  console.log(assignments)
  const [aaa, setAAA] = useState<any[]>([])
  const [assignment, setAssignment] = useState({
    title: "New Assignment",
    description: "Desription",
    points: 100,
    group:"",
    availableUntil: "",
    assignTo: "",
    dueDate: "",
    availableFrom: "",
  })

  useEffect(() => {
    if(aid === "new") {

    } else {
      const a = assignments.find((a:any)=> a._id === aid)
      if(a)
        setAssignment(a)
  }
  }, []);


    const saveAssignment = async () => {
      if (!cid) return;
      if(aid === "new") {
        await coursesClient.createAssignmentForCourse(cid, assignment).then((assignment) => {
          dispatch(addAssignment(assignment));
        })
      } else {
        await assignmentsClient.updateAssignment(assignment)
        dispatch(updateAssignment(assignment));
      }
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };
 

    return (

      <div id="wd-assignments-editor">
    <form>
        <label htmlFor="wd-title">Assignment Name</label>
        <input value={assignment.title} id="wd-title" className="form-control mb-2"
                 onChange={(e) => setAssignment({ ...assignment, title:  e.target.value })}/>
        
        <div className="mb-3">
          <div className="border p-3">
          <textarea defaultValue={assignment.description} className="form-control mb-2" id="wd-description"
             onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />

            <div className="row mb-3">
              <label htmlFor="wd-points" className="col-sm-2 col-form-label">
              Points</label>
              <div className="col-sm-10">
                <input defaultValue={assignment.points} id="wd-points" className="form-control mb-2"
                  onChange={ (e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}/>
              </div>
            </div>

          <div className="row mb-3">
            <label htmlFor="wd-group" className="col-sm-2 col-form-label">Assignment Group</label>
            <div className="col-sm-10">
              <select onChange = {(e) => setAssignment({ ...assignment, group: e.target.value})}
                className="form-select" id="wd-group" name="role">
                <option selected>ASSIGNMENTS</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
        </div>
        
        <div className="row mb-3">
          <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">Display Grade as</label>
          <div className="col-sm-10">
            {/*<select onChange = {(e) => dispatch(selectAssignment({ ...assignment, gradeAs: e.target.value}))} 
            className="form-select" id="wd-display-grade-as" name="role">
              <option value="Percentage">Percentage</option>
            </select>*/}
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Submission Type</label>
          <div className="col-sm-10">
           {/* <select onChange = {(e) => dispatch(selectAssignment({ ...assignment, submissionType: e.target.value}))} 
              className="form-select" id="wd-submission-type" name="role">
              <option value="Online">Online</option>
            </select>*/}
          
            <label className="col-form-label">Online Entry Options</label><br/>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="check-genre" id="wd-text-entry"/>
                <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label><br />
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="check-genre" id="wd-website-url"/>
                <label className="form-check-label" htmlFor="wd-website-url">Website URL</label><br />
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="check-genre" id="wd-media-recordings"/>
                <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label><br />
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="check-genre" id="wd-student-annotation"/>
                <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label><br />
                </div>

                <div className="form-check">
                <input className="form-check-input" type="checkbox" name="check-genre" id="wd-file-upload"/>
                <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label><br />
                </div>
              </div>
            </div>

            <div className="row mb-3">
          <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Assign</label>
          <div className="col-sm-10">
            <div className="border p-3">
                <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">Assign to </label>
                <input onChange = {(e) => setAssignment({ ...assignment, assignTo: e.target.value})} 
                  id="wd-assign-to" className="form-control mb-2" value="Everyone" />

                   
                    <label htmlFor="wd-due-date" className="col-sm-2 col-form-label">Due </label>
                    <div className="input-group mb-3">
                    <input onChange = {(e) => setAssignment({ ...assignment, dueDate: e.target.value})} 
                    type="date" id="wd-due-date" value="May 13, 2024, 11:59 PM" className="form-control"/><br/>
                    </div>

                    
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="wd-available-from" className="col-sm-3 col-form-label">Available from </label>
                        <div className="input-group mb-3">
                        <input onChange = {(e) => setAssignment({ ...assignment, availableFrom: e.target.value})}
                          type="date" id="wd-available-from" value="2024-5-06"  className="form-control mb-2"/>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <label htmlFor="wd-available-until" className="col-sm-3 col-form-label">Until </label>
                        <div className="input-group mb-3">
                        <input onChange = {(e) => setAssignment({ ...assignment, availableUntil: e.target.value})} 
                          type="date" id="wd-available-until" value={assignment.availableUntil} className="form-control mb-2" /> 
                        </div>
                      </div>      
                    </div> 

            <div className="d-flex justify-content-end mt-3">
              <button className="btn btn-light w-40" type="button" id="wd-cancel">
                <Link to={`/Kanbas/Courses/${cid}/Assignments`}>Cancel</Link>
              </button>
              <button onClick ={saveAssignment} className="btn btn-danger w-40" type="button" id="wd-save">Save</button>
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>
      
  </form>
 
  </div>
 
);}
