import React, { useEffect } from 'react'
import TravelDetailList from '../Components/TravelDetailList'
import { Col, Row } from 'antd'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedTravel } from '../Store/Slices/travelDataSlice'

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
