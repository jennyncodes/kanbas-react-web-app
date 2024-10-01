import { FaP, FaPlus } from "react-icons/fa6";
import GreenCheckmark from "../Modules/GreenCheckmark";
import ModulesControls from "../Modules/ModulesControls";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsPlusLg } from "react-icons/bs";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Assignments() {
    return (
        
      <div id="wd-assignments">

        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
               
          <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
          </button>

        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary float-end" style={{ bottom: "1px" }}>
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </button>

          <br/><br/><br/>

          <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-assignments-title list-group-item p-0 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">   
              <BsGripVertical className="me-2 fs-3" />
              <div className="dropdown d-inline me-1 float-left">
              <BsFillCaretDownFill />
              ASSIGNMENTS
            
              </div>
              <button id="wd-percentage-assignment" className="btn btn-md btn-outline-secondary disabled float-right position-relative me-1">
                40% of Total
              </button>
              <FaPlus/>
              <IoEllipsisVertical className="fs-4" />
            </div>
            </li>
            
            
        
        <ul id="wd-assignment-list" className="list-group rounded-0">
          <li className="wd-assignment-list-item list-group-item p-3 ps-2">
          <BsGripVertical className="me-2 fs-3" />
            <Link className="wd-assignment-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Assignments/123">
              A1
            </Link>
            <p> Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100pts</p>
            <LessonControlButtons/> 
          </li>

          <li className="wd-assignment-list-item list-group-item p-3 ps-2">
          <BsGripVertical className="me-2 fs-3" />
            <Link className="wd-assignment-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Assignments/123">
              A2
            </Link>
            <p> Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100pts</p>
          
            <LessonControlButtons/> 
          </li>

          <li className="wd-assignment-list-item list-group-item p-3 ps-2">
          <BsGripVertical className="me-2 fs-3" />
            <Link className="wd-assignment-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Assignments/123">
              A3
            </Link>
            <p className="wd-assignment-description"><span>Multiple Modules</span> | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100pts</p>
            <LessonControlButtons/> 
          </li>
      
          </ul>
        </ul>
      </div>
  );}
  