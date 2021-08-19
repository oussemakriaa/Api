import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import UserCard from '../UserCard/UserCard'

const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {setUsers(res.data);setLoading(false)})  
    }, [])
    if(loading){
        return  <Spinner animation="border" variant="dark" />
    }
    return (
        <div className="d-flex justify-content-around flex-wrap">
            {
                users.map(user => <UserCard user={user} key={user.id}/>)
            }
        </div>
    )
}

export default UserList
