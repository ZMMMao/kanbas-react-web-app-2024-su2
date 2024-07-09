export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><h3>Assignment Name</h3></label><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify. 
          The Landing page should include the following: Your full name and section Links to each of the lab assisgnments Llink to the Kanbas application Links to all relevant source code repositories. 
          The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
            <br />
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
            <br />
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
            <br />
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
            <br />
            <select id="wd-group">
            <option value="ASSIGNMENT">ASSIGNMENTS</option>
            <option value="EXAMS">EXAMS</option>
            </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
            <br />
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
            <br />
            <select id="wd-display-grade-as">
            <option value="Percentage">Percentage</option>
            <option value="Point">Point</option>
            </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
            <br />
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
            <br />
            <select id="wd-submission-type">
            <option value="Online">Online</option>
            <option value="In-person">In-person</option>
            </select>
            </td>
          </tr>
          <br />
        </table>
        <table style={{ float: 'right' }}>
          <tr>
          <td>
            <label>Online Entry Options</label><br/>

            <input type="checkbox" name="check-genre" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>

            <input type="checkbox" name="check-genre" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>

            <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

            <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

            <input type="checkbox" name="check-genre" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label><br/>
            </td>
          </tr>
        <br />
        <br />
          <tr>
            <td align="left" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
              <label htmlFor="wd-assign-to"> Assign to</label>
              <br />
              <input id="wd-assign-to" value="Everyone" /><br />
            </td>
          </tr>
          <br />
          <label htmlFor="wd-due-date	"> Due</label><br />
        <input type="date"
            id="wd-due-date"
            value="2024-05-31"/><br/>
            <br />
        <tr>  
        <td>
        <label htmlFor="wd-available-from"> Available from</label><br />
        <input type="date"
            id="wd-available-from"
            value="2024-05-06"/>
        </td>
        <td>
        <label htmlFor="wd-available-until"> Until</label><br />
        <input type="date"
            id="wd-available-until"
            value="2024-05-20"/><br/>
        </td>
        </tr>
        <br />  
        </table>
       
       <hr className="split-line" />
       
       <div className="button-container">
         <button className="cancel-button">Cancel</button>
         <button className="save-button">Save</button>
       </div>
     </div>
  );}
  
  