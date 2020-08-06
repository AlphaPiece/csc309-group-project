import React from "react";
import "./styles.css";

class SigninButton extends React.Component {
  render() {
    const {name, text, cssID, type, cssClass, val, handle, click} = this.props;
    return (
        <input className="button" name={name} type={type} placeholder={text} 
          id={cssID} className={cssClass} value={val} onChange={handle} onClick={click}/>
    );
  }
}

export default SigninButton;
