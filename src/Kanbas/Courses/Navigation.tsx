import { Link, useLocation } from "react-router-dom";
import * as db from "../Database";
import { Navigate, Route, Routes, useParams } from "react-router";


export default function CoursesNavigation() {
  const courses = db.courses;
  const { pathname } = useLocation();
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const links = [
    {label:"Home", path:`/Kanbas/Courses/${course._id}/Home`},
    {label:"Modules", path:`/Kanbas/Courses/${cid}/Modules`},
    
  "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <div id="wd-courses-navigation"  className="wd list-group fs-5 rounded-0">
      <Link to="/Kanbas/Courses/1234/Home"  id="wd-course-home-link"
        className="list-group-item active border border-0">Home</Link>

      <Link to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link"
      className="list-group-item text-danger border border-0">Modules</Link>

      <Link to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
      className="list-group-item text-danger border border-0">Piazza</Link>

      <Link to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
          className="list-group-item text-danger border border-0">Zoom</Link>

      <Link to="/Kanbas/Courses/1234/Assignments" id="wd-course-quizzes-link"
        className="list-group-item text-danger border border-0">Assignments</Link>

      
      <Link to="/Kanbas/Courses/1234/Quizzes" id="wd-course-assignments-link"
        className="list-group-item text-danger border border-0">Quizzes</Link>

      <Link to="/Kanbas/Courses/1234/Grades" id="wd-course-grades-link"
       className="list-group-item text-danger border border-0">Grades</Link>

      <Link to="/Kanbas/Courses/:cid/People" id="wd-course-people-link"
       className="list-group-item text-danger border border-0">People</Link>
    </div>
);}
