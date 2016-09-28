// trying out writing app.jsx myslef
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SideMenu extends React.Component {
  constructor(){
    super();
    this.state = {
      'open' : true
    }
  }
  toggle() {
      this.setState( {'open' : !this.state.open});
      }
/*
componentWillMount(){
    this.toggle();
    }
componentDidMount(){
    this.toggle();
    }
  */
  render (){
    const isOpen = this.state.open ? 'opened' : 'closed';
    const _className = `slider-menu ${isOpen}`;
    console.log(isOpen);
    const style = {
        color: 'white'
        }
    return (
    <ReactCSSTransitionGroup 
          transitionName= {isOpen}
          transitionAppear={true} 
          transitionAppearTimeout = {500}
          transitionEnterTimeout={500} 
          transitionLeaveTimeout={400}
          
      >
           <div key ={ 1 } className = {_className} style={style}>
                this is menu d
            </div>
        </ReactCSSTransitionGroup>
      
    )
  }
}
export default SideMenu;
