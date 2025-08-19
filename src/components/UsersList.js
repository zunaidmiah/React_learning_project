import React from "react";

import UserInfo from "./UserInfo";

function UsersList(props) {

    return (
        <div className="users-list">
            <div className="users">
                {props.users.map((user) => (
                    <div className="user" key={user.id}>
                        <UserInfo user={user} onDeleteUser={props.onDeleteUser} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UsersList;