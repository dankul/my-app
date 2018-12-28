import React, { Component } from 'react';
import Workbook from 'react-excel-workbook'

export default class Export extends Component {
    render() {
        return (
            <Workbook filename="example.xls" element={<button>Export</button>}>
                <Workbook.Sheet data={this.props.xlsHistory} name="Sheet A">
                    <Workbook.Column label="Val" value="val"/>
                    <Workbook.Column label="Result" value="result"/>
                </Workbook.Sheet>
            </Workbook>
        )
    }
};