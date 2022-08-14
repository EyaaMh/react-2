import Img from "./image"
import pic from "./eya.jpeg"
import PropTypes from "prop-types";
function Add(props){
    function HandleName (){
        alert (props.user)
    }

    return(
        <p style={{color:"red" }}>{props.FullName} {props.bio} {props.profession}
        <Img>{pic}</Img>
        <a onClick={HandleName}>click me</a>
        </p>
    )
}
Add.defaultProps = {
    FullName:"aaaaaaaaaaaaaaaya"
   };
Add.propTypes={
    FullName: PropTypes.string,
    bio: PropTypes.element.isRequired
}
export default Add