class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState(state => ({
        display: !state.display
      }));
    }
    render() {
      // Change code below this line
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
          {this.state.display && <h1>Displayed!</h1>}         //this checks the condition if this.state.display exists ,if it does then it returns h1 otherwise it returns nothing 
         </div>
      );
    }
  };