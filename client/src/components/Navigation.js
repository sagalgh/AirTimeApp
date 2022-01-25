import React from "react";
import { NavLink } from "react-router-dom";
import Typography from '@mui/material/Typography';

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/" style={{display: 'flex'}}> 
          <svg className ="icon" style={{marginLeft: -20, opacity: 0.9}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg> <Typography component="h1" variant="h5" style={{marginLeft: 20, opacity: 0.9}}> AirTime </Typography>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/map">
                  <Typography component="h1" variant="h6" style= {{opacity: 0.9}} > Maps </Typography>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/chathomepage">
                  <Typography component="h1" variant="h6"style={{opacity: 0.9}} > Connect </Typography>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tsa">
                <Typography component="h1" variant="h6" style={{opacity: 0.9}} > Checkpoints </Typography>
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
