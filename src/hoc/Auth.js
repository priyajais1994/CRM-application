
import UnAuthenticated from "../components/UnAuthenticated/UnAuthenticated";
import UnAuthorized from "../components/UnAuthorized/UnAuthorized";
import constants from "../utils/constants";
import { useLocation } from "react-router-dom";

function Auth (props){

    const location = useLocation();
    console.log(location);
    const userType = localStorage.getItem("userType");

    if(!userType)
    {
       return < UnAuthenticated/>
    }

    const page= location.pathname.split('/')[1];
    console.log(page);

    var requiredUserType = null;

    if(page === "Admin")
    {
        requiredUserType = constants.userTypes.admin;
    }
    else if(page === "Customer")
    {
        requiredUserType = constants.userTypes.customer;
    }
    else if(page === "Engineer")
    {
        requiredUserType = constants.userTypes.engineer;
    }

    if(userType !== requiredUserType)
    {
       return< UnAuthorized userType ={userType} />
    }

    return <div>
        {props.children}
    </div>
}
export default Auth;


