import React, { Component } from 'react';

class Display extends Component {
    constructor(props) {
        super(props);

        this.createDisplay = this.createDisplay.bind(this);
    }

    createDisplay () {
        return (
            this.props.history.map((obj, i) => {
                return (
                    <p className={'displayComponent'} key={i}>
                        {obj.val} {obj.mark} {obj.result}
                    </p>
                )
            })
        )
    }

    render() {
        return (
            <div className={'display'}>
                {this.createDisplay()}
            </div>
        )
    }
}

export default Display;