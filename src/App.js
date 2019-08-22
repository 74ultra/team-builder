import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

import Card from "./components/Card.js";
import Form from "./components/Form.js";
import data from "./data.js";

function App() {
  const [people, setPeople] = useState(data);

  const addPerson = person => {
    setPeople([...people, { ...person, id: Date.now() }]);
  };

  const editPerson = editedPerson => {
    const peopleCopy = [...people];

    const personIndex = peopleCopy.findIndex(
      person => person.id === editedPerson.id
    );
    peopleCopy[0] = editedPerson;
    setPeople(peopleCopy);
  };

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/add">Add Team Member</Link>
      <Route
        path="/add"
        render={props => (
          <Form {...props} submitPerson={addPerson} buttonText="Add A Team Member" />
        )}
      />
      <Route
        exact
        path="/"
        render={props => people.map(person => <Card person={person} />)}
      />
      <Route
        path="/edit/:id"
        render={props => {
          const person = people.find(person => `${person.id}` === props.match.params.id
          );
          return (
            <Form
              {...props}
              initialPerson={person}
              submitPerson={editPerson}
              buttonText="Edit Person"
            />
          );
        }}
      />
    </div>
  );
}

export default App;

/*

- The 'setPeople' function is passed to the <Form /> component as one of its props
- This is done in order to allow what happens in the <Form /> component to update 'people'


*/
