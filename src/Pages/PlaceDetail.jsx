import { Card, Col, Row } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import CarouselPhoto from '../Components/CarouselPhoto'
import PlaceTips from '../Components/PlaceTips'
import CardInfo from '../Components/CardInfo'

function PlaceDetail() {
  const params = useParams()

  return (
    <Row gutter={[24, 24]}> {/* Aralarındaki boşluk için gutter kullanabilirsiniz */}
        <Col span={12}>
            <CardInfo/>
            <PlaceTips/>

        </Col>
        <Col span={12}>
            <CarouselPhoto/>
        </Col>
     
    </Row>
    )
}

export default PlaceDetail
