import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
import AssignmentControls from "./AssignmentControls";
import LessonControlButtons from "./LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { MdOutlineAssignment } from "react-icons/md";

export default function AssignmentEditor() {
    const { cid, id } = useParams();
    const assignment = db.assignments.find(a => id === id);


    return (
        <div id="wd-assignments-editor">
            <div id="wd-assignment">
                <h4>Assignment Name </h4>
                <div className="mb-3">
                    <input type="text" className="form-control" id="wd-assignment" value={id} placeholder="Assignment Title" readOnly />
                </div><br />
                <div className="mb-3">
                    <textarea className="form-control" id="textarea1" rows={8}>
                    The assignment is available online.

                    Submit a link to the landing page of your Web application running on Netlify. 

                    The Landing page should include the following: 
                    - Your full name and section 
                    - Links to each of the lab assignments 
                    - Link to the Kanbas application 
                    - Links to all relevant source code repositories. 

                    The Kanbas application should include a link to navigate back to the landing page.
                    </textarea>
            </div>

            </div>
            <div id="assignmentPoint">
                <div className="row mb-3">
                    <label htmlFor="points" className="col-sm-2 col-form-label">Points</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="points" defaultValue="100" readOnly />
                    </div>
                </div><br />
                <div className="row mb-3">
                    <label htmlFor="assignmentGroup" className="col-sm-2 col-form-label">Assignment Group</label>
                    <div className="col-sm-10">
                        <select className="form-control" id="assignmentGroup" >
                            <option>ASSIGNMENTS</option>
                            <option>EXAMS</option>
                            <option>QUIZZES</option>
                        </select>
                    </div>
                </div><br />
                <div className="mb-3 row">
                    <label htmlFor="displayGradeAs" className="col-sm-2 col-form-label">Display Grade as</label>
                    <div className="col-sm-10">
                        <select className="form-select" id="displayGradeAs" >
                            <option>Percentage</option>
                            <option>Point</option>
                        </select>
                    </div>
                </div><br />
                <div className="mb-3 row">
                    <label htmlFor="submissionType" className="col-sm-2 col-form-label">Submission Type</label>
                    <div className="col-sm-10">
                        <select className="form-control" id="submissionType" >
                            <option>Online</option>
                            <option>In-Person</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <label className="form-label">Online Entry Options</label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="textEntry" />
                            <label className="form-check-label" htmlFor="textEntry">Text Entry</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="websiteURL" defaultChecked />
                            <label className="form-check-label" htmlFor="websiteURL">Website URL</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="mediaRecordings" />
                            <label className="form-check-label" htmlFor="mediaRecordings">Media Recordings</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="studentAnnotation" />
                            <label className="form-check-label" htmlFor="studentAnnotation">Student Annotation</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="fileUploads" />
                            <label className="form-check-label" htmlFor="fileUploads">File Uploads</label>
                        </div>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="container">
                        <div className="col-md-12">
                        <label htmlFor="assignTo" className="col-sm-2 form-label">Assign to</label>
                            <input type="text" className="form-control" id="assignTo" value="Everyone" />
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-12">
                                <label htmlFor="dueDate" className="form-label">Due</label>
                                <input type="datetime-local" className="form-control" id="dueDate" defaultValue="2024-05-13T23:59" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="availableFrom" className="form-label">Available from</label>
                                <input type="datetime-local" className="form-control" id="availableFrom" defaultValue="2024-05-06T00:00" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="until" className="form-label">Until</label>
                                <input type="datetime-local" className="form-control" id="until" defaultValue="2024-05-13T23:59" />
                            </div>
                    </div>
                </div>
                </div>
            </div>
            <br />
            <div className="mb-3">
                <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-lg btn-danger me-1 float-end">
                    Save
                </Link>
                <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-lg btn-secondary me-1 float-end">
                    Cancel
                </Link>
            </div>
            <br />
        </div>
    );
}
// export default function AssignmentEditor() {
//     return (
//       <div id="wd-assignments-editor">
//         <div id="wd-assignment">
//             <h3>Assignment Name</h3><br />
//             <div className="mb-3">
//                 <input type="assignment" className="form-control"
//                 id="wd-assignment" value="A1" placeholder="A1"/>
//             </div><br />
//             <div className="mb-3">
//                 <textarea className="form-control" id="textarea1" rows={4}>
//                     The assignment is available online.
                    
