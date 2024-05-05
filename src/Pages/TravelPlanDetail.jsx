import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TravelDetailList from '../Components/TravelDetailList'
import { Col, Row } from 'antd'
import TravelDetailAnimation from '../Components/TravelDetailAnimation'
import { useDispatch, useSelector } from 'react-redux'
import { selectedTravel } from '../Store/Actions/travelDataActions'

function TravelPlanDetail() {
  const params = useParams()
  const data = useSelector(state => state.selectedTravel)
  const dispatch = useDispatch()
  
  
 

  return (
    <Row style={{margin:'2rem'}}>
      <Col  xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 24 }} lg={{ span: 24 }}>
     
        <TravelDetailAnimation/>
        <TravelDetailList/>
      </Col>
    </Row>
  )
}

export default TravelPlanDetail
