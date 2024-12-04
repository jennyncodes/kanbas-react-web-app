import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import PeopleDetails from "./Details";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import * as db from "../../Database";
// import * as client from "./client";

export default function PeopleTable({ users = [] }: { users?: any[] }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-people-table">
         <PeopleDetails />
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
      </tbody>
      </table>

    </div> );}