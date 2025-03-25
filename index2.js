class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
    
      this.toggleVisibility=this.toggleVisibility.bind(this);   //the bindinng part must be inside the constructor.
     
    }
    
    toggleVisibility() { //this is a function that hanldes the logic.
    this.setState((prevstate)=>({visibility:!prevstate.visibility}))   //this sets the new visibility depending upon the previous state and here prevstate is the prevoius state passed as an argument automatically by react. 
    }
  
    
    render() {    //this is the part that hanldes the UI.
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  }