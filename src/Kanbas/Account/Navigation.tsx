import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
        {links.map((link) => (
       <Link key={link} to={`/Kanbas/Account/${link}`} className={`list-group-item ${active(link)}`}> {link} </Link>
     ))}
      {/* <Link to={`/Kanbas/Account/Signin`} id="wd-course-home-link"
        className="list-group-item active border border-0"> Signin </Link>

      <Link to={`/Kanbas/Account/Signup`} id="wd-course-home-link"
        className="list-group-item text-danger border border-0"> Signup  </Link> 

      <Link to={`/Kanbas/Account/Profile`}id="wd-course-home-link"
        className="list-group-item text-danger border border-0"> Profile </Link>  */}

    {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kanbas/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}


        
    </div>
);}
