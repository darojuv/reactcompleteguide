import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props){
      super(props);
    console.log('[Persons.js] in side Constructor', props);
    };
    componentWillMount()
    {
      console.log('[Persons.js] inside componenetWillMount()');
    };
    componentDidMount()
    {
      console.log('[Persons.js] inside componenetDidMount()');
    };
    render(){
      console.log('[Persons.js] inside rendor()')
      return this.props.persons.map( ( person, index ) => {
        return <Person
        click={() => this.props.clicked(index)}
        name={person.name} 
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)} />});
      };
}
  
export default Persons;
//changed={(event) => props.changed(event, person.id)} />