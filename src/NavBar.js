import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';

const Navbar = ({onNewGame}) => {
    return(
      <div>
          <header>
              <h2>Memory Game</h2>
          <nav>
              <li><a onClick = {onNewGame}>New Game</a></li>
          </nav>
          </header>
      </div>
    );
}
Navbar.propTypes = {
    onNewGame: PropTypes.func.isRequired
}
export default Navbar;