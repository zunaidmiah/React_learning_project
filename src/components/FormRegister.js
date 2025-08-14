import React, {useState} from "react";
import '../FormRegister.css'; // Assuming you have a CSS file for styling

const {name, setName} = useState("");
const {email, setEmail} = useState("");
const {phone, setPhone} = useState("");

function FormRegister(){
    return (
        <div className="form-register">
            <h2>Form Component</h2>
            <form action="">

                <div className="form-group"> 
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" required />
                </div>

                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default FormRegister;