function Student({name,age,city,college,skills,role}){
    return(
        <div style={{
            backgroundColor : "yellow",
            borderRadius : "2px solid gray",
            padding : "20px",
            margin : "20px",
            width : "300px",
            color : "black",
            justifyContent : "center",
            textAlign:"center",
            boxSizing:"border-box",

        }}
        >
            <b>Name: {name}</b>
            <p>Age: {age}</p>
            <p>📍 {city}</p>
            <p>🎓 {college}</p>
            <p>🛠️ {skills} </p>
            <p>💻 {role}</p>
        </div>
    );
}
export default Student;
