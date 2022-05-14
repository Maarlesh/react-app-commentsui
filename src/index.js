import React from 'react';
import ReactDOM from 'react-dom';
import ProfilPic from './images/1pro.jfif';
const App = () => {
    return(
        <div className = 'ui comments'>
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
        </div>
    )
};
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)