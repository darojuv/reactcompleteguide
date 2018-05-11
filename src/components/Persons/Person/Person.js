import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
class Person extends Component{
    constructor(props){
        super(props);
      console.log('[Person.js] in side Constructor', props);
      };

      componentWillMount()
      {
        console.log('[Person.js] inside componenetWillMount()');
      };
      componentDidMount()
      {
        console.log('[Person.js] inside componenetDidMount()');
      };


    render(){
        console.log('[Person.js] inside render()');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
            // <div className={classes.person} >
            //     <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            //     <p>{this.props.children}</p>
            //     <input type="text" onChange={this.props.changed} value={this.props.name} />
            // </div>
            // <Aux>
            //     <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            //     <p>{this.props.children}</p>
            //     <input type="text" onChange={this.props.changed} value={this.props.name} />
            // </Aux>            
        )        
    };
}

export default withClass(Person, classes.person); 