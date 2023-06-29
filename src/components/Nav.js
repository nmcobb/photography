import React, { Component } from "react";

export default class Nav extends Component {
    render() {
        return <div style={{
            width: '100%',
            backgroundColor: 'black',
            opacity: .6,
            position: 'fixed',
            top: 0
        }}>
            <p style={{
                margin: 0,
                color: 'white',
                padding: '4vh 10vw',
                fontSize: '32px',
                fontFamily: "CooperHewitt-Light"
            }}> 
                Miles Cobb
            </p>
        </div>
    }
}