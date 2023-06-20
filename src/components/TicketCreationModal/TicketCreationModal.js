
import {Modal, Button} from "react-bootstrap";
import { createnewticket } from "../../api/ticket";

function TicketCreationModal(props){

    const createticket=(e)=>{
        e.preventDefault();

        const title= e.target.title.value;
        const priority= parseInt(e.target.priority.value);
        const description = e.target.description.value;

        console.log(title);
        console.log(priority);
        console.log(description);

        // API call
        const ticket = {title, ticketPriority:priority, description};
        createnewticket(ticket)
        .then(res=>{
            if(res.status===201)
            {
                window.location.href ="/Customer";
            }
        })
        .catch(err=>{
            console.log(err);
        })

    }

    return(
        <Modal show ={props.show} onHide= {props.onClose}>
            <Modal.Header closeButton>
                <Modal.Title> Create Ticket </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form onSubmit={createticket}>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> Title</span>
                        <input type="text" name= "title" required/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> Description</span>
                        <textarea type="text" name= "description" required className="md-textarea" row={5}/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"> Priority </span>
                        <select className="form-select" name="priority">
                            <option value="1"> one </option>
                            <option value="2"> two </option>
                            <option value="3"> three </option>
                            <option value="4"> four </option>
                            <option value="5"> five </option>

                        </select>

                    </div>

                    <Button variant="secondary" onClick={props.onClose}> cancel </Button>
                    <Button variant= "primary" type="submit"> create </Button>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default TicketCreationModal;