import { getAllUsers } from "../api/users";
import {useState, useEffect} from "react";

const useFetchUser= ()=>{

    const [userDetails, setUserDetails] = useState([]);

    useEffect(()=>{
        fetchUsers();

    }, [])

    const fetchUsers =()=>{

        getAllUsers()
        .then(res=>{
            console.log(res.data);
            setUserDetails(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return [userDetails, fetchUsers];
}
export default useFetchUser;