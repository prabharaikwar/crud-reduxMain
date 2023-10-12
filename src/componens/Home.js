import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, deleteUser } from '../services/actions/action'
import { Table, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.users.allUsers);
    // console.log('allUsers:', allUsers);

    useEffect(() => {
        dispatch(getUserData()); // Dispatch the fetchUserData action
    }, [dispatch]);

    //delete user

    const handleDelete = (userId) => {
        dispatch(deleteUser(userId)) // Dispatch the removeUser action
    }




    return (
        <Container>
            {allUsers ?
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {/* <th>#</th> */}
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        {/* <td>{index+1}</td> */}
                                        <td>{user.id}</td>
                                        <td>{user.title}</td>
                                        <td>{user.body}</td>
                                        <td><Button variant="info" onClick={() => { navigate(`/edit/${user.id}`) }}>Edit</Button></td>
                                        <td><Button variant="danger" onClick={() => { handleDelete(user.id) }}>Delete</Button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                : <div>Loading...</div>
            }
        </Container>
    )
}

export default Home