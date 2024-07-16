export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
        <div id="wd-dashboard-courses"  className="row">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="wd-dashboard-course col" style={{ width: "270px", margin: "30px 0" }}>
                    <div className="card h-100">
                        <a className="wd-dashboard-course-link text-decoration-none text-dark"
                            href="#/Kanbas/Courses/1234/Home">
                            <img src="/images/reactjs.jpg" width="100%" height="auto" style={{ width: "100%", height: "150px" }}/>
                            <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                                CS1234 React JS
                            </h5>
                                <p className="card-text">
                                Full Stack software developer
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
       </div>
      </div>
    </div>
);}
