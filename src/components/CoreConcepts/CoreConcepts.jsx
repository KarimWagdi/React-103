export default function Core_Concepts (props){
    return(
      <li>
        <img src={props.img} alt={props.title}/>
        <h3> {props.title} </h3>
        <p> {props.paragraph} </p>
      </li>
    )
  }