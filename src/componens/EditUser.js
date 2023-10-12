import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Container, Button } from 'react-bootstrap';
import { editUser } from '../services/actions/action';
import { useDispatch } from 'react-redux';

const EditUser = () => {
  const { userId } = useParams(); // to get prefilled data in the input

  const [inputData, setInputData] = useState({
    id: userId,
    title: '',
    body: ''
  })
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     const editUser  = getUserData.find((currentUser) => currentUser.id === parseInt(userId,0));
  //     setAllUsers(editUser )
  // }, [userId])


  const handleEditUser = () => {
    // Dispatch the editUser action with the updated data
    dispatch(editUser(inputData));

    // Navigate back after editing
    navigate('/');
  };

  return (
    <Container className=''>
      <Form style={{ width: "50%" }}>
        <Form.Group >
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Id" value={inputData.id} onChange={e => setInputData({ ...inputData, id: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" value={inputData.title} onChange={e => setInputData({ ...inputData, title: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Body</Form.Label>
          <Form.Control type="text" placeholder="Body" value={inputData.body} onChange={e => setInputData({ ...inputData, body: e.target.value })} />
        </Form.Group>
      </Form>
      <Button onClick={() => { navigate('/') }} className='me-2' variant="outline-secondary">Back</Button>
      <Button onClick={() => { handleEditUser(inputData.id) }} variant="outline-warning">Edit User</Button>
    </Container>
  )
}

export default EditUser;