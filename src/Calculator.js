import React, { Component } from 'react';
import Display from "./Display";
import History from "./History";
import Import from "./Import";
import Export from "./Export";

const buttons = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '/', '.', '0', '=', '*'];

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valueList: [],
            history: [],
            value: {},
            stringValue: {
                val: '',
                result: 0
            },
            stringHistory: [],
            importHistory: []
        };

        this.createButton = this.createButton.bind(this);
        this.createValueList = this.createValueList.bind(this);
        this.calculatingEquation = this.calculatingEquation.bind(this);
        this.createStringHistory = this.createStringHistory.bind(this);
        this.clearHistory = this.clearHistory.bind(this);
        this.getImportHistory = this.getImportHistory.bind(this);
    }

    getImportHistory (hist) {
        this.setState({
            importHistory: [hist]
        })
    }

    clearHistory (tru) {
        if (tru) {
            this.setState({
                history: []
            })
        }
    }

    createStringHistory (val) {
        let arr = this.state.stringHistory;
        arr[arr.length] = val;
    }

    createValueList (val) {
        let valueList = this.state.valueList;
        let value = this.state.value;
        let strHist = this.state.stringValue;

        switch (val) {
            case '+':
                value.mark = val;
                strHist.val += val;
            break;
            case '-':
                value.mark = val;
                strHist.val += val;
            break;
            case '/':
                value.mark = val;
                strHist.val += val;
            break;
            case '*':
                value.mark = val;
                strHist.val += val;
            break;
            case '=':
                value.mark = val;
                strHist.val += val;
            break;
            default:
                strHist.val += val;

                if(value.val) {
                    value.val += val;
                } else {
                    value.val = val;
                }
            break;
        }

        if(value.mark === '=') {
            this.createStringHistory(strHist);
            this.setState({
                stringValue: {
                    val: ''
                },
            })
        }


        if(value.mark) {
            valueList[valueList.length] = value;
            this.setState({
                value: {}
            });

            if(value.mark === '='){
                this.calculatingEquation(valueList);
            }
        }
    }

    calculatingEquation (valueList) {
        let history = this.state.history;
        let strVal = this.state.stringValue;

        valueList.forEach((obj, key, arr) => {
            switch (obj.mark) {
                case '+':
                    if (key !== 0) {
                        obj.res = +arr[key - 1].res + +arr[key + 1].val
                    } else {
                        obj.res = +arr[key].val + +arr[key + 1].val
                    }
                    break;
                case '-':
                    if (key !== 0) {
                        obj.res = +arr[key - 1].res - +arr[key + 1].val
                    } else {
                        obj.res = +arr[key].val - +arr[key + 1].val
                    }
                    break;
                case '/':
                    if (key !== 0) {
                        obj.res = +arr[key - 1].res / +arr[key + 1].val
                    } else {
                        obj.res = +arr[key].val / +arr[key + 1].val
                    }
                    break;
                case '*':
                    if (key !== 0) {
                        obj.res = +arr[key - 1].res * +arr[key + 1].val
                    } else {
                        obj.res = +arr[key].val * +arr[key + 1].val
                    }
                    break;
                case '=':
                    obj.result = +arr[key - 1].res;
                    history[history.length] = arr;
                    strVal.result = obj.result;
                    break;
                default:
                    console.log('Unable to calculate!');
                    break;
            }
        });
    }

    createButton = () => (
        buttons.map((button, i) => {
            return (
                <div
                    key={i}
                    className={'button'}
                >
                    <button
                        onClick={() => {
                            this.createValueList(button)
                        }}
                    >
                        {button}
                    </button>
                </div>
            )
        })
    );

    render() {
        return (
            <div className={'mainContainer'}>
                <Display history={this.state.valueList}/>
                <Import/>
                <Export xlsHistory={this.state.stringHistory} getImportHistory={this.getImportHistory}/>
                <button
                    onClick={() => {this.setState({valueList: []})}}
                    className={'buttonSpecial'}
                >
                    C
                </button>
                {this.createButton()}
                <History impHist={this.state.importHistory} history={this.state.history} clearHistory={this.clearHistory}/>
            </div>
        )
    }
}

export default Calculator;
