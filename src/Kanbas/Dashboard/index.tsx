export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
        <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer.
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">  
            <img src="/images/NU.jpg" width={200} />
            <div>
                <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5001 Calculus
                </a>
                <p className="wd-dashboard-course-title">
                Basic math for CS.
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
        </div>
        <div className="wd-dashboard-course">  
            <img src="/images/NU.jpg" width={200} />
            <div>
                <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5002 Algorithm
                </a>
                <p className="wd-dashboard-course-title">
                Advanced algorithm for CS.
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
        </div>
        <div className="wd-dashboard-course"> 
            <img src="/images/NU.jpg" width={200} />
            <div>
                <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5003 JAVA
                </a>
                <p className="wd-dashboard-course-title">
                JAVA language for programming.
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
        </div>
        <div className="wd-dashboard-course"> 
            <img src="/images/NU.jpg" width={200} />
            <div>
                <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5004 Python
                </a>
                <p className="wd-dashboard-course-title">
                Python language for programming.
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
        </div>
        <div className="wd-dashboard-course"> 
            <img src="/images/NU.jpg" width={200} />
            <div>
                <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5005 Intro to AI
                </a>
                <p className="wd-dashboard-course-title">
                Introduction course about AI.
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
        </div>
        <div className="wd-dashboard-course"> 
            <img src="/images/NU.jpg" width={200} />
            <div>
                <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5006 Distributed System
                </a>
                <p className="wd-dashboard-course-title">
                A lesson about distributed system.
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
        </div>
        <div className="wd-dashboard-course">  
            <img src="/images/NU.jpg" width={200} />
            <div>
                <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5007 Machine learning
                </a>
                <p className="wd-dashboard-course-title">
                A basic lesson about machine learning.
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
        </div>
      </div>
    </div>
);}
