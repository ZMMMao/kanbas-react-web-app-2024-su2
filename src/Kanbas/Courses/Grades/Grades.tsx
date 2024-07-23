import { useParams } from "react-router-dom";
import * as db from "../../Database";
import { LuFileInput } from "react-icons/lu";
import ExportDropdown from './ExportDropdown';
import { FaFilter } from 'react-icons/fa';
import { IoSettingsSharp } from "react-icons/io5";
import { Button } from "react-bootstrap";

export default function Grades() {
    const { cid } = useParams();
    const enrollments = db.enrollments.filter(enrollment => enrollment.course === cid);
    const users = db.users.filter(user => enrollments.some(enrollment => enrollment.user === user._id));
    const assignments = db.assignments.filter(assignment => assignment.course === cid);
    const grades = db.grades;

    const getGrade = (userId: string, assignmentId: string): string => {
        const grade = grades.find((grade: any) => grade.student === userId && grade.assignment === assignmentId);
        return grade ? `${grade.grade}%` : "N/A";
    };

    return (
        <div id="wd-css-styling-tables">
            <div className="mb-3">
                <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
                    <IoSettingsSharp/>
                </button>
                <ExportDropdown />
                <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
                    <LuFileInput className="me-2" />
                    Import
                </button>
            </div><br /><br />
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="studentName" className="form-label"><b>Student Names</b></label>
                    <select className="form-select">
                        <option selected>Search Students</option>
                        {users.map(user => (
                            <option key={user._id} value={user._id}>{`${user.firstName} ${user.lastName}`}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="assignmentNames" className="form-label"><b>Assignment Names</b></label>
                    <select className="form-select">
                        <option selected>Search Assignments</option>
                        {assignments.map(assignment => (
                            <option key={assignment._id} value={assignment._id}>{assignment.title}</option>
                        ))}
                    </select>
                </div>
            </div><br />
            <button className="btn btn-lg btn-secondary me-1" type="button">
                <FaFilter /> Apply Filters
            </button>
            <br /><br />
            
            <table className="table table-bordered">
                <thead>
                    <tr className="table">
                        <th>Student Name</th>            
                        {assignments.map(assignment => (
                            <th key={assignment._id}>{assignment.title}<br /><small>Out of 100</small></th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id} className="table">
                            <td>{`${user.firstName} ${user.lastName}`}</td>
                            {assignments.map(assignment => (
                                <td key={assignment._id}>{getGrade(user._id, assignment._id)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// import { LuFileInput } from "react-icons/lu";
// import ExportDropdown from './ExportDropdown';
// import { FaFilter } from 'react-icons/fa';
// import { IoSettingsSharp } from "react-icons/io5";
// import { Button } from "react-bootstrap";
// export default function Grades() {
//     return (
//         <div id="wd-css-styling-tables">
//             <div className="mb-3">
//                 <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
//                 <IoSettingsSharp/>
//                 </button>
//                 <ExportDropdown />
//                 <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
//                 <LuFileInput className="me-2" />
//                 Import
//                 </button>
//             </div><br /><br />
//             <div className="row">
//               <div className="col-md-6">
//                 <label htmlFor="studentName" className="form-label"><b>Student Names</b></label>
//                 <select className="form-select">
//                 <option selected>Search Students</option>
//                 <option value="1">Jane</option>
//                 <option value="2">Chris</option>
//                 <option value="3">Han</option>
//                 </select>
//               </div>
//               <div className="col-md-6">
//                 <label htmlFor="assignmentNames" className="form-label"><b>Assignment Names</b></label>
//                 <select className="form-select">
//                 <option selected>Search Assignments</option>
//                 <option value="1">A1</option>
//                 <option value="2">A2</option>
//                 <option value="3">A3</option>
//                 </select>
//               </div>
//             </div><br />
//             <button className="btn btn-lg btn-secondary me-1" type="button">
//               <FaFilter /> Apply Filters
//             </button>
//             <br /><br />
            
//             <table className="table table-bordered">
//                 <thead>
//                     <tr className="table">
//                         <th>Student Name</th>            
//                         <th>A1 SETUP<br /><small>Out of 100</small></th>
//                         <th>A2 HTML<br /><small>Out of 100</small></th>
//                         <th>A3 CSS<br /><small>Out of 100</small></th>
//                         <th>A4 BOOTSTRAP<br /><small>Out of 100</small></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr className="table"><td>Jane Adams</td><td>100%</td><td>99%</td><td>85%</td><td>85%</td></tr>
//                     <tr className="table"><td>Christina Allen</td><td>100%</td><td>100%</td><td>100%</td><td>90%</td></tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// }
