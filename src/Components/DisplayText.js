import React from 'react';

const DisplayText = props => {


    return (
        <div className='user-info-display'>
            {/* {props.userInfo.name.first} */}
            <section className='name-section'>
                <h2>{props.userInfo.name.first} {props.userInfo.name.last}</h2>
            </section>
            <section className='personal-info-section'>
                <p>From: <span>{props.userInfo.city}, {props.userInfo.country}</span></p>
                <p>Job Title: <span>{props.userInfo.title}</span></p>
                <p>Employer: <span>{props.userInfo.employer}</span></p>
            </section>
            <section className='movies-section'>
                <ol>Favorite Movies: 
                    <li>{props.userInfo.favoriteMovies[0]} </li>
                    <li>{props.userInfo.favoriteMovies[1]} </li>
                    <li>{props.userInfo.favoriteMovies[2]} </li>
                </ol>
            </section>            
        </div>
    )
}

export default DisplayText;