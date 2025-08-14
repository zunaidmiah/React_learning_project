import React from "react";
const Users = 
[
    { 
        id: 1,
        name: "John Doe",
        email: "john@gmailcom",
        skills:
        [
            {
                HTML : "100%",
                CSS : "90%",
                JavaScript : "80%"
            }
        ],
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@gmail.com",
        skills:
        [
            {
                HTML : "95%",
                CSS : "85%",
                JavaScript : "75%"
            }
        ],
    }   
]

function UserCard() {
    return (
        <div className="user-card">
            {Users.map((user) => (
                <div key={user.id} className="userCard">
                    <h1>{user.name}</h1>
                    <h2>{user.email}</h2>
                    <p className="skills">
                        Skills:<br/>
                        
                        {user.skills.map((skill, index) => (
                            <span key={index} className="skills">
                                {Object.entries(skill).map(([skillName, skillLevel]) => (
                                    <span key={skillName}>{skillName}: {skillLevel} </span>
                                ))}
                                {/* <span>HTML: {skill.HTML}</span>
                                <span>CSS: {skill.CSS}</span>
                                <span>JavaScript: {skill.JavaScript}</span> */}
                            </span>
                        ))}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default UserCard;