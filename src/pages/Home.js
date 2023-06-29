import React, { Component, createRef } from "react";
import CrossFade from "../components/Crossfade";

export default class Home extends Component{
    state = {
        photo: 0
    }

    render() {
        return <div>
            <CrossFade paths={this.data} duration={12000} />
        </div>
    }

    constructor(props) {
        super(props);
        this.data = props.data
        this.ref = createRef()
    }
}