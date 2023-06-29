import React, { Component } from "react";

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.data = props.data
    }

    render() {
        return <div style={{
            textAlign: 'center',
            lineHeight: 0,
            backgroundColor: 'rgb(30, 30, 30)',
            paddingTop: 'calc(10vh + 32px)',
        }}>
            {this.data.map(path => (<div style={{
                display: 'inline-block',
                width: '45vw',
                // height: '45vw',
                margin: '10px',
                verticalAlign: 'top'
            }}>
                <img src={path} style={{
                    maxWidth: 'calc(45vw - 16px)',
                    maxHeight: 'calc(45vw - 16px)',
                    objectFit: 'contain',
                    // margin: '3px',
                    verticalAlign: 'middle',
                    backgroundColor: 'white',
                    padding: '8px'
                    // outlineStyle: 'solid',
                    // outlineColor: 'black',
                    // outlineWidth: '2px'
                }}/> </div>
            ))}
        </div>
    }
}