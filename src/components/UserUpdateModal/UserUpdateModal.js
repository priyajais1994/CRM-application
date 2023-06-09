

import { useContext } from "react";
import {Modal, Button} from "react-bootstrap";
import { ThemeContext } from "../../App";

function UserUpdateModal(props)
{
    const value = useContext(ThemeContext);
    const theme = value.theme;
    console.log(theme);

    const {selectedCurrUser, userUpdateModal,  closeUserUpdateModal, UpdateUserFn, onUserUpdate} = props;


    return(

        <Modal show= {userUpdateModal} onHide={closeUserUpdateModal}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Edit Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style = {{backgroundColor:(theme === "light")?"white" : "black"}}>
                <form onSubmit= {UpdateUserFn}>

                    <div className="p-1">
                        <h5 className="card-subtitle mb-2 text-primary"> USER Id: {selectedCurrUser.userId} </h5>

                        <h5 className="card-subtitle mb-2 text-primary"> USER TYPES: {selectedCurrUser.userTypes} </h5>

                        <div className="input-group mb-2">
                            <span className="input-group-text"> Name </span>
                            <input type="text" disabled name= "name" value={selectedCurrUser.name} />

                           </div>

                           <div className="input-group mb-2">
                            <span className="input-group-text"> Email </span>
                            <input type="text" disabled name= "email" value={selectedCurrUser.email} />

                           </div>

                           <div className="input-group mb-2">
                            <span className="input-group-text"> status </span>
                            <select name= "status" value={selectedCurrUser.userStatus} onChange={onUserUpdate}
                            className="form-select">

                                <option value= "APPROVED"> APPROVED </option>
                                <option value= "PENDING"> PENDING </option>
                                <option value= "REJECTED"> REJECTED </option>
                            </select>

                           </div>

                
                           

                           </div>
                    <Button variant ="secondary" onClick={closeUserUpdateModal}>
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
export default UserUpdateModal;