import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
    } 
  console.log('[App.js] in side Constructor', props);
  }
  componentWillMount()
  {
    console.log('[App.js] inside componenetWillMount()');
  }
  componentDidMount()
  {
    console.log('[App.js] inside componenetDidMount()');
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Insde shouldComponentUpdate', nextProps, nextState);
    //return true;
    return nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked;
  }
  
  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Insde componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate(){
    console.log('[UPDATE App.js] Insde componentDidUpdate');
  }
  nameChangedHandler = (event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    console.log(personIndex);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
     const persons = this.state.persons.slice();
    //const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    console.log('[App.js] inside render()');

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
            <Persons clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler} 
                    persons={this.state.persons} />
        </div>
      );

    }

    return (
      <div className={classes.App}>
      <button onClick={() => {this.setState({showPersons: true})}} >Show Persons</button>
      <Cockpit showPersons={this.state.showPersons} 
      persons={this.state.persons} 
      Click={this.togglePersonsHandler}
      appTitle={this.props.title}
      />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
export default App;