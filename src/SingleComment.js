import React from "react";


const SingleComment = (props) => {
    return(
        <div className = 'comment'>
            <a className = 'avatar' href="/">
                <img src={props.imgsr}></img>
            </a>
            <div className='content'>
                <a className='author'>{props.name}</a>
                <div className='metadata'>
                <span className='date'>
                    {props.timestamp} 
                </span>
            </div>
            <div className = 'text'>
                {props.content}
            </div>
            </div>
        </div>
    )
}

export default SingleComment;