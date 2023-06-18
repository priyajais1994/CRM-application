import axios from 'axios';

 // const BASE_URL= "https://relevel-crm-be.herokuapp.com";

  const BASE_URL = "http://localhost:8000";

   // const BASE_URL = process.env.React_APP_CRM_BACKEND_URL;
  
export async function getAllUsers(data)
{
    return axios.get(`${BASE_URL}/crm/api/v1/users`, {

        headers:{
            'x-access-token': localStorage.getItem("token")
        }
    });
}
export async function UpdateUser(user)
{
    return axios.put(`${BASE_URL}/crm/api/v1/users/${user._id}`, user, {

        headers:{
            'x-access-token': localStorage.getItem("token")
        }
    

    })
}