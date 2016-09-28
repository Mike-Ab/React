// trying out writing app.jsx myslef
import React from 'react';
import Header from './Header.jsx';
import SideMenu from './components/SideMenu.jsx';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      'fluid' : false,
      "mystate" : "OMGGGGGGG state is used ... function could not be used"
    }
  }

  mystate (){
    return 'This is none of your business return';
  }

  render (){
    return (
      <div className = {this.state.fluid ? 'container-fluid' : 'container'}>
        
     <Header Width={100} Height = {452}>
        </Header>
        <SideMenu />
        <h3>{this.state.mystate}</h3>
        <h3>{this.mystate()}</h3>
      </div>
    )
  }
}
export default App;
