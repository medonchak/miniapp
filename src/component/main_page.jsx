import React from 'react'
import { Col, Row } from 'antd';
const MainPage =(props)=>{
    const [mascol, editmascol] = React.useState([ 
        <Col xs={{span: 5, offset: 1,}} lg={{span: 6, offset: 2,}}>
            {props.user?.username}
        </Col>,
        <Col xs={{span: 5, offset: 1,}} lg={{span: 6, offset: 2,}}>
            {props.user?.username}
        </Col>,
        <Col xs={{span: 5, offset: 1,}} lg={{span: 6, offset: 2,}}>
            {props.user?.username}
        </Col>   ])
    let editmas = ()=>{
        editmascol([])
    }
    return (
        <div>
            <Row>
                {mascol}
            </Row>
        </div>
    )
}

export default  MainPage;