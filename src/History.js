import React, { Component } from 'react';

class History extends Component {
    constructor(props) {
        super(props);

        this.historyDisplay = this.historyDisplay.bind(this);
    }

    historyDisplay () {
        return (
            this.props.history.map((item, id) => {
                return (
                    <div key={id} className={'history'}>
                        {item.map((obj, i) => {
                            return (
                                <p
                                    key={i}
                                    className={'displayComponent'}
                                >
                                 {obj.val} {obj.mark} {obj.result}
                                </p>
                            )
                        })}
                    </div>

                )
            })
        )
    }

    render() {
        return (
            <div className={'historyDisplay'}>
                  {this.historyDisplay()}
            </div>

        )
    }
}

export default History;