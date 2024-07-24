import { Component } from 'react';
import './button.styles.scss';

interface ButtonProps {
  text: string;
  color: string;
}

/*
interface Button_Type_Classes {
  blue: string;
  green: string;
  gray: string;
}
*/

const Button_Type_Classes: {[key: string]: string} = {
  blue: 'blue-button',
  green: 'green-button',
  gray: 'gray-button'
}

class Button extends Component<ButtonProps> {
  render() {
    return (
      <button
        className={`front-button ${Button_Type_Classes[this.props.color]}`}
      >
        { this.props.text }
      </button>
    )
  }
}

export default Button;
