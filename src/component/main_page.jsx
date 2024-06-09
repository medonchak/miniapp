import React from 'react'
import { Col, Row } from 'antd';
const MainPage =(props)=>{
    const mascol =  [
        <Col xs={{span: 5, offset: 1,}} lg={{span: 6, offset: 2,}}>
            {props.user?.username}
        </Col>,
        <Col xs={{span: 5, offset: 1,}} lg={{span: 6, offset: 2,}}>
            {props.user?.username}
        </Col>,
        <Col xs={{span: 5, offset: 1,}} lg={{span: 6, offset: 2,}}>
            {props.user?.username}
        </Col>   ]
 
    return (
        <div>
            <Row>
                {mascol}
            </Row>
        </div>
    )
}

export default  MainPage;