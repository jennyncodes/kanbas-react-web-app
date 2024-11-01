import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as db from "../Database";
import {
  enrollInCourse,
  unenrollCourse,
} from "../Courses/Enrollments/reducers";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const isStudent = currentUser.role === "STUDENT";
  const isFaculty = currentUser.role === "FACULTY";
  const [showAllCourses, setShowAllCourses] = useState(false);
  const userEnrollments = enrollments.filter(
    (enrollment: any) => enrollment.user === currentUser._id
  );

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {isStudent && (
        <button
          className={`btn float-end ${
            !showAllCourses ? "btn-primary" : "btn-danger"
          }`}
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "My Enrollments" : "All Courses"}
        </button>
      )}
      {isFaculty && (
        <div>
          <div>
          <h4>New Course</h4>
          <input
            defaultValue={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            defaultValue={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
               <br/>
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
           
            Add
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          > Update</button>
          </div>
     
          <br/>
          <hr/>
          <h2 id="wd-dashboard-published">
            Published Courses ({courses.length})
          </h2>
            <hr/>
        </div>

      )}
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          {courses.filter(
            (course:any) =>
              showAllCourses ||
            userEnrollments.some((e:any) => e.course === course._id)
          )
            .map((course) => {
              if (
                enrollments.some(
                  (enrollment: any) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
                )
              ) {
                return { ...course, enrolled: true };
              } else {
                return { ...course, enrolled: false };
              }
            })
            .map((course) => (
              <div
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
              >
                <div className="card rounded-3 overflow-hidden">
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <Link
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <button className="btn btn-primary"> Go </button>
                    </Link>

                    {isStudent && course.enrolled === true && (
                      <button
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          dispatch(
                            unenrollCourse({
                              user: currentUser._id,
                              course: course._id,
                            })
                          );
                        }}
                      >
                        Unenroll
                      </button>
                    )}
                    {isStudent && course.enrolled === false && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          dispatch(
                            enrollInCourse({
                              user: currentUser._id,
                              course: course._id,
                            })
                          );
                        }}
                        className="btn btn-success float-end"
                        id="wd-delete-course-click"
                      >
                        Enroll
                      </button>
                    )}

                    {isFaculty && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                    )}
                    {isFaculty && (
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    )}
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
