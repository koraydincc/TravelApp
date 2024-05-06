import React from 'react'
import TravelDetailList from '../Components/TravelDetailList'
import { Col, Row } from 'antd'

function TravelPlanDetail() {

  return (
    <Row style={{margin:'2rem'}}>
      <Col  xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 24 }} lg={{ span: 24 }}>
             <TravelDetailList/>
      </Col>
    </Row>
  )
}

export default TravelPlanDetail
