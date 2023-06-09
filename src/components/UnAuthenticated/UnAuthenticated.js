

import { Link } from "react-router-dom";

function UnAuthenticated(){

    return <div className="text-center bg-info text-white vh-100 d-flex align-item-center flex-column justify-content-center">

         <h2> you need to logged in to access this page </h2>
         <Link className="text-white" to="/"> move to login page </Link>

    </div>
}

export default UnAuthenticated;