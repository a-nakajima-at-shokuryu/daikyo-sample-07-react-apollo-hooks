import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'

const GET_BUSHO_ALL = gql`
    {
        posts {
            id
            name
        }
    }
`

export default function Busho3() {

    // 初期値
    const [bushoId, setBushoId] = useState("")
    // const [bushoId, setBushoId] = useState("10")

    // 部署変更時
    const doChangeSelect = (e) => {
        console.log(e.target.value)
        setBushoId(e.target.value)
    }

    // ボタンクリック時
    const doClickButton = () => {
        alert(bushoId)
    }

    // 部署全件取得
    const { loading, error, data } = useQuery(GET_BUSHO_ALL)

    // 通信状態に応じたコンポーネントを表示
    if (loading) return <p>Loading...</p>
    if (error)   return <p>Error: {error}</p>

    const bushos = data.posts
    console.log(bushos)

    return (
        <div>
            <InputLabel id="busho-select-label">部署</InputLabel>
            <Select
                labelId="busho-select-label"
                id="busho-select"
                value={bushoId}
                onChange={e => doChangeSelect(e)}
            >
            {bushos.map(repo => (
                <MenuItem value={repo.id}>{repo.name}</MenuItem>
            ))}
            </Select>
            <br />
            <Button variant="contained" color="primary" onClick={e => doClickButton()}>選択されている値を取得</Button>
        </div>
    )

}
