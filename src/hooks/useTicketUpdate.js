import {useState, useEffect} from "react";
import { UpdateTicket } from "../api/ticket";

const useTicketUpdate=(fetchtickets)=>{

    const[ticketUpdateModal, setTicketUpdateModal]= useState(false);
    const[selectedCurrTicket, setSelectedCurrTicket]= useState({});

    const editTickets =(ticketDetails)=>{

        console.log(ticketDetails);
        setTicketUpdateModal(true);
        setSelectedCurrTicket( { ...ticketDetails });
    }
    
    const closeTicketUpdateModal =() =>{
        setTicketUpdateModal(false);
    }
    
    const onTicketUpdate=(e)=>{
        console.log(e.target.name);
        const fieldName = e.target.name;
        if(fieldName === "title")
        {
            selectedCurrTicket.title = e.target.value;
        }
        else if(fieldName === "priority")
        {
            selectedCurrTicket.ticketPriority = e.target.value; 
        }
        else if(fieldName === "status")
        {
            selectedCurrTicket.status = e.target.value; 
        }
        else if(fieldName === "description")
        {
            selectedCurrTicket.description = e.target.value; 
        }
        else if(fieldName === "requestor")
        {
            selectedCurrTicket.requestor = e.target.value; 
        }
        else if(fieldName === "assignee")
        {
            selectedCurrTicket.assignee = e.target.value; 
        }
    
        setSelectedCurrTicket({...selectedCurrTicket});
    
    }
    
    const UpdateTicketFn=(e)=>{
        e.preventDefault();
        console.log(selectedCurrTicket);
    
        // API CALL
        UpdateTicket(selectedCurrTicket)
        .then((res)=>{
            console.log("ticket update successfully");
            setTicketUpdateModal(false);
            fetchtickets();
        })
        .catch(err=>{
            console.log(err.message);
        })
    }

    return {selectedCurrTicket, ticketUpdateModal , editTickets , closeTicketUpdateModal, UpdateTicketFn, onTicketUpdate};
}
export default useTicketUpdate;


    
    






