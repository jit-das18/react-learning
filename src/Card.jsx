function Card(props){
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.role}</p>
            <p>{props.age}</p>
            <p>{props.college}</p>
            <p>{props.city}</p>
        </div>
    );
}
export default Card;