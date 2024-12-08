import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import PeopleDetails from "./Details";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as coursesClient from "../client";
import axios from "axios";

export default function PeopleTable({ users = [] }: { users?: any[] }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { cid } = useParams();
  const [courseUsers, setCourseUsers] = useState<any[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if(currentUser?.role === "ADMIN") {
          setIsAdmin(true);
          const response = await axios.get("/api/users", { withCredentials: true });
          setCourseUsers(response.data);
        } else if (cid as string) {
          const usersForCourse = await coursesClient.findUsersForCourse(cid as string);
          setCourseUsers(usersForCourse);  
        }
      } catch (error) {
        console.error("Error fetching users for course:", error);
      }
    };

    if (cid) {
      fetchUsers();
    }
  }, []);

  return (
    <div id="wd-people-table">
         <PeopleDetails />
         <br/><br/>
         <h3>{currentUser?.role === "ADMIN" ? "All Users (Admin View)" : "Course Users"}</h3>
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
              <Link to={`/Kanbas/Account/Users/${user._id}`} className="text-decoration-none">

                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>
                <span className="wd-last-name">{user.lastName}</span>
                </Link>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}

          {courseUsers.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
              <Link to={`/Kanbas/Account/Users/${user._id}`} className="text-decoration-none">

                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>
                <span className="wd-last-name">{user.lastName}</span>
                </Link>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
          </tbody>
          </table>
  
    </div> );}