import React from 'react';

const Card = (props) => {
    
    const person = props.person;
    // const { person } = props;

    return(
        <div>
            <div>{person.name}</div>
            <div>{person.email}</div>
            <div>{person.role}</div>
        </div>
    )

}

export default Card;