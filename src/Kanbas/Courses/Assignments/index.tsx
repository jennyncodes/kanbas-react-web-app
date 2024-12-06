import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsFillCaretDownFill } from "react-icons/bs";
import { LuFileEdit } from "react-icons/lu";
import { FaTrash } from "react-icons/fa";
import { Link, useNavigate} from "react-router-dom";
import { useParams } from "react-router";
import * as assignmentsClient from "./client";
import * as coursesClient from "../client";
import { selectAssignment, deleteAssignment, setAssignments } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isStudent = currentUser.role === "STUDENT";
  const isFaculty = currentUser.role === "FACULTY";

  const newAssignment = ({
		title: "New Assignment",
		description: "New Assignment Description",
		points: 100,
		dueDate: "2023-12-12",
		availableFromDate: "",
		availableUntilDate: "",
		_id: "",
	});

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

    return (
        
      <div id="wd-assignments">
        <input id="wd-search-assignment" className="form-control w-25 float-start"
               placeholder="Search for Assignments" />

        {isFaculty && (
          
        <Link to={`/Kanbas/Courses/${cid}/Assignments/new`}>
        <button type="submit" className="btn btn-md btn-danger float-end me-1 wd-kanbas-save-profile btn-danger"
          >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button>
        </Link>
        )}

        <a href="#">
        <button type="submit" className="btn btn-md btn-secondary float-end me-1" >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>
        </a>
       
     

          <br/><br/><br/>

          <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-assignments-title list-group-item p-0 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">   
              <BsGripVertical className="me-2 fs-3" />
              <div className="dropdown d-inline me-1 float-left">
              <BsFillCaretDownFill />
              ASSIGNMENTS
              </div>
              <div className="buttons float-end">
              <button id="wd-percentage-assignment" className="btn btn-md btn-outline-secondary disabled float-right position-relative me-1 rounded">
                40% of Total
              </button>
              <FaPlus/>
              <IoEllipsisVertical className="fs-4" />
              </div>
            </div>
            </li>
            
        
          <ul id="wd-assignment-list" className="list-group rounded-0">
          {assignments.map((assignment: any) => (
          <li className="wd-assignment-list-item list-group-item p-3 ps-2 ">
          <BsGripVertical className="me-2 fs-3" />
          
          <LuFileEdit className="me-2 fs-4 text-success" />
          {isFaculty && (
          <div className="float-end">
            <FaTrash className="text-danger me-3 mt-1 fs-5" onClick={(e) =>{e.preventDefault();
              const confirmDelete = window.confirm("Are you sure you want to delete this assignment?");
              if(confirmDelete) {
                dispatch(deleteAssignment(assignment._id));
              }
            }} /> 
            <GreenCheckmark />
            <IoEllipsisVertical className="me-2 mt-1 fs-5" />     
          </div>
          )}
          {isStudent && (
              <Link to={`/Kanbas/Courses/${cid}/Assignments/`} 
              className="wd-assignment-link text-decoration-none text-dark">
              {assignment.title}
            </Link>
          )}
            {isFaculty && (
            <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} 
              className="wd-assignment-link text-decoration-none text-dark"
             >
              {assignment.title}
            </Link>
            )}
            <div className="mt-1">
              {/* {assignment.description} */}
              <span className="text-danger me-1">Multiple Modules</span> | <span className="me-1"> Not available until {assignment.availableUntil} at 12:00am</span> |
              <span className="me-1"> Due {assignment.dueDate} at 11:59pm</span> | <span className="me-1"> {assignment.points} points</span>
            </div>

            {/* <LessonControlButtons/>  */}
           
          </li>
            ))}
          </ul>
        

         </ul>
 
      </div>
  );}
  