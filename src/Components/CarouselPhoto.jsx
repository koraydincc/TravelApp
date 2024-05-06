import React from 'react';
import { Carousel, Col, Row } from 'antd';
import { useSelector } from 'react-redux';

const contentStyle = {
  marginTop: '40px ',
  color: '#fff',
  textAlign: 'center',
  borderRadius: '1rem',
};

const CarouselPhoto = () => {
  const selectedTravelPlacePhoto = useSelector(state => state.selectedTravelPlacePhoto);

  return (
    <Row justify="right"> 
      <Col xs={24} sm={20} md={16} lg={24} xl={24} xxl={24}> 
        <Carousel autoplay arrows dotPosition="left" infinite={true}>
          {selectedTravelPlacePhoto.map((photo, index) => (
            <div key={index}>
              <img src={`${photo.prefix}800x600${photo.suffix}`} style={contentStyle} />
            </div>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default CarouselPhoto;
