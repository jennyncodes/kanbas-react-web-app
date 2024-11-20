import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });

      const [module, setModule] = useState({
        id: 1, title: "React Basics",
        description: "Introduction to React concepts and components",
        course: "Web Development"
      });

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input className="form-control w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>
      <h4>Update Assignment Completed</h4>
      <a
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
        Update Completed
      </a>
      <h4>Update Assignment Score</h4>
      <a
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Score
      </a>

      <input
        type="number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })
        }
        value={assignment.score}/>

      <a id="wd-retrieve-modules" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-module-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module/title`}>
        Get Module Name
      </a><hr/>

      <a id="wd-update-module-title"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/title/${module.title}`}>
        Update Module Name
      </a>
      <input className="form-control w-75" id="wd-module-title"
        defaultValue={module.title} onChange={(e) =>
          setModule({ ...module, title: e.target.value })}/>
      <hr />

      <h4>Edit Module Description</h4>
      <a className="btn btn-primary"
        href={`${MODULE_API_URL}/description/${module.description}`}>
        Update Module Description
      </a>
      <input type="text"
        onChange={(e) => setModule({ ...module, description: e.target.value })}
        value={module.description}/>

    </div>
);}
