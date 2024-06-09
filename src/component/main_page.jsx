import React from 'react'
import { Col, Row } from 'antd';
const MainPage =(props)=>{

 
    return (
        <div >
            <Row >
                <Col style={{background:'silver',width:'100%',height:'120px',margin:'10px'}} xs={{span: 5, offset: 1,}} lg={{span: 6, offset: 2,}}>
                    Інвестиції  
                </Col>  
                <Col style={{background:'silver',width:'100%',height:'120px',margin:'10px'}} xs={{span: 5, offset: 1,}} lg={{span: 6, offset: 2,}}>
                    Дропи  
                </Col>  
            </Row>
            <Row >
                <Col style={{background:'silver',width:'100%',height:'120px',margin:'10px'}} xs={{span: 5, offset: 1,}} lg={{span: 6, offset: 2,}}>
                    Тестнет   
                </Col>  
                <Col style={{background:'silver',width:'100%',height:'120px',margin:'10px'}} xs={{span: 5, offset: 1,}} lg={{span: 6, offset: 2,}}>
                    Смарт ідеї  
                </Col> 
            </Row>
        </div>
    )
}

export default  MainPage;