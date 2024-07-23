import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
import LessonControlButtons from "./LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { MdOutlineAssignment } from "react-icons/md";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments.filter(assignment => assignment.course === cid);

    return (
        <div id="wd-search-assignment">
            <AssignmentControls /><br /><br /><br /><br />

            <ul id="wd-assignment" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <GoTriangleDown className="me-2 fs-3" />
                        ASSIGNMENTS 40% of total
                        <AssignmentControlButtons />
                    </div>
                    <div>
                        {assignments.map((assignment, index) => (
                            <ul key={assignment._id} className={`wd-A${index + 1} list-group rounded-0`}>
                                <li className={`wd-A${index + 1} list-group-item p-3 ps-1 d-flex align-items-start`}>
                                    <div className="me-2 d-flex flex-column align-items-center">
                                        <BsGripVertical className="fs-3" />
                                    </div>
                                    <div className="me-2 d-flex flex-column align-items-center">
                                        <MdOutlineAssignment className="fs-3" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex align-items-center">
                                            <Link className="wd-assignment-link" to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                                <span className="fw-bold">{assignment.title}</span>
                                            </Link>
                                        </div>
                                        <div className="wd-content-item mt-2">
                                            <span style={{ color: '#8B0000' }}>Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |
                                            <b> Due</b> May 13 at 11:59pm | 100pts
                                        </div>
                                    </div>
                                    <LessonControlButtons />
                                </li>
                            </ul>
                        ))}
                    </div>
                </li>
            </ul>
        </div>
    );
}

// import LessonControlButtons from "./LessonControlButtons";
// import AssignmentControlButtons from "./AssignmentControlButtons";
// import { BsGripVertical } from "react-icons/bs";
// import AssignmentControls from "./AssignmentControls";
// import { GoTriangleDown } from "react-icons/go";
// import { MdOutlineAssignment } from "react-icons/md";
// import { useParams, useLocation, Link } from "react-router-dom";
// import * as db from "../../Database";

// export default function Assignments() {
//     const { cid } = useParams();
//     const assignments = db.assignments;
//     return (
//       <div id="wd-search-assignment">
//         <AssignmentControls /><br /><br /><br /><br />

//         <ul id="wd-assignment" className="list-group rounded-0">
//           <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
//             <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" />
//             <GoTriangleDown className="me-2 fs-3" />
//                 ASSIGNMENTS 40% of total
//             <AssignmentControlButtons />    
//             </div>
//             <div>
//                 <ul className="wd-A1 list-group rounded-0">
//                     <li className="wd-A1 list-group-item p-3 ps-1 d-flex align-items-start">
//                     <div className="me-2 d-flex flex-column align-items-center">
//                         <BsGripVertical className="fs-3" />
//                     </div>
//                     <div className="me-2 d-flex flex-column align-items-center">
//                     <MdOutlineAssignment className="fs-3" />
//                     </div>
//                     <div className="flex-grow-1">
//                         <div className="d-flex align-items-center">
//                         <a className="wd-assignment-link"
//                         href="#/Kanbas/Courses/1234/Assignments/123">
//                         <span className="fw-bold">A1</span>
//                         </a>
//                         </div>
//                         <div className="wd-content-item mt-2">
//                         <span style={{ color: '#8B0000' }}>Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |
//                         <b> Due</b> May 13 at 11:59pm | 100pts
//                         </div>
//                     </div>
//                     <LessonControlButtons />
//                     </li>
//                 </ul>
//             </div>
//             <div>
//                 <ul className="wd-A2 list-group rounded-0">
//                     <li className="wd-A2 list-group-item p-3 ps-1 d-flex align-items-start">
//                     <div className="me-2 d-flex flex-column align-items-center">
//                         <BsGripVertical className="fs-3" />
//                     </div>
//                     <div className="me-2 d-flex flex-column align-items-center">
//                     <MdOutlineAssignment className="fs-3" />
//                     </div>
//                     <div className="flex-grow-1">
//                         <div className="d-flex align-items-center">
//                         <a className="wd-assignment-link"
//                         href="#/Kanbas/Courses/1234/Assignments/123">
//                         <span className="fw-bold">A2</span>
//                         </a>
//                         </div>
//                         <div className="wd-content-item mt-2">
//                         <span style={{ color: '#8B0000' }}>Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am |
//                         <b> Due</b> May 20 at 11:59pm | 100pts
//                         </div>
//                     </div>
//                     <LessonControlButtons />
//                     </li>
//                 </ul>
//             </div>
//             <div>
//                 <ul className="wd-A3 list-group rounded-0">
//                     <li className="wd-A3 list-group-item p-3 ps-1 d-flex align-items-start">
//                     <div className="me-2 d-flex flex-column align-items-center">
//                         <BsGripVertical className="fs-3" />
//                     </div>
//                     <div className="me-2 d-flex flex-column align-items-center">
//                     <MdOutlineAssignment className="fs-3" />
//                     </div>
//                     <div className="flex-grow-1">
//                         <div className="d-flex align-items-center">
//                         <a className="wd-assignment-link"
//                         href="#/Kanbas/Courses/1234/Assignments/123">
//                         <span className="fw-bold">A3</span>
//                         </a>
//                         </div>
//                         <div className="wd-content-item mt-2">
//                         <span style={{ color: '#8B0000' }}>Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am |
//                         <b> Due</b> May 27 at 11:59pm | 100pts
//                         </div>
//                     </div>
//                     <LessonControlButtons />
//                     </li>
//                 </ul>
//             </div>
//           </li>
//         </ul>
//       </div>
//   );}
  