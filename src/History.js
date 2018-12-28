import React, { Component } from 'react';

class History extends Component {
    constructor(props) {
        super(props);

        this.state = {
            history: [],
            isDisplay: false
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

    showHistory (isDisplay) {
        this.setState({
            history: !isDisplay ? this.props.history : [],
            isDisplay: !isDisplay
        })
    }

    clearHistory () {
        this.props.clearHistory(true);
        this.setState({
            isDisplay: false
            })
    }

    render() {

        return (
            <div id={'historyContainer'}>
                <button
                    className={'historyButton'}
                    onClick={() => {this.showHistory(this.state.isDisplay)}}
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
                    { this.state.isDisplay ? this.historyDisplay() : null}
                </div>
            </div>
        )
    }
}

export default History;