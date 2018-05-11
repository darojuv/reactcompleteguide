import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
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


    componentWillReceiveProps(nextProps){
      console.log('[UPDATE Persons.js] Insde componentWillReceiveProps', nextProps);
     }
    // shouldComponentUpdate(nextProps, nextState){
    //   console.log('[UPDATE Persons.js] Insde shouldComponentUpdate', nextProps, nextState);
    //   return nextProps.persons !== this.props.persons || 
    //   nextProps.changed !== this.props.changed ||
    //   nextProps.clicked !== this.props.clicked;
    //   //return true;
    // }
    
    componentWillUpdate(nextProps, nextState){
      console.log('[UPDATE Persons.js] Insde componentWillUpdate', nextProps, nextState);
    }
    componentDidUpdate(){
      console.log('[UPDATE Persons.js] Insde componentDidUpdate');
    }
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