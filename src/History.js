import React, { Component } from 'react';

class History extends Component {
    constructor(props) {
        super(props);

        this.state = {
            history: []
        };

        this.historyDisplay = this.historyDisplay.bind(this);
        this.clearHistory = this.clearHistory.bind(this);
        this.showHistory = this.showHistory.bind(this);
    }

    historyDisplay () {
        return (
            this.state.history.map((item, id) => {
                return (
                    <div key={id} className={'history'}>
                        {item.map((obj, i) => {
                            return (
                                <p
                                    key={i}
                                    className={'displayComponentHistory'}
                                    id={i}
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

    showHistory () {
        this.setState({
            history: this.props.history
        })
    }

    clearHistory () {
        this.setState({
            history: []
        })
    }

    render() {
        return (
            <div id={'historyContainer'}>
                <button
                    className={'historyButton'}
                    onClick={() => {this.showHistory()}}
                >
                    History
                </button>
                <button
                    className={'historyButton'}
                    onClick={() => {this.clearHistory()}}
                >
                    Clear History
                </button>
                <div className={'historyDisplay'}>
                    {this.historyDisplay()}
                </div>
            </div>

        )
    }
}

export default History;