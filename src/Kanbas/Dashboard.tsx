import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />

        {/* Courses one*/}
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        </div>

  {/* Courses Two*/}
        <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/programming.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5610/Home">
              CS5610
            </Link>
            <p className="wd-dashboard-course-title">
              Web Development
            </p>
            <Link to="/Kanbas/Courses/5610/Home"> Go </Link>
          </div>
        </div>
        </div>

    {/* Courses Three*/}

        <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/gamedesign.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5620/Home">
              CS5620
            </Link>
            <p className="wd-dashboard-course-title">
              Game Design
            </p>
            <Link to="/Kanbas/Courses/5620/Home"> Go </Link>
          </div>
        </div>
        </div>

  {/* Courses Four*/}
        <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/mobileapp.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5310/Home">
              CS5310
            </Link>
            <p className="wd-dashboard-course-title">
              Mobile App Development
            </p>
            <Link to="/Kanbas/Courses/5310/Home"> Go </Link>
          </div>
        </div>
      
      
  {/* Courses Five*/}
  <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/cybersecurity.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5700/Home">
              CS5700
            </Link>
            <p className="wd-dashboard-course-title">
              Cybersecurity
            </p>
            <Link to="/Kanbas/Courses/5700/Home"> Go </Link>
          </div>
        </div>
        </div>

    {/* Courses Six*/}
    <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/clinicalresearch.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/6000/Home">
              CS6000
            </Link>
            <p className="wd-dashboard-course-title">
              Clinical Research
            </p>
            <Link to="/Kanbas/Courses/6000/Home"> Go </Link>
          </div>
        </div>
        </div>

      {/* Courses Seven*/}

      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/dsalgo.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5080/Home">
              CS5080
            </Link>
            <p className="wd-dashboard-course-title">
              Data Structure & Algorithms
            </p>
            <Link to="/Kanbas/Courses/5080/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course"> ... </div>
      </div>
      </div>

    </div>
  );
}
