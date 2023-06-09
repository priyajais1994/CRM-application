import {useState, useEffect} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {userSignUp, userSignIn} from "../api/auth";


function  Login(){

    const [showSignup, setShowSignUp]= useState(true);

    const[userId, setUserId] = useState("");
    const[password, setpassword] = useState("");
    const[userName, setUserName] = useState("");
    const[userEmail, setUserEmail]= useState("");
    const[userType, setUserType] =useState("CUSTOMER");
    const[message, setMessage] = useState("");
    const[error, setError] = useState(false);

    useEffect(() => {

        const userType = localStorage.getItem("userType");
        const token = localStorage.getItem("token");
        if(!token || !userType)
        {
            return;

        }

           if(userType === "CUSTOMER")
            {
                window.location.href="/Customer";
            }
            else if(userType === "ENGINEER")
            {
                window.location.href="/Engineer";
            }
            else
            {
                window.location.href="/Admin";
            }



    }, []);

    const toggleSignup =() =>{
        clearstate();

        setShowSignUp(!showSignup)
    }

    const clearstate=() =>{

        setUserId("");
        setpassword("");
        setUserEmail("");
        setUserName("");
        setError(false);
        setMessage("");
    }

    const onLogin = (e) =>
    {
        const data= {userId, password};

        e.preventDefault();

        //API CALL
        userSignIn(data)
        .then(res => {
            console.log(res);
            setError(false);
            setMessage("login successful");

            //  store the user info that are getting from backend in browser local storage at the time of login

            localStorage.setItem("name", res.data.name);
            localStorage.setItem("userId", res.data.userId);
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("userStatus", res.data.userStatus);
            localStorage.setItem("token", res.data.accessToken);
            localStorage.setItem("userType", res.data.userType);
            

            if(res.data.userType === "CUSTOMER")
            {
                window.location.href="/Customer";
            }
            else if(res.data.userType === "ENGINEER")
            {
                window.location.href="/Engineer";
            }
            else
            {
                window.location.href="/Admin";
            }
            

        
            
            
        })
        .catch(err=>{
            if(err.response.data)
            {
                setError(true);
                setMessage(err.response.data.message);
            }
        })

    }

    const onSignup =(e) =>
    {
        const data= {
            name:"userName",
            userId: "userId",
            email:"userEmail",
            password: "password",
            userType: "userType"
        };
        e.preventDefault();

        if(userId.length<5){
            setError(true);
            setMessage("userid should be of 5 to 10 character");
            return;
        }
        else if(password.length<5 || password.length>12)
        {
            setError(true);
            setMessage("password should be of 5 to 12 character");
            return;
        }
        // API CALL
        userSignUp(data)
        .then(res =>{
            console.log(res);
            setError(false);
            setMessage("signup successful");
            window.location.href ="/";
        })

        .catch(err=> {
            if(err.response.status===400){
                setError(true);
                setMessage(err.response.data.message);
            }
        })

        
    }

    const updateSignUpData =(e) =>{

        const id= e.target.id;

        if(id==="userId")
        {
            setUserId(e.target.value);
        }
        else if(id==="password")
        {
            setpassword(e.target.value);
        }
        else if(id==="email")
        {
            setUserEmail(e.target.value);
        }
        else{
            setUserName(e.target.value);
        }
    }

    const handleSelect =(e) =>{
        console.log(e);
        setUserType(e);
    }
     
    return <div className ="bg bg-info d-flex justify-content-center align-items-center vh-100">

        <div style={{width:30 + "rem"}} className= "card p-3 rounded-4 shadow-lg">

            <h4 className= "text-info">{showSignup? "signup" : "login"}</h4>

            <form onSubmit= {showSignup? onSignup : onLogin}>

                <div className="input-group">
                    <input className="form-control m-1" type="text" value={userId} id="userId"onChange={updateSignUpData}placeholder= "userid"/>
                </div>

                <div className= "input-group">
                    <input className= "form-control m-1" type="text" value={password}id="password" onChange={updateSignUpData}placeholder= "password"/>
                </div>

                {
                    showSignup&&
                    <>
                    <div className= "input-group">
                        <input className="form-control m-1" type="text" value={userName} id="userName"onChange={updateSignUpData} placeholder="username"/>
                    </div>

                    <div className= "input-group">
                        <input className="form-control m-1" type="text" value={userEmail} id="email"onChange={updateSignUpData} placeholder="email"/>
                    </div>
                    </>
                }

                {
                    showSignup && 
                    <DropdownButton
                        title= {userType}
                       onSelect = {handleSelect}
                        id= "userType"
                        variant="light"
                        value= {userType}
                        
                        >
                      
                
                        
                <Dropdown.Iten eventKey="CUSTOMER"> CUSTOMER </Dropdown.Iten>
                <Dropdown.Item eventKey="ENGINEER"> ENGINEER</Dropdown.Item>
                <Dropdown.Item eventKey= "ADMIN"> ADMIN </Dropdown.Item>

                    </DropdownButton>
                }

                <div className= "input-group">
                    <input className= "bg bg-info form-control text-white m-1" type= "submit" value= {showSignup? "signup" : "login"}/>
                </div>

                <div className= "text-info m-1" onClick= {toggleSignup}>
                    {
                        showSignup? "already have an account?login":
                        "don't have an account? signup"

                    }
                    
                </div>

                <div className= {error? "text-danger" : "text-success"}> {message} </div>
            </form>
        </div>
    </div>
}
export default Login;