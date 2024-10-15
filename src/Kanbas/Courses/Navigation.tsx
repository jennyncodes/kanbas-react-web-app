import { Link, useLocation } from "react-router-dom";
import * as db from "../Database";
import { Navigate, Route, Routes, useParams } from "react-router";


export default function CoursesNavigation() {
  const courses = db.courses;
  const { pathname } = useLocation();
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const links = [
    { label:"Home", path:`/Kanbas/Courses/${cid}/Home`},
    { label:"Modules", path:`/Kanbas/Courses/${cid}/Modules`},
    { label: "Piazza", path:`/Kanbas/Courses/${cid}/Piazza`},
    { label: "Zoom", path:`/Kanbas/Courses/${cid}/Zoom`},
    { label: "Assignments", path:`/Kanbas/Courses/${cid}/Assignments`},
    { label: "Quizzes", path:`/Kanbas/Courses/${cid}/Quizzes`}, 
    { label: "Grades", path:`/Kanbas/Courses/${cid}/Grades`},
    { label: "People", path:`/Kanbas/Courses/${cid}/People`},
];
  return (

    <div id="wd-courses-navigation"  className="wd list-group fs-5 rounded-0">

    {links.map((link) => (
      <Link key={link.path} to={link.path} className={`list-group-item text-danger border border-0
            ${pathname.includes(link.label)? "list-group-item active border border-0 text-black" : "text-danger"}`}>

        <br />
        {link.label}
      </Link>
    ))}
    
    </div>
);}
