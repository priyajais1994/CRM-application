
import { Button } from "react-bootstrap";

function CustomButton(props)
{
    function onButtonClick()
    {
        console.log(props.div.current);
       // props.inputfield.current.focus();
        
    }

    return(
        <Button  onClick = {onButtonClick}>
            custom button 
        </Button>
    )

}

export default CustomButton;