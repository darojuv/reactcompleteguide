import React, {Component} from 'react';

// const withClass = (WrappedComponent, className) => {
//    return (props) => ( <div className={className}>
//         <WrappedComponent {...props} />
//    </div> )
// }

const withClass = (WrappedComponent, className) => {
   return class extends Component{
       render(props){
            return (<div className={className}>
                <WrappedComponent {...props} />
            </div>)
       }
   } 
}
export default withClass;