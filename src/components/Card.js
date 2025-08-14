import React from 'react';
import '../style.css';
import UserCard from './UserCard';

// const CardTitle = 'Title is here';
// const CardSubTitle = 'Sub Title is here';
const CardDescription = 'This is my First React Project.';

function Card(props){
  const { cardTitleText, cardSubTitleText } = props;
  return  <div className='card'>
            <h1>{cardTitleText}</h1>
            <h2>{cardSubTitleText}</h2>
            <p className='pStyle'>
              {CardDescription}
            </p>
            <UserCard />
          </div>
  
}


export default Card;