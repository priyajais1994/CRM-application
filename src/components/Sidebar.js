import {CSidebar,CSidebarNav,CNavTitle,CNavItem,CSidebarToggler,CBadge,CSidebarBrand,cilSpeedometer,CNavGroup,} from "@coreui/react";
import {Link} from "react-router-dom";
import {logout} from "../handlers/logouthandler";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../App";


const Sidebar = () =>{

   const value = useContext(ThemeContext);
   const {theme,setTheme} = value;

   const onchangetheme=()=>{

      if(theme ==="light")
      {
         setTheme("dark");
      }
      else{
         setTheme("light");
      }
   }

    

    return(

        <CSidebar unfoldable className= {(theme ==="light")? "vh-100 bg-dark" : "vh-100 bg-primary"}>
  
        <CSidebarNav>

         <CNavItem href="#" className =  {(theme ==="light")? " bg-dark" : " bg-primary"}>
            
            <i className ="bi bi-bar-chart-fill text-white m-2"></i>
            </CNavItem>

            <CNavTitle className= "text-light fw-normal">
               A CRM APPLICATION 
            </CNavTitle>


         <CNavItem href="#">
         <i className ="bi bi-house text-white m-2"></i>

         <Link to ="/Admin" className ="text-decoration-none text-white"> Home </Link>

         
      
            </CNavItem>

           <div onClick ={logout}>

           <CNavItem href="#" >
            <i className ="bi bi-box-arrow-left text-white m-2"></i>

            <div className = "text-decoration-none text-white mx-3"> logout </div>

        
             </CNavItem>

           </div>

           <span className="mx-3">
            current theme : {theme}
            <Button onClick= {onchangetheme} className="mx-3"> change theme </Button>
           </span>
            

             
        
            
            
           </CSidebarNav>
            <CSidebarToggler />
             </CSidebar>





    )
}
export default Sidebar;