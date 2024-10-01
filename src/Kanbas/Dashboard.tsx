import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />

        {/* Courses one*/}
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
              <img src="/images/reactjs.jpg"  width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
              </div>
              </Link>
            </div>
        </div>

      

  {/* Courses Two*/}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/5610/Home">
          <img src="/images/programming.jpg"  width="100%" height={160} />
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
              CS5610
            </h5>
            <p className="wd-dashboard-course-title card-text">
              Web Development
            </p>
            <button className="btn btn-primary"> Go </button>
          </div>
          </Link>
        </div>
    </div>



    {/* Courses Three*/}

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/6010/Home">
          <img src="/images/gamedesign.jpg"  width="100%" height={160} />
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
              CS6010
            </h5>
            <p className="wd-dashboard-course-title card-text">
              Game Design
            </p>
            <button className="btn btn-primary"> Go </button>
          </div>
          </Link>
        </div>
        </div>

  {/* Courses Four*/}

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/5360/Home">
          <img src="/images/mobileapp.jpg"  width="100%" height={160} />
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
              CS5360
            </h5>
            <p className="wd-dashboard-course-title card-text">
              Mobile App Development
            </p>
            <button className="btn btn-primary"> Go </button>
          </div>
          </Link>
        </div>
        </div> 
  {/* Courses Five*/}

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/CS5700/Home">
          <img src="/images/cybersecurity.jpg"  width="100%" height={160} />
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
              CS5700
            </h5>
            <p className="wd-dashboard-course-title card-text">
            Cybersecurity
            </p>
            <button className="btn btn-primary"> Go </button>
          </div>
          </Link>
        </div>
        </div>


    {/* Courses Six*/}

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/6000/Home">
          <img src="/images/clinicalresearch.jpg"  width="100%" height={160} />
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
              CS6000
            </h5>
            <p className="wd-dashboard-course-title card-text">
            Clinical Research
            </p>
            <button className="btn btn-primary"> Go </button>
          </div>
          </Link>
        </div>
        </div>



      {/* Courses Seven*/}

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/5080/Home">
          <img src="/images/dsalgo.jpg"  width="100%" height={160} />
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
          CS5080
            </h5>
            <p className="wd-dashboard-course-title card-text">
            Data Structure & Algorithms
            </p>
            <button className="btn btn-primary"> Go </button>
          </div>
          </Link>
        </div>
        </div>
    </div>
</div>
</div>

  
  );
}
