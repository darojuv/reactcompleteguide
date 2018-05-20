import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import{ AuthContext } from '../../../containers/App';

class Person extends Component{
    focus(){
  
        console.log(this.inputElement.current);
    }
    constructor(props){
        super(props);
        this.inputElement = React.createRef();
      console.log('[Person.js] in side Constructor', props);
      };

      componentWillMount()
      {
        console.log('[Person.js] inside componenetWillMount()');
      };
      componentDidMount()
      {
        console.log('[Person.js] inside componenetDidMount()');

        if(this.props.position === 0){
            //this.inputElement.focus();
            this.inputElement.current.focus();//Here inputElement is React wrapper, to get current gives the access to element
        }
      };


    render(){
        console.log('[Person.js] inside render()');
        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p> I am Authenticated  !</p> : null }
                </AuthContext.Consumer>                    
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                ref={ this.inputElement }
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />

            </Aux>
            //////ref={(inp) => { this.inputElement = inp;}}
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

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
export default withClass(Person, classes.person); 