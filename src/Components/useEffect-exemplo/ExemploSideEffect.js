import React,{ Component } from 'react'

class ClickClass extends Component{
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    componentDidMount() {
      document.title = `${this.state.count}`
    }
  
    componentDidUpdate() {
      document.title =  `${this.state.count}` 
    }
  
    render() {
      return (
        <div>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
          {this.state.count}
        </div>
      );
    }
  }

  export default ClickClass
