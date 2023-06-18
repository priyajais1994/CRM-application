import axios from 'axios';

 // const BASE_URL= "https://relevel-crm-be.herokuapp.com"; // this is crm backend app deployment link on herokuapp

  const BASE_URL = "http://localhost:8000"; // crm backend app deployment link on localhost 8000
 //const BASE_URL = "https://crm-application-zysm.onrender.com/"; // crm backend app deployment link on render

  // const BASE_URL = process.env.React_APP_CRM_BACKEND_URL;

export async function userSignUp(data)
{
    return axios.post(`${BASE_URL}/crm/api/v1/auth/signup`, data);
}

export async function userSignIn(data)
{
    return axios.post(`${BASE_URL}/crm/api/v1/auth/signin`, data);

}