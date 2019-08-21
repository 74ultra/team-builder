import React, { useState } from 'react';




const Form = (props) => {

    const { setPeople } = props;
    
    const [person, setPerson] = useState({name: "", email: "", role: ""});

    const handleChange = event => {
        setPerson({...person, [event.target.name]: event.target.value})
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        setPeople(people => [...people, person]);
        setPerson({name: "", email: "", role: ""})
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="name" 
                   value={person.name}
                   name="name"
                   onChange={handleChange}
            />
            <input placeholder="email" 
                   value={person.email}
                   name="email"
                   onChange={handleChange}
            />
            <input placeholder="role" 
                   value={person.role}
                   name="role"
                   onChange={handleChange}
            />

            <button type="submit">Add Team Member</button>

        </form>
    )
}

export default Form;





/* 

- Initial value of 'person' set by useState
- input is given a 'name' prop for the handleChange function to use to pass to setPerson (which updates 'person')

*/