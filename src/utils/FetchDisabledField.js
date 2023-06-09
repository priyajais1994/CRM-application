

import constants from "./constants";

const fetchDisabledFields=()=>{

    const disabledfield ={

        title:false,
        priority:false,
        description:false,
        requestor:false,
        assignee:false,
        status:false
    }

    const userType = localStorage.getItem(constants.userAttributeFields.userType);

    if(userType === constants.userTypes.engineer)
    {
        disabledfield.title = true;
        disabledfield.priority = true;
        disabledfield.requestor = true;
        disabledfield.assignee = true;

    }
    if(userType === constants.userTypes.customer)
    {
        disabledfield.assignee = true;
    }
    return disabledfield;
    
}
export default fetchDisabledFields ;