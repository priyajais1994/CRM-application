


import Sidebar from "../components/Sidebar";
import StatusDashboard from "../components/statusDashboard/statusDashboard";
import useFetchTicket from "../hooks/useFetchTicket";
import Tickettable from "../components/Ticketstable/Ticketstable";
import TicketUpdateModal from "../components/TicketUpdateModal/TicketUpdateModal";
import useTicketUpdate from "../hooks/useTicketUpdate";
import useCreateTicket from "../hooks/usecreateTicket";
import TicketCreationModal from "../components/TicketCreationModal/TicketCreationModal";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";





function Customer(){
  const location = useLocation();
  console.log(location);

  useEffect(()=>{

    const pathname = location.pathname;
    const isCreateTicketTrue = pathname.split('/')[2] === "CreateTicket";
    if(isCreateTicketTrue)
    {
      OpenCreateTicketModal();
    }


  }, [])

  
  const [ticketDetails, fetchtickets] = useFetchTicket();
  const {selectedCurrTicket, ticketUpdateModal, editTickets , closeTicketUpdateModal, onTicketUpdate, UpdateTicketFn}
    = useTicketUpdate(fetchtickets);
  const {createTicketModal, CloseCreateTicketModal, OpenCreateTicketModal} = useCreateTicket();

  

  

return(
      <div className="row bg-light">

          <div className="col-1">
              <Sidebar/>
          </div>

          <div className="col my-4">

                <div className= "container">

                <StatusDashboard ticketDetails ={ticketDetails}/>
                <br/>

                <div style={{ maxWidth: '100%' }}>

        <Tickettable title= {"TICKET RAISED BY YOU"} ticketDetails={ticketDetails} editTickets={editTickets}/>

        <input className ="bg-primary border-white text-white" style={{width:"100%"}} type="submit" value= "Raise Ticket" onClick={OpenCreateTicketModal}/>
            
        
        <TicketUpdateModal selectedCurrTicket={selectedCurrTicket} ticketUpdateModal={ticketUpdateModal}
          closeTicketUpdateModal={closeTicketUpdateModal} onTicketUpdate={onTicketUpdate} UpdateTicketFn={UpdateTicketFn}/>
          <TicketCreationModal show={createTicketModal} onClose={CloseCreateTicketModal}/>
        </div>

                </div>
                </div>
          

      </div>
  );
}

export default Customer;