import React from 'react';
import './Navbar.css';

const Navbar = props => (
    <div className="Navbar ">
        <div class="clicky">Clicky Game</div>
        <div className={props.navMsgClr}>{props.navMsg}</div>
        <div>Your Score: {props.score} <span className="separator">|</span> High Score: {props.highScore}
        </div>
    </div>
);

export default Navbar;