// this is the styled Header
import React from 'react';

class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      'fluid' : false,
      'logo' : "http://files.catchsolutions.com.au/assets/cloud-icon.png"
    }
  } // end constructor

  render (){
    return (
      <div>
        <div className = "logo" data-src = {this.state.logo} >
          {this.props.Width}{this.props.Height}
        </div>
      </div>
    )
  }

}
Header.defaultProps = {
  "Width" : 150,
  "Height" : 45
}
export default Header;
