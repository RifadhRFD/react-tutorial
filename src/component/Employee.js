//employee function
function Employee(props) {
	return ( 
    <>
        <h3>My Name is {props.name} </h3>
        <p>{props.role ? props.role : "No Role"}</p>
    </>
    )
}
export default Employee;
