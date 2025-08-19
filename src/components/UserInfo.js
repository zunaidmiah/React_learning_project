import  React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaRegTrashAlt } from "react-icons/fa";


function UserInfo(props) {
    const [ show, setShow ] = useState(true);
    const { id, name, phone, email, about } = props.user;

    const handleShowHide = ()=> {
        setShow(!show);
    }

    const handleDelete = (id) => {
        props.onDeleteUser(id);
        // alert(`User with ID ${id} deleted`);
    }

    return (
        <Card className="text-center">
            <Card.Header className='heading'>
                User Name : {name}
                <Button variant="danger" onClick={() => handleDelete(id)} className="float-end">
                    <FaRegTrashAlt />
                </Button>    
            </Card.Header>
            <Card.Body>
                <Card.Title>Phone : {phone}</Card.Title>
                <Card.Title>Email : {email}</Card.Title>
                { show && 
                <Card.Text>
                    <b>About : </b>{about}
                </Card.Text>
                }
                <Button variant="primary" onClick={handleShowHide}>{show ? 'Hide' : 'Show'}</Button>
            </Card.Body>
            {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
        </Card>
    );
}

export default UserInfo;