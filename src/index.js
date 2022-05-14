import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import ProfilPic1 from './images/1pro.jfif';
import ProfilPic2 from './images/2pro.jpg';
import ProfilPic3 from './images/3pro.png';
import ProfilPic4 from './images/4pro.jpg';
const App = () => {
    return(
        <div className = 'ui comments'>
            <SingleComment name='maarley' imgsr ={ProfilPic1} content='Nice bro !!!' timestamp ='Yesterday at 01:00'/>
            <SingleComment name='suba' imgsr ={ProfilPic2} content='good video ' timestamp ='Yesterday at 21:00'/>
            <SingleComment name='subamaarlesh' imgsr ={ProfilPic3} content='ok boomer' timestamp ='Today at 07:00'/>
            <SingleComment name='maarley14' imgsr ={ProfilPic4} content='naish naish eh' timestamp ='Today at 12:00' />
        </div>
    )
};
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)