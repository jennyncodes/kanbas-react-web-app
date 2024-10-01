import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function TOC() {
  const { pathname } = useLocation();
    return (
      <ul className="nav nav-pills">
      <li className="nav-item">
        <a id="wd-a" href="#/Labs" className="nav-link">
          Labs
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a1" href="#/Labs/Lab1"
          className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>
          Lab 1
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a2" href="#/Labs/Lab2"
          className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>
          Lab 2
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a3" href="#/Labs/Lab3"
          className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>
          Lab 3
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="#/Kanbas" className="nav-link">
          Kanbas
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="https://github.com/jennyncodes" className="nav-link">
          Jenny's GitHub
        </a>
      </li>
    </ul>
  );
}


      //   <li><Link to="/Labs">Labs</Link></li>
      //   <li><Link to="/Labs/Lab1">Lab 1</Link></li>
      //   <li><Link to="/Labs/Lab2">Lab 2</Link></li>
      //   <li><Link to="/Labs/Lab3">Lab 3</Link></li>
      //   <li><Link to="/Kanbas">Kanbas</Link></li>
      //   <li><a href="https://github.com/jennyncodes/kanbas-react-web-app" id="wd-github">Jenny's Github</a></li>


      // </ul>
