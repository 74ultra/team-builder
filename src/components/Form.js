import React, { useState } from 'react';

const Form = (props) => {
  console.log(props);
  
  const { submitPerson, initialPerson, buttonText, history } = props;
  
  const [person, setPerson] = useState(initialPerson || {name: "", email: "", role: ""});
  
  const handleChange = event => {
    setPerson({...person, [event.target.name]: event.target.value});
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    submitPerson(person);
    setPerson({name: "", email: "", role: ""});
    history.push("/");
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
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default Form;





/* 

- 'setPeople' is received from App.js as a prop
- a 'setPeople' variable is declared and set equal to 'props.setPeople' - could be destructured 
- Initial value of 'person' set by useState
- input is given a 'name' prop for the handleChange function to use to pass to setPerson (which updates 'person')
- The 'handleSubmit' function is passed to the onSubmit property - 
        1. prevents default behavior of the 'submit' button
        2. runs 'setPeople', which gives sets value of 'people' to '...person' (the creates a new array which copies to old values) and adds 'person' (from the form information) - alternately, 'people' could be passed down as a prop
        3. runs 'setPerson' and passes in blank info which effectively resets the values in the inputs


*/