

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useCreateTicket = () =>{
    const navigate = useNavigate();

    const [createTicketModal, setCreateTicketModal] = useState(false);

    const CloseCreateTicketModal = () =>{
        setCreateTicketModal(false);
        navigate("/Customer");
    }

    const OpenCreateTicketModal =()=>{

        setCreateTicketModal(true);
        navigate("/Customer/CreateTicket");
    }

    return {createTicketModal, CloseCreateTicketModal, OpenCreateTicketModal}
}

export default useCreateTicket;