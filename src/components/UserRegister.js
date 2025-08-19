import React, {useState} from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UsersList(props) {
        
    const [users, setUsers] = useState({
        id : 11,
        name: '',
        email: '',
        phone: '',
        about: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setUsers((prevUsers) => {
            return { ...prevUsers, [name]: event.target.value };
        });
    }

    const handleAddUser = (event) => {
        event.preventDefault();
        props.onAddUser(users);
        setUsers({
            id: users.id + 1,
            name: '',
            email: '',
            phone: '',
            about: ''
        });
    }

    return (
        <Form onSubmit={handleAddUser}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="labeling">Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name.." name="name" onChange={handleChange} value={users.name} />
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="labeling">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} value={users.email} />
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label className="labeling">Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter phone" name="phone" onChange={handleChange} value={users.phone} />
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>About</Form.Label>
                <Form.Control as="textarea" rows={3} name="about" onChange={handleChange} value={users.about} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default UsersList;