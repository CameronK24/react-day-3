import React from 'react';

const DisplayText = props => {


    return (
        <div className='user-info-display'>
            <span className='user-numbers'>{props.currentUser + 1}/{props.userInfo.length} </span>
            <section className='name-section'>
                <h2>{props.userInfo[props.currentUser].name.first} {props.userInfo[props.currentUser].name.last}</h2>
            </section>
            <section className='personal-info-section'>
                <p>From: <span>{props.userInfo[props.currentUser].city}, {props.userInfo[props.currentUser].country}</span></p>
                <p>Job Title: <span>{props.userInfo[props.currentUser].title}</span></p>
                <p>Employer: <span>{props.userInfo[props.currentUser].employer}</span></p>
            </section>
            <section className='movies-section'>
                <ol>Favorite Movies: 
                    <li>{props.userInfo[props.currentUser].favoriteMovies[0]} </li>
                    <li>{props.userInfo[props.currentUser].favoriteMovies[1]} </li>
                    <li>{props.userInfo[props.currentUser].favoriteMovies[2]} </li>
                </ol>
            </section>            
        </div>
    )
}

export default DisplayText;