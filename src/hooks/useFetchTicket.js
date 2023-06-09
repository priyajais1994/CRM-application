import { getAllTickets } from "../api/ticket";
import {useState, useEffect} from "react";

const useFetchTicket=()=>{

    const [ticketDetails, setTicketDetails] = useState([]);

    useEffect(()=>{
        fetchtickets();

    }, [])

    const fetchtickets =()=>{

        getAllTickets()
        .then(res=>{
            console.log(res.data);
            setTicketDetails(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return [ticketDetails, fetchtickets];
}
export default useFetchTicket;