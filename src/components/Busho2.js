import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const GET_BUSHO = gql`
    query($id: Int!) {
        post(id: $id) {
            id
            name
        }
    }
`
const GET_BUSHO_ALL = gql`
    {
        posts {
            id
            name
        }
    }
`

export default class Busho2 extends Component {

    // コンストラクタ
    constructor (props) {
        super(props)
        // 状態の初期化
        this.state = {
            value1: '',
            value2: '',
        }
    }

    // チェックボックス変更時
    doChange1 (e) {
        this.setState ({
            value1: e.target.value
        })
    }
    doChange2 (e) {
        this.setState ({
            value2: e.target.value
        })
    }
    
    // 描画
    render () {
        return (
            <div>
                <Query query={GET_BUSHO_ALL}>
                    {({ data, loading }) => {
                        if (loading) return <p>Loading...</p>
                        const bushos = data.posts
                        return (
                            <div>
                                <InputLabel id="busho-select-label">部署1</InputLabel>
                                <Select
                                    labelId="busho-select-label"
                                    id="busho-select"
                                    value={this.state.value1}
                                    onChange={e => this.doChange1(e)}
                                >
                                {bushos.map(repo => (
                                    <MenuItem value={repo.id}>{repo.name}</MenuItem>
                                ))}
                                </Select>
                            </div>
                        )
                    }}
                </Query>
                <br />
                <Query query={GET_BUSHO} variables={{ id: 20 }}>
                    {({ data, loading }) => {
                        if (loading) return <p>Loading...</p>
                        const busho = data.post
                        return (
                            <div>
                                <InputLabel id="busho-select-label">部署2</InputLabel>
                                <Select
                                    labelId="busho-select-label"
                                    id="busho-select"
                                    value={this.state.value2}
                                    onChange={e => this.doChange2(e)}
                                >
                                <MenuItem value={busho.id}>{busho.name}</MenuItem>
                                </Select>
                            </div>
                        )
                    }}
                </Query>
            </div>
        )
    }
}
