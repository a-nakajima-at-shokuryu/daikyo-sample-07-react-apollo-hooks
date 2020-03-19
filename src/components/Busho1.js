import React, { Component } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default class Busho1 extends Component {

    // コンストラクタ
    constructor (props) {
        super(props)
        // 状態の初期化
        this.state = {
            value: ''
        }
    }

    // チェックボックス変更時
    doChange (e) {
        this.setState ({
            value: e.target.value
        })
    }

    // 描画
    render () {
        return (
            <div>
                <InputLabel id="busho-select-label">部署</InputLabel>
                <Select
                    labelId="busho-select-label"
                    id="busho-select"
                    value={this.state.value}
                    onChange={e => this.doChange(e)}
                >
                <MenuItem value={10}>部署Ａ</MenuItem>
                <MenuItem value={20}>部署Ｂ</MenuItem>
                <MenuItem value={30}>部署Ｃ</MenuItem>
                </Select>
            </div>
        )
    }
}
