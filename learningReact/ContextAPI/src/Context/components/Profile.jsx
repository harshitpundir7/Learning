import React, {useContext, useState} from "react";
import UserContext from "../UserContext";

function Profile(){
    const {user} = useContext(UserContext)
    if(!user) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
};

export default Profile;