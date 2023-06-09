import {Modal, Button} from "react-bootstrap";
import fetchDisabledFields from "../../utils/FetchDisabledField";
import { useContext } from "react";
import { ThemeContext } from "../../App";


function TicketUpdateModal(props){

    const value = useContext(ThemeContext);
    const theme = value.theme;
    console.log(theme);

    console.log(props.tickettableRef);



    const {selectedCurrTicket, ticketUpdateModal,  closeTicketUpdateModal, onTicketUpdate, UpdateTicketFn} = props;

    const disabledfield = fetchDisabledFields();

    return(

        <Modal show= {ticketUpdateModal} onHide={closeTicketUpdateModal}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Edit Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style = {{backgroundColor:(theme === "light")? "white":"black"}}>
                <form onSubmit= {UpdateTicketFn}>

                    <div className="p-1">
                        <h5 className="card-subtitle mb-2 text-primary"> TICKET Id: {selectedCurrTicket._id} </h5>

                        

                        <div className="input-group mb-2">
                            <span className="input-group-text"> Title </span>
                           <input type="text" disabled={disabledfield.title} name= "title" value={selectedCurrTicket.title} onChange={onTicketUpdate} />

                           </div>

                           <div className="input-group mb-2">
                            <span className="input-group-text"> PRIORITY </span>
                            <input type="text" disabled={disabledfield.priority} name= "priority" value={selectedCurrTicket.ticketPriority} onChange={onTicketUpdate}/>

                           </div>

                           <div className="input-group mb-2">
                            <span className="input-group-text"> status </span>
                            <select name= "status" disabled={disabledfield.status} value={selectedCurrTicket.userStatus} onChange={onTicketUpdate}
                            className="form-select">

                                <option value= "OPEN"> OPEN </option>
                                <option value= "PROGRESS"> PROGRESS </option>
                                <option value= "CLOSED"> CLOSED </option>
                                <option value= "BLOCKED"> BLOCKED </option>
                            </select>

                           </div>

                           <div className="input-group mb-2">
                            <span className="input-group-text"> REQUESTOR </span>
                            <input type="text" disabled={disabledfield.requestor} name= "requestor" value={selectedCurrTicket.requestor} onChange={onTicketUpdate}/>

                           </div>

                           <div className="input-group mb-2">
                            <span className="input-group-text"> ASSIGNEE </span>
                            <input type="text"disabled={disabledfield.assignee}  name= "assignee" value={selectedCurrTicket.assignee} onChange={onTicketUpdate}/>

                           </div>

                           <div className="input-group mb-2">
                            
                            <textarea type="text" disabled={disabledfield.description}className="md-textarea form-control" name= "description" rows="4" value={selectedCurrTicket.description} onChange={onTicketUpdate} />

                           </div>

                
                           

                           </div>
                    <Button variant ="secondary" onClick={closeTicketUpdateModal}>
                    close
                </Button>
                <Button type="submit" variant="primary" >
                    update
                </Button>
                </form>
            </Modal.Body>
            </Modal>

    )
}
export default TicketUpdateModal;
