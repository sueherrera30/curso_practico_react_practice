import React from 'react';

class Button extends React.Component{
//    constructor(props){
//         super(props);
//         this.state = {
//           count: 0,      
//         }
//    }
   state = {
           count: 0,
   }
   handleClick = () => {
           this.setState({
                   count: this.state.count + 1,
           })
   }
   render(){
           const {count} = this.state;
           return(
                <div>
                      {/* <h1>Manzanitas:{this.state.count}</h1> */}
                      <h1>Manzanitas:{count}</h1>
                      <button type="button" onClick={this.handleClick}>
                              click  :) 
                       </button>

                </div>
           );
   }    
}

export default Button;