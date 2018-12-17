import React, { Component } from 'react';

class Display extends Component {
    constructor(props) {
        super(props);

        this.createDisplay = this.createDisplay.bind(this);
    }

    shouldComponentUpdate(){
        this.createDisplay();
        return true
    }

    createDisplay () {
        return (
            this.props.setHistory.map((obj, i) => {
                return (
                    <div key={i}>
                        {obj.val} {obj.mark} {obj.result}
                    </div>
                )
            })
        )
    }

    render() {
        // console.log(this.props.setHistory);
        return (
            <div>
                {this.createDisplay()}
            </div>
        )
    }
}

export default Display;