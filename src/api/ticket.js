import axios from 'axios';

  // const BASE_URL= "http://localhost:8000";

  const BASE_URL = "https://crm-backend-app-r0ik.onrender.com";

  // const BASE_URL = process.env.React_APP_CRM_BACKEND_URL;
  
export async function getAllTickets(data)
{
    return axios.get(`${BASE_URL}/crm/api/v1/tickets`, {

        headers:{
            'x-access-token': localStorage.getItem("token")
        }
    });
}
export async function UpdateTicket(ticket)
{
    return axios.put(`${BASE_URL}/crm/api/v1/tickets/${ticket._id}`, ticket, {

        headers:{
            'x-access-token': localStorage.getItem("token")
        }
    });
}

export async function createnewticket(ticket)
{
    console.log(ticket);
    return axios.post(`${BASE_URL}/crm/api/v1/tickets`, ticket, {

        headers:{
            'x-access-token': localStorage.getItem("token")
        }
    }); 
}

// API function for delete ticket by id

export async function deleteTicket(id){
    return axios.delete(`${BASE_URL}/crm/api/v1/tickets/${id}`,{
        headers:{
            'x-access-token':localStorage.getItem("token")
        }
    })
}

    
          

