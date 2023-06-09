import Sidebar from "../components/Sidebar";
import StatusDashboard from "../components/statusDashboard/statusDashboard";
import useFetchTicket from "../hooks/useFetchTicket";
import useFetchUser from "../hooks/useFetchUser";
import useTicketUpdate from "../hooks/useTicketUpdate";
import useUserUpdate from "../hooks/useUserUpdate";
import Tickettable from "../components/Ticketstable/Ticketstable";
import TicketUpdateModal from "../components/TicketUpdateModal/TicketUpdateModal";
import UserTable from "../components/UserTable/UserTable";
import UserUpdateModal from "../components/UserUpdateModal/UserUpdateModal";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";



 


function Admin(){
  console.log("inside admin");

    const location = useLocation();
    console.log(location);
    const [userDetails, fetchUsers] = useFetchUser();

    useEffect(()=>{
      console.log("inside useeffect");

      const pathname = location.pathname;
      const userId = pathname.split('/')[2];
      console.log(userId);

      if(!userId){
        return;
      }

      const user = userDetails.find((user)=>user.userId === userId);
      console.log(user);

      if(!user)
      {
        return;
      }

      setUserAndOpenModal(user);
    }, [userDetails])

    const [ticketDetails, fetchtickets] = useFetchTicket();
    const {selectedCurrTicket, ticketUpdateModal, editTickets , closeTicketUpdateModal, onTicketUpdate, UpdateTicketFn}
    = useTicketUpdate(fetchtickets);
    const {selectedCurrUser, userUpdateModal, setUserAndOpenModal, editUsers, closeUserUpdateModal, UpdateUserFn, onUserUpdate}
    = useUserUpdate(fetchUsers);

    

    

    

    
 return(

        <div className= "row bg-light">

            <div className="col-1">
            <Sidebar/> 
            </div>

            <div className="col my-4">

                <div className= "container">

                <StatusDashboard ticketDetails ={ticketDetails}/>
                <br/>


                <div style={{ maxWidth: '100%' }}>

            <UserTable title={"USER RECORDS"} editUsers={editUsers} userDetails={userDetails}/>

            <UserUpdateModal selectedCurrUser={selectedCurrUser} userUpdateModal={userUpdateModal} 
    
             closeUserUpdateModal={closeUserUpdateModal} UpdateUserFn={UpdateUserFn} onUserUpdate={onUserUpdate}/>
            </div>
             <hr/>

        <div style={{ maxWidth: '100%' }}>

        <Tickettable title= {"TICKET RECORDS"} ticketDetails={ticketDetails} editTickets= {editTickets}/>
        <TicketUpdateModal selectedCurrTicket={selectedCurrTicket} ticketUpdateModal={ticketUpdateModal}
          closeTicketUpdateModal={closeTicketUpdateModal} onTicketUpdate={onTicketUpdate} UpdateTicketFn={UpdateTicketFn}/>
        </div>

        </div>
        </div>

         </div>
                                    
 );
}
export default Admin;