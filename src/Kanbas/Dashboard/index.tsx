import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";

export default function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
{  
    // {
    // const [courses, setCourses] = useState(db.courses);
    // const [course, setCourse] = useState<any>({
    //     _id: "0", name: "New Course", number: "New Number",
    //     startDate: "2023-09-10", endDate: "2023-12-15",
    //     image: "/images/reactjs.jpg", description: "New Description"
    //   });
    //   const updateCourse = () => {
    //     setCourses(
    //       courses.map((c) => {
    //         if (c._id === course._id) {
    //           return course;
    //         } else {
    //           return c;
    //         }
    //       })
    //     );
    //   };    
    // const addNewCourse = () => {
    // const newCourse = { ...course,
    //                         _id: new Date().getTime().toString() };
    //     setCourses([...courses, { ...course, ...newCourse }]);
    //   };  
    //   const deleteCourse = (courseId: string) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    //   };      
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h5>New Course
                <button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={addNewCourse} > 
                        Add 
                </button>
                <button className="btn btn-warning float-end me-2"
                        onClick={updateCourse} id="wd-update-course-click">
                        Update
                </button>
             </h5><br />
             <input value={course.name} className="form-control mb-2"              
                    onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
             <textarea value={course.description} className="form-control"
                       onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
             <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none">
                                <div className="card rounded-3 overflow-hidden">
                                    <img src={course.image} alt={course.name} height="160" className="card-img-top"/>
                                    <div className="card-body">
                                        <span className="wd-dashboard-course-link" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                            {course.name}
                                        </span>
                                        <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                                            {course.description}
                                        </p>
                                        <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                                        <button onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                                }} className="btn btn-danger float-end"
                                                id="wd-delete-course-click">
                                                Delete
                                        </button>
                                        <button id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end" >
                                                Edit
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


        {/* <div className="wd-dashboard-course col" style={{ width: "270px", margin: "30px 0" }}>
            <div className="card h-100">
            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home">
                <img src="/images/NU.jpg" width="100%" height="auto" style={{ width: "100%", height: "150px" }}/>
                <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                CS5001 Calculus
                </h5>
                <p className="card-text">
                Basic math for CS.
                    </p>
                <button className="btn btn-primary"> Go </button>
                </div>
            </a>
            </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "270px", margin: "30px 0" }}>
            <div className="card h-100">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                    href="#/Kanbas/Courses/1234/Home">
                    <img src="/images/NU.jpg" width="100%" height="auto" style={{ width: "100%", height: "150px" }}/>
                    <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">
                        CS5002 Algorithm
                        </h5>
                        <p className="card-text">
                        Advanced algorithm for CS.
                            </p>
                        <button className="btn btn-primary"> Go </button>
                </div>
                </a>
            </div>
        </div>
    

        <div className="wd-dashboard-course col" style={{ width: "270px", margin: "30px 0" }}>
            <div className="card h-100">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                    href="#/Kanbas/Courses/1234/Home">
                    <img src="/images/NU.jpg" width="100%" height="auto" style={{ width: "100%", height: "150px" }}/>
                    <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS5003 JAVA
                    </h5>
                    <p className="card-text">
                    JAVA language for programming.
                        </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </a>
            </div>
        </div>


        <div className="wd-dashboard-course col" style={{ width: "270px", margin: "30px 0" }}>
            <div className="card h-100">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                    href="#/Kanbas/Courses/1234/Home">
                    <img src="/images/NU.jpg" width="100%" height="auto" style={{ width: "100%", height: "150px" }}/>
                    <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS5004 Python
                    </h5>
                    <p className="card-text">
                    Python language for programming.
                        </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </a>
            </div>
        </div>


        <div className="wd-dashboard-course col" style={{ width: "270px", margin: "30px 0" }}>
            <div className="card h-100">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                    href="#/Kanbas/Courses/1234/Home">
                    <img src="/images/NU.jpg" width="100%" height="auto" style={{ width: "100%", height: "150px" }}/>
                    <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS5005 Intro to AI
                    </h5>
                    <p className="card-text">
                    Introduction course about AI.
                        </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </a>
            </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "270px", margin: "30px 0" }}>
            <div className="card h-100">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                    href="#/Kanbas/Courses/1234/Home">
                    <img src="/images/NU.jpg" width="100%" height="auto" style={{ width: "100%", height: "150px" }}/>
                    <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS5006 Distributed System
                    </h5>
                    <p className="card-text">
                    A lesson about distributed system.
                        </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </a>
            </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "270px", margin: "30px 0" }}>
            <div className="card h-100">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                    href="#/Kanbas/Courses/1234/Home">
                    <img src="/images/NU.jpg" width="100%" height="auto" style={{ width: "100%", height: "150px" }}/>
                    <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS5007 Machine learning
                    </h5>
                    <p className="card-text">
                    A basic lesson about machine learning.
                        </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </a>
            </div>
        </div>
       </div> */}