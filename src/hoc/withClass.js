import React, {Component} from 'react';

// const withClass = (WrappedComponent, className) => {
//    return (props) => ( <div className={className}>
//         <WrappedComponent {...props} />
//    </div> )
// }

const withClass = (WrappedComponent, className) => {
   const Me = class extends Component{
       render(){
            return (<div className={className}>
                <WrappedComponent ref={this.props.thiscanbeanyname} {...this.props} />
            </div>)
       }
   } 
   return React.forwardRef((props, ref) => {
       return <Me thiscanbeanyname={ref} {...props} />
   });
}

export default withClass;