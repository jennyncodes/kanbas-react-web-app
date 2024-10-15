import { Link} from "react-router-dom";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const assignments = db.assignments;
  const courses = db.courses;
  const { aid } = useParams();
  const assignment = assignments.find((assignment) => assignment._id == aid);

    return (
      <div id="wd-assignments-editor">
   
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value={aid} className="form-control mb-2"/>
        <div className="mb-3">
          <div className="border p-3">
          <p id="wd-description" className="form-control mb-2">
              The assignment is <span className="text-danger">available online </span>
              <br/>
              <span>Submit a link to the landing page of your Web application running on Netlify. </span>
              <br/>
              The landing page should include the following: 
              <ul>
                <br/>
                <li>Your full name and section.</li>
                <li>Links to each of the lab assignments</li>
                <li>Links to the Kanbas application</li>
                <li>Links to all relevant source code repositories</li> 
              </ul>
              The Kanbas application should include a link to navigate back to the landing page.
          </p>
        </div>
    </div>

      
        <form>

            {/* Points */}
            <div className="row mb-3">
              <label htmlFor="wd-points" className="col-sm-2 col-form-label">
              Points</label>
              <div className="col-sm-10">
                <input id="wd-points" className="form-control" value={100} />
                </div>
                </div>
      

        {/* Assignment Group */}
        <div className="row mb-3">
          <label htmlFor="wd-group" className="col-sm-2 col-form-label">Assignment Group</label>
          <div className="col-sm-10">
            <select className="form-select" id="wd-group" name="role">
              <option selected>ASSIGNMENTS</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        {/* Display Grade As */}
        <div className="row mb-3">
          <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">Display Grade as</label>
          <div className="col-sm-10">
            <select className="form-select" id="wd-display-grade-as" name="role">
              <option value="Percentage">Percentage</option>
            </select>
          </div>
        </div>

        {/* Submission Type */}

        <div className="row mb-3">
          <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Submission Type</label>
          <div className="col-sm-10">
            <select className="form-select" id="wd-submission-type" name="role">
              <option value="Online">Online</option>
            </select>
          
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
  
      {/* Assign to */}
        <div className="row mb-3">
          <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Assign</label>
          <div className="col-sm-10">
            <div className="border p-3">
                <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">Assign to </label>
                <input id="wd-assign-to" className="form-control mb-2" value="Everyone" />
   
      
                    {/* Due Date */}
                    <label htmlFor="wd-due-date" className="col-sm-2 col-form-label">Due </label>
                    <div className="input-group mb-3">
                    <input type="date" id="wd-due-date" value="May 13, 2024, 11:59 PM" className="form-control"/><br/>
                    </div>

                    {/* Available From Until */}
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="wd-available-from" className="col-sm-3 col-form-label">Available from </label>
                        <div className="input-group mb-3">
                        <input type="date" id="wd-available-from" value="2024-5-06"  className="form-control mb-2"/>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <label htmlFor="wd-available-until" className="col-sm-3 col-form-label">Until </label>
                        <div className="input-group mb-3">
                        <input type="date" id="wd-available-until" value="2024-5-20" className="form-control mb-2" /> 
                        </div>
                      </div>      
                      </div>                        
            <div className="d-flex justify-content-end mt-3">
            <button className="btn btn-light w-40" type="button" id="wd-cancel">Cancel</button><button className="btn btn-danger w-40" type="button" id="wd-save">Save</button>
            </div>
            </div>
            </div>
        </div>
  </form>
  </div>
 
);}
