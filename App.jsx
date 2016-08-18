// trying out writing app.jsx myslef
import React from 'react';
import Header from './Header.jsx';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      'fluid' : false,
      "mystate" : "state is used ... function could not be used"
    }
  }

  mystate (){
    return 'This is funciton return';
  }

  render (){
    return (
      <div className = {this.state.fluid ? 'container-fluid' : 'container'}>
        
        <Header>

        </Header>
        <h3>{this.state.mystate}</h3>
        <h3>{this.mystate()}</h3>
      </div>
    )
  }
}
export default App;
