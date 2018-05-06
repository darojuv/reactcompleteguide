import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map( ( person, index ) => 
    {
      //console.log(person.name + "; " + person.age + "; " +person.id);
      return <Person
      click={() => props.clicked(index)}
      name={person.name} 
      age={person.age}
      key={person.id}
      changed={(event) => props.changed(event, person.id)} />});
  
export default persons;
//changed={(event) => props.changed(event, person.id)} />