import {useState, useEffect} from "react";
import { UpdateUser } from "../api/users";
import { useLocation, useNavigate } from "react-router-dom";

const useUserUpdate=(fetchUsers)=>{
    const location = useLocation();
    const navigate = useNavigate();

    const[userUpdateModal, setUserUpdateModal]= useState(false);
    const[selectedCurrUser, setSelectedCurrUser]= useState({});

    const setUserAndOpenModal =(userDetails)=>{

        setUserUpdateModal(true);
        setSelectedCurrUser(userDetails);
    }

    const editUsers =(userDetails)=>{

        console.log(userDetails);
        setUserUpdateModal(true);
        setSelectedCurrUser(userDetails);
        const url = `${location.pathname}/${userDetails.userId}`;
        navigate(url);
    }
    
    const closeUserUpdateModal =() =>{
        setUserUpdateModal(false);
        const url = "/Admin";
        navigate(url);
    }
    
    const onUserUpdate=(e)=>{
        console.log(e.target.value);
        
        if(e.target.name === "status")
        {
            selectedCurrUser.userStatus = e.target.value;
        }
        setSelectedCurrUser({...selectedCurrUser});
    }
    
    
    const UpdateUserFn=(e)=>{
        e.preventDefault();
        
        const userdata={
            _id : selectedCurrUser._id,
            status: selectedCurrUser.userStatus
    
        }
    
        // API CALL
        UpdateUser(userdata)
        .then(res=>{
            if(res.status === 200)
            {
    
             console.log("user update successfully");
             setUserUpdateModal(false);
            }
    
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    
        return {userUpdateModal, selectedCurrUser,  setUserAndOpenModal, closeUserUpdateModal , editUsers, onUserUpdate , UpdateUserFn };
}

export default useUserUpdate;
    
    
        

