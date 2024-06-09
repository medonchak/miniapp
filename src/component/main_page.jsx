import React from 'react'
import { Col, Row } from 'antd';
const MainPage =(props)=>{
    const mascol =  [
        <Col style={{background:'silver',width:'120px',height:'120px',margin:'10px'}} xs={{span: 5, offset: 1,}} lg={{span: 6, offset: 2,}}>
           sdds {props.user?.username}
        </Col>,
        <Col style={{background:'silver',width:'120px',height:'120px',margin:'10px'}} xs={{span: 5, offset: 1,}} lg={{span: 6, offset: 2,}}>
         dsds   {props.user?.username}
        </Col>  ]
 
    return (
        <div style={{width:'50%',height:'50%'}}>
            <Row >
                {mascol}
            </Row>
            <Row >
                {mascol}
            </Row>
       
        </div>
    )
}

export default  MainPage;