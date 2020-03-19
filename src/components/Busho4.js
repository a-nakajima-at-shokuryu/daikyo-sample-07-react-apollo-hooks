import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'

const GET_BUSHO = gql`
    query($id: Int!) {
        post(id: $id) {
            id
            name
        }
    }
`

export default function Busho4() {

    // 初期値
    const [condBushoId, setCondBushoId] = useState(20)
    const [bushoId, setBushoId] = useState("")
    console.log(condBushoId)

    // 部署変更時
    const doChangeSelect = (e) => {
        console.log(e.target.value)
        setBushoId(e.target.value)
    }

    // ボタンクリック時
    const doResetSelect = (e) => {
        console.log(e)
        setBushoId("")
        setCondBushoId(e)
    }
    const doClickButton = () => {
        alert(bushoId)
    }

    // 部署全件取得
    const { loading, error, data } = useQuery(GET_BUSHO, {
        variables: {id : condBushoId}
    })

    // 通信状態に応じたコンポーネントを表示
    if (loading) return <p>Loading...</p>
    if (error)   return <p>Error: {error}</p>

    const busho = data.post
    console.log(busho)

    return (
        <div>
            <InputLabel id="busho-select-label">部署</InputLabel>
            <Select
                labelId="busho-select-label"
                id="busho-select"
                value={bushoId}
                onChange={e => doChangeSelect(e)}
            >
            <MenuItem value={busho.id}>{busho.name}</MenuItem>
            </Select>
            <br />
            <Button variant="contained" color="primary" onClick={e => doResetSelect(10)}>部署Ａのみ選択肢にセット</Button><br />
            <Button variant="contained" color="primary" onClick={e => doResetSelect(20)}>部署Ｂのみ選択肢にセット</Button><br />
            <Button variant="contained" color="primary" onClick={e => doResetSelect(30)}>部署Ｃのみ選択肢にセット</Button><br />
            <Button variant="contained" color="primary" onClick={e => doResetSelect(40)}>部署Ｄのみ選択肢にセット</Button><br />
            <Button variant="contained" color="primary" onClick={e => doResetSelect(50)}>部署Ｅのみ選択肢にセット</Button><br />
            <Button variant="contained" color="primary" onClick={e => doResetSelect(60)}>部署Ｆのみ選択肢にセット</Button><br />
            <Button variant="contained" color="primary" onClick={e => doClickButton()}>選択されている値を取得</Button>
        </div>
    )

}
