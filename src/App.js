import React, { useState } from 'react';
import './App.css';

import Card from './components/Card.js';
import Form from './components/Form.js';
import data from './data.js'


function App() {

  const [people, setPeople] = useState(data);

  return (
    <div className="App">
      <Form />
      {people.map(person => <Card person={person} />)}
    </div>
  );
}

export default App;


