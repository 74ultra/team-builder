import React, { useState } from 'react';




const Form = (props) => {

    const [person, setPerson] = useState({name: "", email: "", role: ""});

    return (
        <form>
            <input placeholder="name" value={person.name}/>
            <input placeholder="email" value={person.email}/>
            <input placeholder="role" value={person.role}/>
        </form>
    )
}

export default Form;



// Stateful variable to set the initial value of 'person' then update that value based on form input