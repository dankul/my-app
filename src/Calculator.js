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
        };

        this.createButton = this.createButton.bind(this);
        this.createValueList = this.createValueList.bind(this);
        this.calculatingEquation = this.calculatingEquation.bind(this);
    }

    createValueList(val) {
        let valueList = this.state.valueList;
        let value = this.state.value;

        switch (val) {
            case '+':
                value.mark = val;
            break;
            case '-':
                value.mark = val;
            break;
            case '/':
                value.mark = val;
            break;
            case '*':
                value.mark = val;
            break;
            case '=':
                value.mark = val;
            break;
            default:
                if(value.val) {
                    value.val += val;
                } else {
                    value.val = val;
                }
            break;
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

    calculatingEquation(valueList) {
        let history = this.state.history;

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
                    break;
                default:
                    console.log('Unable to calculate!');
                    break;
            }
        });
    }

    createButton() {
        return (
            buttons.map((button, i) => {
                return (
                    <div
                        key={i}
                        className={'button'}
                    >
                        <button
                            onClick={() => {this.createValueList(button)}}
                        >
                            {button}
                        </button>
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div className={'mainContainer'}>
                <Display setHistory={this.state.valueList}/>
                <History setHistory={this.state.valueList}/>
                <Import/>
                <Export/>
                <button
                    onClick={() => {this.setState({valueList: []})}}
                    className={'button'}
                >
                    C
                </button>
                {this.createButton()}
            </div>
        )
    }
}

export default Calculator;
