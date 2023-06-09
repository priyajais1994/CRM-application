

 import { Link } from "react-router-dom";
import { logout } from "../../handlers/logouthandler";

function UnAuthorized(props){

    return <div className="text-center bg-info text-white vh-100 d-flex align-item-center flex-column justify-content-center">

        <h3> oops! user of {props.userType} type does not have sufficient  permission to access this page </h3>
        <p className="text-white" onClick={logout}> login as another role </p>
    </div>
}

export default UnAuthorized;