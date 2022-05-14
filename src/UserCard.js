import React from "react";

const UserCard = (props) =>{
    return(
        <div className='ui card'>
            <div className='content'>
                {props.children}
            </div>
            <div className='ui bottom button'>
                <i className='plus icon'></i>
                Follow
            </div>
        </div>
    )
}

export default UserCard;