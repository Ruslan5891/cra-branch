import React from "react";

class ImpureComponent extends React.PureComponent {
    constructor() {
      super();
      this.state = {
        counter: 0
      }
          
      setInterval(() => {
        this.setState({
          counter: 0
        });
      }, 1000);
    }
    
    render() {
        console.log(this.props)
      return <b>Counter Value: {this.state.counter}</b>
    }
  }

  export default ImpureComponent