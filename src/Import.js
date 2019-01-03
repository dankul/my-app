import React, { Component } from 'react';
import readXlsFile from 'read-excel-file';

class Import extends Component {
    constructor(props) {
        super(props);

        this.state = {
            xlsHistory: []
        };

        this.getXlsHistory = this.getXlsHistory.bind(this);
        this.dron = this.dron.bind(this);
    };

    getXlsHistory() {
        console.log('\x1b[36m', this.constructor.name, '\x1b[0m', );
        const input = document.getElementById('file');

        readXlsFile(input.files[0]).then((rows) => {
            this.setState({xlsHistory: rows});
        });

        this.dron();
    }

    dron () {
        this.props.getImportHistory(true);
    }

    render() {
        return (
            <div className={'input'}>
                <input
                    type="file"
                    name="file"
                    id="file"
                    className="inputfile"
                    onChange={() => {this.getXlsHistory()}}
                />
                <label htmlFor="file">Import History</label>
            </div>
        )
    }
}

export default Import;