import { useRef } from "react";
import CustomButton from "../components/common/Button";


function Custom(){
      // creating ref
    const div = useRef(null);
    return(
        <div ref={div}>
            <input type = "text"/>
            <CustomButton div= {div}/>
        </div>
    )

    /*const inputfield = useRef(null);

    return(
        <div>
            <input type= "text" ref= {inputfield}/>
            <CustomButton inputfield={inputfield}/>
        </div>
    )*/

    /*const inputRef = useRef(null);

    function onButtonClick()
    {
        inputRef.current.focus();
    }

    return(

          <div style = {{width: "20px"}}>
             <input type = "text" ref ={inputRef} />
              <input type ="button" value = "focus the  text input" onClick={onButtonClick} />
                </div>
            
    )*/
     
}

export default Custom;

