
export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
   
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1" className="form-control mb-2"/>
        <p id="wd-description" className="form-control mb-2">
        The asignment is available online Submit a link to the landing page of your Web application running on Netlify. 
            The landing page should include the following: Your full name and section .Links to each of the lab assignments,
            Links to the Kanbas application, Links to all relevant source code repositories. 
            The Kanbas application should include a link to navigate back to the landing page.
        </p>
    

      
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
                <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">Assign to </label>
                <input id="wd-assign-to" className="form-control mb-2" value="Everyone" />
   

                    {/* Due Date */}
                    <label htmlFor="wd-due-date" className="col-sm-2 col-form-label">Due </label>
                    <input type="date" id="wd-due-date" value="2024-5-13" className="col-sm-2 col-form-label"/><br/>

                    {/* Available From Until */}
                    
                    <label htmlFor="wd-available-from" className="col-sm-2 col-form-label" >Available from </label>
                    <input type="date" id="wd-available-from" value="2024-5-06"  className="form-control mb-2"/>
                    <label htmlFor="wd-available-until" className="col-sm-2 col-form-label">Until </label>
                    <input type="date" id="wd-available-until" value="2024-5-20" className="form-control mb-2" />                               
            
            <button className="btn btn-light w-40" type="button" id="wd-cancel">Cancel</button><button className="btn btn-danger w-40" type="button" id="wd-save">Save</button>
            </div>
        </div>
  </form>
  </div>
 
);}
