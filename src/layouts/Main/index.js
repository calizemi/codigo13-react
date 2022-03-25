import { Link,Outlet } from "react-router-dom";
import { Container,Box } from "@mui/material";
import "./main.css"

const Main=()=>{
    return (
        <div>
  
         <nav className="main-nav">
            <div>
              <img src="" alt="" />
            </div>
            <div className="navi">
              <ul className="ul-nav" >
                <li  className="li-nav">
                  <Link to="/">Pokemon</Link>
                </li>
                <li  className="li-nav">
                  <Link to="/flags">Banderas</Link>
                </li>
                <li  className="li-nav">
                  <Link to="/youtube">Youtube</Link>
                </li>
              </ul>
            </div>
          </nav>
          
          <Outlet />
        </div>
      );
}
export default Main;