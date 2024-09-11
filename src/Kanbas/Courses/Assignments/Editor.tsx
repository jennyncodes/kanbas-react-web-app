export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
        The asignment is available online Submit a link to the landing page of your Web application running on Netlify. 
            The landing page should include the following: Your full name and section .Links to each of the lab assignments,
            Links to the Kanbas application, Links to all relevant source code repositories. 
            The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>

            {/* Points */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

        {/* Assignment Group */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
          <select id="wd-group" name="role">
                <option value="Assignments">
                    ASSIGNMENTS
                </option>              
            </select>
          </td>
        </tr>

        {/* Display Grade As */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as" name="role">
                <option value="Percentage">
                    Percentage
                </option>              
            </select>
          </td>
        </tr>

        {/* Submission Type */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
          <select id="wd-submission-type" name="role">
                <option value="Online">
                    Online
                </option>              
            </select>
            <br/>
            <br/>

            <label>Online Entry Options</label><br/>
          
                <input type="checkbox" name="check-genre" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br />
            
                <input type="checkbox" name="check-genre" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br />

                <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                <input type="checkbox" name="check-genre" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label><br />
            </td>
        </tr>
             
       
     <br/>
      {/* Assign to */}
         <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign to </label>
            </td>
            <td>
                <input id="wd-assign-to" value="Everyone" />
            <br/>

                    {/* Due Date */}
                    <label htmlFor="wd-due-date">Due </label>
                    <input type="date" id="wd-due-date" value="2024-5-13"/><br/>

                    {/* Available From Until */}
                    <td align="right" valign="top">
                    <label htmlFor="wd-available-from">Available from </label>
                    <input type="date" id="wd-available-from" value="2024-5-06" />
                    <label htmlFor="wd-available-until">Until </label>
                    <input type="date" id="wd-available-until" value="2024-5-20" />                               
            </td>
            </td>
            </tr>

        <hr/>
        <tr>
            <td align="right" valign="top">
            <button type="button" id="wd-cancel">Cancel</button><button type="button" id="wd-save">Save</button>
            </td>
        </tr>





        
        
      </table>
    </div>
);}
