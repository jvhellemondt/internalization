import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderSubmit( language ) {
    return language === 'english' ? 'Submit' : 'Versturen';
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(colorValue) =>
          <button className={`ui button ${colorValue}`}>
            <LanguageContext.Consumer>
              {({language}) => this.renderSubmit(language)}
            </LanguageContext.Consumer>
          </button>
        }
      </ColorContext.Consumer>
    );
  };
};

export default Button;