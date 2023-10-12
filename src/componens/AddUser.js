import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../services/actions/action'

const AddUser = () => {

  const [inputData, setInputData] = useState({
    id: '',
    title: '',
    body: ''
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddUser = () => {
    dispatch(addUser(inputData));

    navigate('/')
  }


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
      <Button onClick={() => { handleAddUser(inputData.id) }} variant="outline-warning">Add User</Button>
    </Container>
  )
}

export default AddUser