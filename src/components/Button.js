import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {(colorValue) =>
          <button className={`ui button ${colorValue}`}>
            <LanguageContext.Consumer>
              {(value) => value === 'english' ? 'Submit' : 'Versturen'}
            </LanguageContext.Consumer>
          </button>
        }
      </ColorContext.Consumer>
    );
  };
};

export default Button;