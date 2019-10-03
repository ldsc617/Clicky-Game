import React from 'react';
import './Container.css';
import Chars from '../Chars';

const Container = props => (
    <div className={
        props.shake ? 'container d-flex flex-wrap justify-content-center shake'
        : 'container d-flex flex-wrap justify-content-center'
    }>
        {props.chars.map((a, i) => <Chars name={a} key={i} clickEvent={props.clickEvent} />
        )}
    </div>
);

export default Container;
