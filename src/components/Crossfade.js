import React, { Component } from "react";

export default class CrossFade extends Component {
    state = {
        index: 0 
    }

    constructor(props) {
        super(props)
        this.paths = props.paths
        this.duration = props.duration
        setInterval(() => this.nextPhoto(), this.duration)
    }
    
    render() {
        const shared_style = (offset) => ({
            objectFit: 'cover',
            overflow: 'hidden',
            width: '100vw',
            height: '100vh',
            marginRight: 'auto',
            marginLeft: 'auto',
            display: 'block',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            zIndex: '-1',
            animationName: offset ? 'fadein' : 'fadeout',
            animationDuration: '3s',
            animationFillMode: 'forwards',
        })
        
        let im1 = (this.state.index - this.state.index % 2) % this.paths.length
        let im2 = (this.state.index - (this.state.index + 1) % 2) % this.paths.length

        console.log( im1, im2)
        return <div>
            <img src={this.paths[im2]} style={shared_style(this.state.index % 2)}/>
            <img src={this.paths[im1]} style={shared_style((this.state.index + 1) % 2)}/>
        </div>
    }

    nextPhoto() {
        this.setState(({index}) => ({'index': (index + 1)}))
    }
}