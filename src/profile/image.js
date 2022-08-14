import './image.css'

function Img(props){

    return(
       <img className="imgg" src={props.children}/>
    )
}
export default Img 