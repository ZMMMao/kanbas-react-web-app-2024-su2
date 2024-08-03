import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Assignments from "./Assignments";
import Grades from "./Grades/Grades";
import Home from "./Home";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import AssignmentEditor from "./Assignments/Editor";

export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
            <hr />
            <CoursesNavigation />
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route path="Assignments/new" element={<AssignmentEditor />} />
                    <Route path="Assignments/:id" element={<AssignmentEditor />} />
                    <Route path="Grades" element={<Grades />} />
                </Routes>
            </div>
        </div>
    );
}

// import CoursesNavigation from "./Navigation";
// import Modules from "./Modules";
// import Assignments from "./Assignments";
// import AssignmentEditor from "./Assignments/Editor";
// import Grades from "./Grades/Grades";
// import Home from "./Home";
// import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
// import { FaAlignJustify } from "react-icons/fa";
// export default function Courses({ courses }: { courses: any[]; }) {
//     const { cid } = useParams();
//     const course = courses.find((course) => course._id === cid);
//     const { pathname } = useLocation();
//     return (
//       <div id="wd-courses">
//         <h2 className="text-danger">
//             <FaAlignJustify className="me-4 fs-4 mb-1" />
//             {course && course.name} &gt; {pathname.split("/")[4]}
//         </h2>
//         <hr />
//         <CoursesNavigation />
//         <div>
//             <Routes>
//             <Route path="/" 
//             element={<Navigate to="Home" />} />
//             <Route path="Home" element={<Home />} />
//             <Route path="Modules" element={<Modules />} />
//             <Route path="Assignments" element={<Assignments />} />
//             <Route path="Assignments/:id" element={<AssignmentEditor />} />
//             <Route path="Grades" element={<Grades />} />
//             </Routes>
//         </div>    
//       </div>
//   );}
  