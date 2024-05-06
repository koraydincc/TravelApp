import { Col, Row } from 'antd'
import React from 'react'
import CarouselPhoto from '../Components/CarouselPhoto'
import PlaceTips from '../Components/PlaceTips'
import CardInfo from '../Components/CardInfo'

function PlaceDetail() {

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
