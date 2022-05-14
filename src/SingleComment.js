import React from "react";
import ProfilPic from './images/1pro.jfif';

const SingleComment = () => {
    return(
        <div className = 'comment'>
            <a className = 'avatar' href="/">
                <img src={ProfilPic}></img>
            </a>
            <div className='content'>
                <a className='author'>Maarley</a>
                <div className='metadata'>
                <span className='date'>
                    Today at 5:00 pm 
                </span>
            </div>
            <div className = 'text'>
                Perfectt eh !!!!
            </div>
            </div>
        </div>
    )
}

export default SingleComment;