//                     Submit a link to the landing page of your Web application running on Netlify. 
                    
//                     The Landing page should include the following: 
//                     - Your full name and section 
//                     - Links to each of the lab assignments 
//                     - Link to the Kanbas application 
//                     - Links to all relevant source code repositories. 

//                     The Kanbas application should include a link to navigate back to the landing page.
//                 </textarea>
//             </div>
//         </div>
//         <div id="assignmentPoint">
//           <div className="row mb-3">
//             <label htmlFor="points" className="col-sm-2 col-form-label">Points</label>
//             <div className="col-sm-10">
//             <input type="number" className="col-sm-10 form-control" id="points" value="100" />
//             </div>
//           </div><br />
//           <div className="row mb-3">
//             <label htmlFor="assignmentGroup" className="col-sm-2 col-form-label">Assignment Group</label>
//             <div className="col-sm-10">
//             <select className="form-control" id="assignmentGroup">
//               <option>ASSIGNMENTS</option>
//               <option>EXAMS</option>
//               <option>QUIZZES</option>
//             </select>
//             </div>
//           </div><br />
//           <div className="mb-3 row">
//             <label htmlFor="displayGradeAs" className="col-sm-2 col-form-label">Display Grade as</label>
//             <div className="col-sm-10">
//             <select className="form-select" id="displayGradeAs">
//               <option>Percentage</option>
//               <option>Point</option>
//             </select>
//             </div>
//           </div><br />
//           <div className="mb-3 row">
//           <label htmlFor="submissionType" className="col-sm-2 col-form-label">Submission Type</label>
//           <div className="col-sm-10">
//             <select className="form-control" id="submissionType">
//               <option>Online</option>
//               <option>In-Person</option>
//             </select>
//           </div>
//         </div>

//         <div className="mb-3 row">
//           <div className="col-sm-2"></div>
//           <div className="col-sm-10">
//             <label className="form-label">Online Entry Options</label>
//             <div className="form-check">
//               <input className="form-check-input" type="checkbox" id="textEntry" />
//               <label className="form-check-label" htmlFor="textEntry">Text Entry</label>
//             </div>
//             <div className="form-check">
//               <input className="form-check-input" type="checkbox" id="websiteURL" defaultChecked />
//               <label className="form-check-label" htmlFor="websiteURL">Website URL</label>
//             </div>
//             <div className="form-check">
//               <input className="form-check-input" type="checkbox" id="mediaRecordings" />
//               <label className="form-check-label" htmlFor="mediaRecordings">Media Recordings</label>
//             </div>
//             <div className="form-check">
//               <input className="form-check-input" type="checkbox" id="studentAnnotation" />
//               <label className="form-check-label" htmlFor="studentAnnotation">Student Annotation</label>
//             </div>
//             <div className="form-check">
//               <input className="form-check-input" type="checkbox" id="fileUploads" />
//               <label className="form-check-label" htmlFor="fileUploads">File Uploads</label>
//             </div>
//           </div>
//         </div>

//         <div className="mb-3 row">
//             <label htmlFor="assignTo" className="col-sm-2 form-label">Assign</label>
//             <div className="col-sm-10">
//             <label htmlFor="assignTo" className="col-sm-2 form-label">Assign to</label>
//             <div className="col-md-6">
//             <input type="text" className="form-control" id="assignTo" value="Everyone" />
//             </div>

//               <div className="col-md-6">
//                 <label htmlFor="dueDate" className="form-label">Due</label>
//                 <input type="datetime-local" className="form-control" id="dueDate" value="2024-05-13T23:59" />
//               </div>
            
//             <div className="row">
//               <div className="col-md-6">
//                 <label htmlFor="availableFrom" className="form-label">Available from</label>
//                 <input type="datetime-local" className="form-control" id="availableFrom" value="2024-05-06T00:00" />
//               </div>
//               <div className="col-md-6">
//                 <label htmlFor="until" className="form-label">Until</label>
//                 <input type="datetime-local" className="form-control" id="until" value="2024-05-13T23:59" />
//               </div>
//             </div>
//         </div>
//         </div>
//         </div><br />
//         <div className="mb-3">
//         <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
//           Save
//         </button>
//         <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
//           Cancel
//         </button>
//         </div>
//         <br />
//     </div>      
//   );
//   }