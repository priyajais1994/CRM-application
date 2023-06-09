  
  import Sidebar from "../components/Sidebar";
  import StatusDashboard from "../components/statusDashboard/statusDashboard";
  import useFetchTicket from "../hooks/useFetchTicket";
  import Tickettable from "../components/Ticketstable/Ticketstable";
  import TicketUpdateModal from "../components/TicketUpdateModal/TicketUpdateModal"; 
  import useTicketUpdate from "../hooks/useTicketUpdate";
  import {forwardRef, useRef} from "react";

  const tickettable = forwardRef((props, ref) => {
     return <Tickettable ref= {ref}/>
  });
  
  

  function Engineer(){

    
    const [ticketDetails, fetchtickets] = useFetchTicket();
    const {selectedCurrTicket, ticketUpdateModal, editTickets , closeTicketUpdateModal, onTicketUpdate, UpdateTicketFn}
    = useTicketUpdate(fetchtickets);

    const tickettableRef = useRef(null);


    

    

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

        <Tickettable title= {"TICKET ASSIGNED TO YOU"} ticketDetails={ticketDetails} editTickets= {editTickets}/>
        <TicketUpdateModal tickettableRef={tickettable}  selectedCurrTicket={selectedCurrTicket} ticketUpdateModal={ticketUpdateModal}
          closeTicketUpdateModal={closeTicketUpdateModal} onTicketUpdate={onTicketUpdate} UpdateTicketFn={UpdateTicketFn}/>
        </div>

                </div>
                </div>

            
        </div>
    );
}
export default Engineer;