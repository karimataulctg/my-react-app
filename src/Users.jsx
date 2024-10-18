import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=> setUsers(data))
    }, [])
    const craateStyle = {
        border: '2px solid white',
        padding: '20px',
        borderRadius: '15px',
        margin: '20px',
        
    }
    return (
        <div style={craateStyle}>
            <h3>Users: {users.length}</h3>
        </div>
    )
}