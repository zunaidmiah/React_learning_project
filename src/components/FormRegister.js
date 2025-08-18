import React, {useState} from "react";
import '../FormRegister.css'; // Assuming you have a CSS file for styling


function FormRegister(){
    const [user, setUser] = useState({name: '', email: '', phone: ''});
    const {name, email, phone} = user;

    const handleName = (e) => {
        setUser({name: e.target.value, email, phone});
    };

    const handleEmail = (e) => {
        setUser({name, email: e.target.value, phone});
    };

    const handlePhone = (e) => {
        setUser({name, email, phone: e.target.value});
    };

    const handleEvent = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };

    return (
        <div className="form-register">
            <h2>Form Component</h2>
            <form action="" onSubmit={formSubmit}>

                <div className="form-group"> 
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required onChange={handleEvent} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required onChange={handleEvent} />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" required onChange={handleEvent} />
                </div>

                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default FormRegister;