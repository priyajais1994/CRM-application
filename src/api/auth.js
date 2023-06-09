import axios from 'axios';

 // const BASE_URL= "https://relevel-crm-be.herokuapp.com";

 const BASE_URL = "http://localhost:8000";

 // const BASE_URL = process.env.React_APP_CRM_BACKEND_URL;
 // console.log(process.env);
export async function userSignUp(data)
{
    return axios.post(`${BASE_URL}/crm/api/v1/auth/signup`, data);
}

export async function userSignIn(data)
{
    return axios.post(`${BASE_URL}/crm/api/v1/auth/signin`, data);

}