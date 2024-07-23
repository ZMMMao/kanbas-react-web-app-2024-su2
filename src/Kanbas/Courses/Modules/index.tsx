import { useParams } from "react-router";
import * as db from "../../Database";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
export default function Modules() {
    const { cid } = useParams();
    const modules = db.modules;
    return (
      <div id="wd-modules">
        <ModulesControls /><br /><br /><br /><br />

        <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {module.name}
              <ModuleControlButtons />
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      </div>
);}
//           <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//             <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" />
//                 Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
//             <ModuleControlButtons />    
//             </div>
//             <ul className="wd-lessons list-group rounded-0">
//               <li className="wd-lesson list-group-item p-3 ps-1">
//                 <BsGripVertical className="me-2 fs-3" />
//                 <span className="wd-title">LEARNING OBJECTIVES</span>
//                 <LessonControlButtons />
//               </li>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Introduction to the course</li>
//                   <li className="wd-content-item">Learn what is Web Development</li>
//                 </ul>
              
//               <li className="wd-lesson list-group-item p-3 ps-1">
//                 <BsGripVertical className="me-2 fs-3" />
//                 <span className="wd-title">READING</span>
//                 <LessonControlButtons />
//               </li>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
//                   <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User</li>
//                 </ul>
//               <li className="wd-lesson list-group-item p-3 ps-1">
//                 <BsGripVertical className="me-2 fs-3" />
//                 <span className="wd-title">SLIDES</span>
//                 <LessonControlButtons />
//               </li>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Introduction to Web Development</li>
//                   <li className="wd-content-item">Creating an HTTP server with Node.js</li>
//                   <li className="wd-content-item">Creating a React Application</li>
//                 </ul>
//             </ul>
//           </li>
//           <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//             <div className="wd-title p-3 ps-2 bg-secondary">
//                 <BsGripVertical className="me-2 fs-3" />
//                 Week 1, Lecture 2 - Formatting User Interfaces with HTML
//                 <ModuleControlButtons /> 
//             </div>
//             <ul className="wd-lessons list-group rounded-0">
//               <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//                 <span className="wd-title">LEARNING OBJECTIVES</span>
//               <LessonControlButtons />
//               </li>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
//                   <li className="wd-content-item">Deploy the assignment to Netlify</li>
//                 </ul>
              
//               <li className="wd-lesson list-group-item p-3 ps-1">
//                <BsGripVertical className="me-2 fs-3" />
//                 <span className="wd-title">SLIDES</span>
//                 <LessonControlButtons />
//               </li>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Introduction to HTML and the DOM</li>
//                   <li className="wd-content-item">Formatting Web content with Headings and</li>
//                   <li className="wd-content-item">FOrmatting content with Lists and Tables</li>
//                 </ul>
//             </ul>
//           </li>
//         </ul>
//       </div>
//   );}
  
  